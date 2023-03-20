import React from 'react'
import { DashboardRightDrawer } from '../../../layout'
import CalendarOffCanvas from '../../global/offCanvas/CalendarOffCanvas'
import style from './dashboardnavbar.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const DashboardNavbar = ({ isTDB }) => {
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
          <div className={`input-group ${style.searchInput}`}>
            <input
              type={`search`}
              className='form-control border border-0 text-secondary h-100'
              aria-describedby='search'
              placeholder='Search for courses, classes, students and more'
            />
            <div
              className={`input-group-text bg-white border border-0 text-secondary h-100`}
              id='passwordHelpBlock'
            >
              <Icon width={`1.2rem`} icon={`ri:search-line`} />
            </div>
          </div>
          <div
            className={[isTDB ? `d-none d-md-flex gap-2` : `d-none`].join(' ')}
          >
            <Link to={`/admin/courses/create`}>
              <button
                style={{ height: `2.25rem`, width: `9.938rem` }}
                className='btn btn-primary fs-sm'
              >
                Create Course
              </button>
            </Link>
            <button
              style={{ height: `2.25rem`, width: `10.063rem` }}
              className='btn btn-outline-primary fs-sm fw-semibold'
            >
              Create Class
            </button>
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
