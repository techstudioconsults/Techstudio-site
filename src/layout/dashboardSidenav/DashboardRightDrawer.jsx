import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, CalendarApp, ClassDetails } from '../../components'
import style from './dashboardDrawer.module.scss'

function dashboardRightDrawer({ isTDB }) {
  const classDetails = isTDB ? <ClassDetails isTDB /> : <ClassDetails />

  return (
    <section className={style.drawer}>
      <Avatar />
      <div>
        <CalendarApp />
      </div>
      <div>{classDetails}</div>
    </section>
  )
}

dashboardRightDrawer.propTypes = {
  isTDB: PropTypes.bool,
}

export default dashboardRightDrawer
