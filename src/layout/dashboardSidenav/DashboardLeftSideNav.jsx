import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import style from './dashboardLeftSideNav.module.scss'
import { Icon } from '@iconify/react'
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'

const DashboardSideNav = () => {
  const { leftStudentNav, leftTeacherNav, leftAdminNav } = DASHBOARD_CONTENT

  const location = useLocation()
  const route = location.pathname.split('/')

  const activeSidebar = (role) => {
    return location.pathname.includes(role)
  }

  const navDisplay = activeSidebar(`tutor`)
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
    : activeSidebar(`admin`)
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

  return (
    <div className={style.dashboardSideNav}>
      <div className={style.logoDiv}>
        <NavLink to={`/`} className={style.imgLogoContainer}>
          <img
            src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218509/techstudio-web-app/assets/icons/logo_n9icvi.png`}
            alt='logo'
            className='cc-img-fluid'
          />
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
