import React from 'react'
import { Avatar, CalendarOffCanvas } from '../../../../components'
import TeacherClassNotificationView from '../../Teacher/components/teacherClassNotificationView/TeacherClassNotificationView'
import TrackClassesTab from '../components/tab/trackClassesTab/TrackClassesTab'
import style from './adminClasses.module.scss'

const AdminClassView = () => {
  return (
    <section className={style.classView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Classes</h4>
          <Avatar />
          <CalendarOffCanvas>
            <TeacherClassNotificationView mobile />
          </CalendarOffCanvas>
        </div>
        <div className='my-3'>
          <TrackClassesTab />
        </div>
      </div>
      <div className={style.notification}>
        <TeacherClassNotificationView mobile={false} />
      </div>
    </section>
  )
}

export default AdminClassView
