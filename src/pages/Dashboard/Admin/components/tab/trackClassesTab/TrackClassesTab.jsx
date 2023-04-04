import React, { useCallback, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from '../adminTab.module.scss'
import {
  useGetClassByCourseIDMutation,
  useGetLessonByCourseIDMutation,
} from '../../../classes/api/classApiSlice'

const TrackClassesTab = ({ courses }) => {
  const location = useLocation()
  const [getClassByCourseID] = useGetClassByCourseIDMutation()
  const [getLessonByCourseID] = useGetLessonByCourseIDMutation()

  const courseId = location.pathname.split(`/`)[3]

  const getClasses = useCallback(
    async (courseID) => {
      await getClassByCourseID(courseID).unwrap()
      await getLessonByCourseID(courseID).unwrap()
    },
    [getClassByCourseID, getLessonByCourseID]
  )

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName)
  }

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          onClick={() => getClasses(course.id)}
          to={`/admin/classes/${course?.id}`}
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

  useEffect(() => {
    getClasses(courseId)
  }, [courseId, getClasses])

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

TrackClassesTab.propTypes = {
  courses: PropTypes.array,
  // feedback: PropTypes.node,
}

export default TrackClassesTab
