import React from 'react'
import style from './dashboardnavbar.module.scss'

const DashboardNavbar = () => {
  return (
    <nav
      className={[
        'd-flex align-items-center justify-content-between',
        style.nav,
      ].join(' ')}
    >
      <h5 className='m-0 fw-bold text-blue'>Dashboard</h5>
      <div className={style.input}>
        <input type='text' placeholder='Search for task and more' />
      </div>
    </nav>
  )
}

export default DashboardNavbar
