import React from 'react'
// import PropTypes from 'prop-types'
import { AiFillFileText } from 'react-icons/ai'
import { FaVideo } from 'react-icons/fa'
import { IoMdChatbubbles } from 'react-icons/io'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from './classNotification.module.scss'

const ClassNotificationView = () => {
  const { studentBoard } = DASHBOARD_CONTENT
  const notificationDisplay = studentBoard.notification.map((notice) => {
    return (
      <div key={notice.id} className={style.notificationMessage}>
        <div className={style.icon}>
          {notice.type === `video` ? (
            <FaVideo />
          ) : notice.type === `messsage` ? (
            <IoMdChatbubbles />
          ) : (
            <AiFillFileText />
          )}
        </div>
        <div className={style.details}>
          <h5 className={style.message}>{notice.message}</h5>
          <p className={style.metaDetail}>{notice.metaDetails}</p>
        </div>
      </div>
    )
  })
  return (
    <div className={[style.notification].join(' ')}>
      <h5>Notification</h5>
      <div className={style.notificationGroup}>
        <h6 className={style.date}>Today, 28th March, 2021</h6>
        <div className={style.noticeWrapper}>{notificationDisplay}</div>
      </div>
      <div className={style.notificationGroup}>
        <h6 className={style.date}>Yesterday, 27th March, 2021</h6>
        <div className={style.noticeWrapper}>{notificationDisplay}</div>
      </div>
    </div>
  )
}

ClassNotificationView.propTypes = {
  // mobile: PropTypes.bool.isRequired,
}

export default ClassNotificationView
