// REACT DEFAULTS
import PropTypes from 'prop-types'
// COMPONENTS
import { DashboardLeftSideNav, DashboardRightDrawer } from '../..'
// STYLES
import style from './dashboardLayout.module.scss'

const DashboardLayout = ({ children }) => {
  return (
    <main className={[style.dashboardLayout, `row`].join(' ')}>
      <div className={[style.left, `col-1`].join(' ')}>
        <DashboardLeftSideNav />
      </div>
      <div className={[style.body, `col-11`].join(' ')}>{children}</div>
      <div className={[style.right, `col-4`].join(' ')}>
        <DashboardRightDrawer />
      </div>
    </main>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default DashboardLayout
