import React from 'react'
import { DashboardRightDrawer } from '../../../layout'
import Button from '../../global/Button'
import CalendarOffCanvas from '../../global/offCanvas/CalendarOffCanvas'
import style from './dashboardnavbar.module.scss'
import PropTypes from 'prop-types'
import AvatarDropdown from '../../global/avatar/avatarDropdown/AvatarDropdown'

const DashboardNavbar = ({ isTDB }) => {
  return (
    <nav
      className={[
        'd-flex align-items-center justify-content-between',
        style.nav,
      ].join(' ')}
    >
      <div className={style.navbarCTA}>
        <div className={`${style.navbarLayout} d-flex`}>
          <h5 className='m-0 fw-bold text-blue d-none d-md-flex'>Dashboard</h5>
          <div className='d-flex align-items-center gap-10'>
            <div className={style.input}>
              <input type='text' placeholder='Search for task and more' />
            </div>
            <div
              className={[isTDB ? `d-none d-md-flex gap-3` : `d-none`].join(
                ' '
              )}
            >
              <Button
                linkHref={`/`}
                linkText='Create Course'
                solidBtn
                navBtn
                height={`40`}
              />
              <button className='btn btn-outline-primary fs-sm px-8'>
                Create Class
              </button>
            </div>
          </div>
        </div>
        <div>
          <AvatarDropdown />
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
