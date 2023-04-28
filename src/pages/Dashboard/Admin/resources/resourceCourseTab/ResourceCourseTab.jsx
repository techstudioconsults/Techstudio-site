import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from '../resourceCourseTab/resourceCourseTab.module.scss'
import { useGetResourcesByCourseIDMutation } from '../api/resourceApiSlice'
import { setResources } from '../api/resourceSlice'

const ResourceCourseTab = ({ courses }) => {
  const [resourcesLength, setResourceLength] = useState()
  const location = useLocation()
  let { resource } = useParams()
  const navigate = useNavigate()
  const [getResourcesByCourseID, resourcesArgs] =
    useGetResourcesByCourseIDMutation()

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )

  console.log(resource)

  const getResources = useCallback(async () => {
    let courseID = location?.state?.course?.id

    if (courseID) {
      const res = await getResourcesByCourseID(courseID).unwrap()
      setResourceLength(res.data.resources.length)
    }
  }, [getResourcesByCourseID, location?.state?.course?.id])

  useEffect(() => {
    if (!resource) {
      navigate(`/admin/resources/${courses[0]?.id}`)
    }
    activeRoute(location?.state?.course?.id)
  }, [activeRoute, courses, location?.state?.course?.id, navigate, resource])

  useEffect(() => {
    getResources()
  }, [getResources])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          state={{
            course: course,
            resourcesLength,
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
  courses: PropTypes.array,
  // feedback: PropTypes.node,
}

export default ResourceCourseTab
