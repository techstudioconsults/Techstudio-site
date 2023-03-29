import React, { useCallback, useEffect } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from '../adminTab.module.scss'
import { useGetClassByCourseIDMutation } from '../../../classes/api/classApiSlice'

const TrackClassesTab = ({ courses }) => {
  const [getClassByCourseID] = useGetClassByCourseIDMutation()

  const getClasses = async (courseID) => {
    await getClassByCourseID(courseID).unwrap()
  }

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <Link
          onClick={() => getClasses(course.id)}
          to={`/admin/classes/${course?.id}`}
          className={['nav-link', style.a].join(' ')}
        >
          {course?.title}
        </Link>
      </li>
    )
  })
  return (
    <section className={style.tab}>
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
}

export default TrackClassesTab
