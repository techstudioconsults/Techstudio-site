import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from './resourceCourseTab.module.scss'

const UsersCourseTab = ({ courses, type }) => {
  const location = useLocation()
  let { courseID } = useParams()
  const redirect = useNavigate()

  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )

  useEffect(() => {
    if (!courseID) {
      redirect(`/admin/users/all`, {
        state: {
          type: type,
          courseID: `all`,
        },
      })
    }
    activeRoute(courseID)
  }, [activeRoute, courseID, courses, redirect, type])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          state={{
            type: type,
            courseID: course.id,
          }}
          to={`/admin/users/${course?.id}`}
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
        <li key={1} className={['nav-item', style.link].join(' ')}>
          <NavLink
            state={{
              type: type,
              courseID: `all`,
            }}
            to={`/admin/users/${`all`}`}
            className={[
              'nav-link',
              style.a,
              activeRoute(`all`)
                ? `border border-primary border-top-0 border-start-0 border-end-0 rounded-0 border-3`
                : null,
            ].join(' ')}
          >
            {/* {course?.title} */}
            {type === `tutors` ? `All Tutors` : `All Students`}
          </NavLink>
        </li>
        {coursesNav}
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        <Outlet />
      </div>
    </section>
  )
}

UsersCourseTab.propTypes = {
  courses: PropTypes.array,
  tutors: PropTypes.array,
  type: PropTypes.string,
  // feedback: PropTypes.node,
}

export default UsersCourseTab
