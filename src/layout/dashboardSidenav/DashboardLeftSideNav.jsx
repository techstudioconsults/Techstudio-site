import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import style from './dashboardLeftSideNav.module.scss'
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'

const DashboardSideNav = () => {
  const { leftStudentNav } = DASHBOARD_CONTENT

  const navDisplay = leftStudentNav.map((nav) => {
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

export default DashboardSideNav
