import React from 'react'
import PropTypes from 'prop-types'

import { AvatarDropdown, CalendarApp, ClassDetails } from '../../components'

import style from './dashboardDrawer.module.scss'

function dashboardRightDrawer({ isTDB }) {
  const classDetails = isTDB ? <ClassDetails isTDB /> : <ClassDetails />

  return (
    <section className={style.drawer}>
      <div className='d-flex justify-content-end align-items-center'>
        <AvatarDropdown />
      </div>
      <div className='my-10'>
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
