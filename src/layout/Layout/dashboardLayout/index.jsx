// REACT DEFAULTS
// import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
// COMPONENTS
import { DashboardLeftSideNav, DashboardMobileNav } from '../..'
// STYLES
import style from './dashboardLayout.module.scss'

const DashboardLayout = () => {
  return (
    <main className={[style.dashboardLayout, `row`].join(' ')}>
      <div className={[style.left, `col-1`].join(' ')}>
        <DashboardLeftSideNav />
      </div>
      <DashboardMobileNav />
      <div className={[style.body, `col-11`].join(' ')}>
        <Outlet />
      </div>
    </main>
  )
}

// DashboardLayout.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]).isRequired,
// }

export default DashboardLayout
