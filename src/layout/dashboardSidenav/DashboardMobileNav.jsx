import React from 'react'
// import logo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom'
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'
import style from './dashboardMobilenav.module.scss'

const DashboardMobileNav = () => {
  const { leftStudentNav } = DASHBOARD_CONTENT

  const navDisplay = leftStudentNav.map((nav) => {
    return (
      <Link key={nav.id} className={[style.link, style.active].join(' ')}>
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
    <nav className={style.mobileNav}>
      {/* <div className={style.logoDiv}>
        <Link to={`/`} className={style.imgLogoContainer}>
          <img src={logo} alt='logo' className='cc-img-fluid' />
        </Link>
      </div> */}
      {/* link nav */}
      <div className={style.navGroup}>{navDisplay}</div>
    </nav>
  )
}

export default DashboardMobileNav
