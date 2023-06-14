import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../../../assets/icons/logo.png'
import { Avatar } from '../../../../components'

import StudentIntroCard from './StudentIntroCard'

import style from './studentDBIntro.module.scss'

const StudentDashboardIntro = () => {
  return (
    <section className={style.introLayout}>
      <div className={style.sideNav}>
        <div className={style.logoDiv}>
          <NavLink to={`/`} className={style.imgLogoContainer}>
            <img src={logo} alt='logo' className='cc-img-fluid' />
          </NavLink>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.header}>
          <Avatar />
        </div>
        <div className={style.wrapper}>
          <StudentIntroCard />
        </div>
      </div>
    </section>
  )
}

export default StudentDashboardIntro
