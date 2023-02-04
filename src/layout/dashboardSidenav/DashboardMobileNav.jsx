import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'
import style from './dashboardMobilenav.module.scss'

const DashboardMobileNav = ({ isTDB, isADB }) => {
  const { leftStudentNav, leftTeacherNav, leftAdminNav } = DASHBOARD_CONTENT

  const navDisplay = isTDB
    ? leftTeacherNav.map((nav) => {
        return (
          <Link
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
    : isADB
    ? leftAdminNav.map((nav) => {
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
    <nav className={style.mobileNav}>
      <div className={style.navGroup}>{navDisplay}</div>
    </nav>
  )
}

DashboardMobileNav.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default DashboardMobileNav
