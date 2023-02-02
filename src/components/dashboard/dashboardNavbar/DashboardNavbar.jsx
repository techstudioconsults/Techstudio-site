import React from 'react'
import { DashboardRightDrawer } from '../../../layout'
import Button from '../../global/Button'
import CalendarOffCanvas from '../../global/offCanvas/CalendarOffCanvas'
import style from './dashboardnavbar.module.scss'
import PropTypes from 'prop-types'

const DashboardNavbar = ({ isTDB }) => {
  return (
    <nav
      className={[
        'd-flex align-items-center justify-content-between',
        style.nav,
      ].join(' ')}
    >
      <h5 className='m-0 fw-bold text-blue d-none d-md-flex'>Dashboard</h5>
      <div className={style.input}>
        <input type='text' placeholder='Search for task and more' />
      </div>
      <div className={[isTDB ? `d-block` : `d-none`].join(' ')}>
        <Button linkText='Create Class' solidBtn navBtn height={`36`} />
      </div>
      <div>
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
