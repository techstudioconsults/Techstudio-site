import React from 'react'

import { Avatar, CalendarOffCanvas, ClassesTab } from '../../../../components'
import ClassNotificationView from '../components/classNotificationView/ClassNotificationView'

import style from './studentClasses.module.scss'

const StudentCalssesView = () => {
  return (
    <section className={style.classView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Classes</h4>
          <Avatar />
          <CalendarOffCanvas>
            <ClassNotificationView />
          </CalendarOffCanvas>
        </div>
        <ClassesTab />
      </div>
      <div className={style.notification}>
        <ClassNotificationView />
      </div>
    </section>
  )
}

export default StudentCalssesView
