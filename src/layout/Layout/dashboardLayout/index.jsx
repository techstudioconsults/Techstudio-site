// REACT DEFAULTS
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
// COMPONENTS
import { DashboardLeftSideNav, DashboardMobileNav } from '../..'
// STYLES
import style from './dashboardLayout.module.scss'

const DashboardLayout = ({ isTDB, isADB }) => {
  return (
    <main className={[style.dashboardLayout, `row`].join(' ')}>
      <div className={style.left}>
        <div className={[`col-1`, isTDB ? `d-grid` : `d-none`].join(' ')}>
          <DashboardLeftSideNav isTDB />
        </div>
        <div className={[`col-1`, isTDB ? `d-none` : `d-grid`].join(' ')}>
          <DashboardLeftSideNav />
        </div>
        <div className={[`col-1`, isADB ? `d-grid` : `d-none`].join(' ')}>
          <DashboardLeftSideNav isADB />
        </div>
      </div>
      <div className='d-xl-none'>
        <div className={[isTDB ? `visible` : `d-none`].join(' ')}>
          <DashboardMobileNav isTDB />
        </div>
        <div className={[isTDB ? `d-none` : `visible`].join(' ')}>
          <DashboardMobileNav />
        </div>
        <div className={[isADB ? `d-visible` : `d-none`].join(' ')}>
          <DashboardMobileNav isADB />
        </div>
      </div>
      <div className={[style.body, `col-11`].join(' ')}>
        <Outlet />
      </div>
    </main>
  )
}

DashboardLayout.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default DashboardLayout
