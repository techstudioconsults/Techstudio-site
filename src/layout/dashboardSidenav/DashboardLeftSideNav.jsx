import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import style from './dashboardLeftSideNav.module.scss'
import { Icon } from '@iconify/react'
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'

const DashboardSideNav = ({ isTDB, isADB }) => {
  const { leftStudentNav, leftTeacherNav, leftAdminNav } = DASHBOARD_CONTENT

  const { pathname } = useLocation()
  const route = pathname.split('/')

  const navDisplay = isTDB
    ? leftTeacherNav.map((nav) => {
        return (
          <NavLink
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <img
                  src={
                    route[2] === nav.title.toLocaleLowerCase()
                      ? nav.imgLight
                      : nav.imgGrey
                  }
                  alt='img'
                />
              </div>
              <p
                className={[
                  style.title,
                  route[2] === nav.title.toLocaleLowerCase()
                    ? `text-white`
                    : null,
                ].join(' ')}
              >
                {nav.title}
              </p>
            </li>
          </NavLink>
        )
      })
    : isADB
    ? leftAdminNav.map((nav) => {
        return (
          <NavLink
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <Icon
                  width={`1.5rem`}
                  height={`1.5rem`}
                  icon={nav.icon}
                  color={
                    route[2] === nav.title.toLocaleLowerCase()
                      ? `white`
                      : `grey`
                  }
                />
              </div>
              <p
                className={[
                  style.title,
                  route[2] === nav.title.toLocaleLowerCase()
                    ? `text-white`
                    : null,
                ].join(' ')}
              >
                {nav.title}
              </p>
            </li>
          </NavLink>
        )
      })
    : leftStudentNav.map((nav) => {
        return (
          <NavLink
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <img
                  src={
                    route[2] === nav.title.toLocaleLowerCase()
                      ? nav.imgLight
                      : nav.imgGrey
                  }
                  alt='img'
                />
              </div>
              <p
                className={[
                  style.title,
                  route[2] === nav.title.toLocaleLowerCase()
                    ? `text-white`
                    : null,
                ].join(' ')}
              >
                {nav.title}
              </p>
            </li>
          </NavLink>
        )
      })

  return (
    <div className={style.dashboardSideNav}>
      <div className={style.logoDiv}>
        <NavLink to={`/`} className={style.imgLogoContainer}>
          <img src={logo} alt='logo' className='cc-img-fluid' />
        </NavLink>
      </div>
      {/* link nav */}
      <div className={style.navGroup}>{navDisplay}</div>
    </div>
  )
}

DashboardSideNav.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default DashboardSideNav
