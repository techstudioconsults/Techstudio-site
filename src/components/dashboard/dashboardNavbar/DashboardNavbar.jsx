import React from 'react'
import { DashboardRightDrawer } from '../../../layout'
import CalendarOffCanvas from '../../global/offCanvas/CalendarOffCanvas'
import style from './dashboardnavbar.module.scss'

const DashboardNavbar = () => {
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
      <CalendarOffCanvas>
        <DashboardRightDrawer />
      </CalendarOffCanvas>
    </nav>
  )
}

export default DashboardNavbar
