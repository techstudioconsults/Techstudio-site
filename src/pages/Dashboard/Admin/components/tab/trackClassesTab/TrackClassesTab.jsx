import React, { useCallback, useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from '../adminTab.module.scss'
import {
  useGetClassByCourseIDMutation,
  useGetLessonByCourseIDMutation,
} from '../../../classes/api/classApiSlice'
import SpinnerComponent from '../../../../../../components/global/skeletonLoader/SpinnerComponent'

const TrackClassesTab = ({ courses }) => {
  const location = useLocation()
  const [getClassByCourseID, classArgs] = useGetClassByCourseIDMutation()
  const [getLessonByCourseID, lessonArgs] = useGetLessonByCourseIDMutation()

  let { courseID } = useParams()
  const redirect = useNavigate()
  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )
  const getClasses = useCallback(async () => {
    if (courseID) {
      await getClassByCourseID(courseID).unwrap()
      await getLessonByCourseID(courseID).unwrap()
    }
  }, [courseID, getClassByCourseID, getLessonByCourseID])

  useEffect(() => {
    if (courseID) {
      redirect(`/admin/classes/${courseID}`)
    } else {
      redirect(`/admin/classes/${courses[0]?.id}`)
    }
    activeRoute(courseID)
  }, [activeRoute, courseID, courses, redirect])

  useEffect(() => {
    getClasses()
  }, [courseID, getClasses])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
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

  return (
    <section className={`${style.tab}`}>
      <ul className={['nav hide_scrollbar', style.tabList].join(' ')}>
        {coursesNav}
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        {classArgs.isLoading ? <SpinnerComponent /> : <Outlet />}
      </div>
    </section>
  )
}

TrackClassesTab.propTypes = {
  courses: PropTypes.array,
  // feedback: PropTypes.node,
}

export default TrackClassesTab
