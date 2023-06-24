import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'

import style from './dashboardMobilenav.module.scss'

const DashboardMobileNav = ({ isTDB, isADB }) => {
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
