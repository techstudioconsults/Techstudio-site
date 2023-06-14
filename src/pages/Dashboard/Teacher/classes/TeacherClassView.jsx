import React from 'react'

import { Avatar, CalendarOffCanvas, ClassesTab } from '../../../../components'
import TeacherClassNotificationView from '../components/teacherClassNotificationView/TeacherClassNotificationView'

import style from './teacherClasses.module.scss'

const TeacherClassView = () => {
  return (
    <section className={style.classView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Schedule a lesson</h4>
          <Avatar />
          <CalendarOffCanvas>
            <TeacherClassNotificationView mobile />
          </CalendarOffCanvas>
        </div>
        <div className='my-3'>
          <p>Set new time and date for the scheduled class.</p>
          <ClassesTab isTDB />
        </div>
      </div>
      <div className={style.notification}>
        <TeacherClassNotificationView mobile={false} />
      </div>
    </section>
  )
}

export default TeacherClassView
