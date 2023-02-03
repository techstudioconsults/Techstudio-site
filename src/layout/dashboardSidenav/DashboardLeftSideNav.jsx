import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import style from './dashboardLeftSideNav.module.scss'
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'
// import AppContext from '../../contexts/AppProvider'

const DashboardSideNav = ({ isTDB }) => {
  const { leftStudentNav, leftTeacherNav } = DASHBOARD_CONTENT
  // const { route, getdashboardNavRoute } = useContext(AppContext)

  // const handleActiveRoute = (e) => {
  //   getdashboardNavRoute(e.currentTarget.id)
  // }

  const navDisplay = isTDB
    ? leftTeacherNav.map((nav) => {
        return (
          <Link
            // onClick={handleActiveRoute}
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <img src={nav.img} alt='img' />
              </div>
              <p className={[style.title].join(' ')}>{nav.title}</p>
            </li>
          </Link>
        )
      })
    : leftStudentNav.map((nav) => {
        return (
          <Link
            to={nav.link}
            key={nav.id}
            className={[style.link, style.active].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <img src={nav.img} alt='img' />
              </div>
              <p className={style.title}>{nav.title}</p>
            </li>
          </Link>
        )
      })

  return (
    <div className={style.dashboardSideNav}>
      <div className={style.logoDiv}>
        <Link to={`/`} className={style.imgLogoContainer}>
          <img src={logo} alt='logo' className='cc-img-fluid' />
        </Link>
      </div>
      {/* link nav */}
      <div className={style.navGroup}>{navDisplay}</div>
    </div>
  )
}

DashboardSideNav.propTypes = {
  isTDB: PropTypes.bool,
}

export default DashboardSideNav
