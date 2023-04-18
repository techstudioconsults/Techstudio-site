/* eslint-disable react-hooks/exhaustive-deps */
import style from './adminTab.module.scss'
import '../../../../../scss/custom/bs-custom.css'
import PropTypes from 'prop-types'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const AdminDashboardTab = ({ courses }) => {
  // verifies if routeName is the one active (in browser input)
  let { courseID } = useParams()
  const redirect = useNavigate()

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName)
  }

  useEffect(() => {
    if (!courseID) {
      redirect(`/admin/dashboard/${courses[0].id}`)
    }
    activeRoute(courseID)
  }, [courseID])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          state={{ tutors: course.tutors }}
          to={`/admin/dashboard/${course?.id}`}
          className={[
            'nav-link',
            style.a,
            activeRoute(course?.id)
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
    <section className={style.tab}>
      <ul className={['nav hide_scrollbar', style.tabList].join(' ')}>
        {coursesNav}
      </ul>
      <div className='tab-content my-8' id='myTabContent'>
        <Outlet />
      </div>
    </section>
  )
}

AdminDashboardTab.propTypes = {
  courses: PropTypes.array,
  // feedback: PropTypes.node,
}

export default AdminDashboardTab
