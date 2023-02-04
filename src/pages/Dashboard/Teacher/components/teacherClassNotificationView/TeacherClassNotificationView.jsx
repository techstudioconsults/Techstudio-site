import React from 'react'
import PropTypes from 'prop-types'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from './classNotification.module.scss'
import { Avatar, AvatarStack } from '../../../../../components'
import { MdCalendarToday, MdOutlineComputer } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'

const TeacherClassNotificationView = ({ mobile }) => {
  const { imageList } = DASHBOARD_CONTENT
  const color = {
    color: `#95A8B8`,
  }

  return (
    <div
      className={[style.notification, mobile ? `m-0 p-8` : `m-4 p-12`].join(
        ' '
      )}
    >
      <div className={style.classSummary}>
        <div>
          <div className={style.header}>
            <div className={style.avatar}>
              <Avatar />
            </div>
            <h6 className={['fw-bold', style.title].join(' ')}>
              Becoming a UX Designer from Scratch: Things to look out for
            </h6>
            <p className={[style.text].join(' ')}>
              Emma Gannon, Author, Broadcaster
            </p>
          </div>
          <div className={style.Participants}>
            <p style={color} className='fs-sm'>
              Participants:
            </p>
            <AvatarStack imageList={imageList} />
          </div>
          <div className={style.classTimeType}>
            <div className='d-flex align-items-center gap-3'>
              <div>
                <AiOutlineClockCircle color='#95A8B8' size={20} />
              </div>
              <div>
                <p className='fw-bold fs-sm'>55 mins</p>
                <p style={color} className={['fs-sm'].join(' ')}>
                  Time
                </p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <div>
                <MdOutlineComputer color='#95A8B8' size={20} />
              </div>
              <div>
                <p className='fw-bold fs-sm'>Live Class</p>
                <p style={color} className={['fs-sm'].join(' ')}>
                  class Type
                </p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <div>
                <MdCalendarToday color='#95A8B8' size={20} />
              </div>
              <div>
                <p className='fw-bold fs-sm'>17 Jan, 2021</p>
                <p style={color} className={['fs-sm'].join(' ')}>
                  Date
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={[`d-flex gap-3 my-5 align-items-center `].join(' ')}>
          <button className='fs-sm bg-primary text-white rounded rounded-lg px-3 w-50'>
            Start Class
          </button>
          <button className='fs-sm fw-semibold bg-white text-primary rounded rounded-lg px-3 w-50 border border-primary'>
            Reschedule
          </button>
        </div>
      </div>
    </div>
  )
}

TeacherClassNotificationView.propTypes = {
  mobile: PropTypes.bool.isRequired,
}

export default TeacherClassNotificationView
