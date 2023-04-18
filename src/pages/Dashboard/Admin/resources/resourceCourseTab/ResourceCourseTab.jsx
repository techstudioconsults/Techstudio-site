import React, { useCallback, useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from '../resourceCourseTab/resourceCourseTab.module.scss'

const ResourceCourseTab = ({ resources }) => {
  const location = useLocation()
  let { courseID } = useParams()
  const redirect = useNavigate()

  console.log(resources)

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )

  useEffect(() => {
    if (!courseID) {
      redirect(`/admin/resources/${resources[0].id}`)
    }
    activeRoute(courseID)
  }, [courseID, resources])

  const coursesNav = resources?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          state={{
            courseTitle: course.title,
            courseResources: course.resources,
          }}
          to={`/admin/resources/${course?.id}`}
          className={[
            'nav-link',
            style.a,
            activeRoute(course.id)
              ? `border border-primary border-top-0 border-start-0 border-end-0 rounded-0 border-3`
              : null,
          ].join(' ')}
        >
          {course?.title}
        </NavLink>
      </li>
    )
  })

  return (
    <section className={`${style.tab}`}>
      <ul className={['nav hide_scrollbar', style.tabList].join(' ')}>
        {coursesNav}
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        <Outlet />
      </div>
    </section>
  )
}

ResourceCourseTab.propTypes = {
  resources: PropTypes.array,
  // feedback: PropTypes.node,
}

export default ResourceCourseTab
