import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { DashboardRightDrawer } from '../../../layout'
import CalendarOffCanvas from '../../global/offCanvas/CalendarOffCanvas'
import SearchComponent from '../../global/searchComponent/SearchComponent'

import style from './dashboardnavbar.module.scss'

const DashboardNavbar = ({ isTDB, isADB }) => {
  const location = useLocation()
  const courseID = location.pathname.split(`/`)[3]

  return (
    <nav
      className={[
        'd-flex align-items-center justify-content-between',
        style.nav,
      ].join(' ')}
    >
      <div className={style.navbarCTA}>
        <h5 className='m-0 fw-bolder text-blue d-none d-md-flex'>Dashboard</h5>
        <div className='d-flex align-items-center gap-2'>
          {/* make this search input a stand alone component */}
          <SearchComponent />
          <div className={[`d-none d-md-flex gap-2`].join(' ')}>
            {isTDB ? (
              <Link>
                <button
                  style={{ height: `2.25rem`, width: `9.938rem` }}
                  className='btn btn-primary fs-sm'
                >
                  Schedule Lesson
                </button>
              </Link>
            ) : (
              <Link to={`/admin/courses/create`}>
                <button
                  style={{ height: `2.25rem`, width: `9.938rem` }}
                  className='btn btn-primary fs-sm'
                >
                  Create Course
                </button>
              </Link>
            )}
            {courseID && isADB ? (
              <Link
                to={`/admin/class/${courseID}/create`}
                state={{ tutors: location?.state?.tutors }}
              >
                <button
                  style={{ height: `2.25rem`, width: `10.063rem` }}
                  className='btn btn-outline-primary fs-sm fw-semibold'
                >
                  Create Class
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className='d-lg-none'>
        <CalendarOffCanvas>
          <DashboardRightDrawer />
        </CalendarOffCanvas>
      </div>
    </nav>
  )
}

DashboardNavbar.propTypes = {
  isTDB: PropTypes.bool,
}

export default DashboardNavbar
