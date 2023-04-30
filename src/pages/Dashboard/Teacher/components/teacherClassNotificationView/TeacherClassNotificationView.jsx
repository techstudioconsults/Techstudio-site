import React from 'react'
import PropTypes from 'prop-types'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from './classNotification.module.scss'
import { Avatar, AvatarStack } from '../../../../../components'
import { MdCalendarToday, MdOutlineComputer } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Icon } from '@iconify/react'
import { useSelector } from 'react-redux'
import {
  selectDetails,
  selectShowDetailBox,
} from '../../../Admin/classes/api/classSlice'
import { Link } from 'react-router-dom'

const color = {
  color: `#95A8B8`,
}

const TeacherClassNotificationView = ({ mobile }) => {
  const { imageList } = DASHBOARD_CONTENT
  const details = useSelector(selectDetails)
  const showDetailsBox = useSelector(selectShowDetailBox)

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  return (
    <div
      className={[
        style.notification,
        mobile ? `m-0 p-8` : `p-10`,
        showDetailsBox ? `d-block` : `d-none`,
      ].join(' ')}
    >
      <div className={style.classSummary}>
        <div>
          <div className={style.header}>
            <div className={style.avatar}>
              <Avatar />
            </div>
            <h6 className={['fw-bold', style.title].join(' ')}>
              {details?.title || details?.topic}
            </h6>
            <p className={[style.text, `text-secondary`].join(' ')}>
              {details?.tutors?.[0].name || details?.tutorName}
            </p>
            <p className={`text-dark text-wrap hide_scrollbar ${style.desc}`}>
              {details?.description}
            </p>
            <p className='mt-3 fs-2xl fw-bold text-danger'>{`N${
              details?.fee || `500,000`
            }`}</p>
          </div>
          <div
            className={`d-flex justify-content-between align-items-center mt-5`}
          >
            <p className='fs-sm text-info'>Students:</p>
            <div className='w-75'>
              <AvatarStack imageList={imageList} />
            </div>
          </div>
          <div
            className={`d-flex justify-content-between align-items-center mt-5`}
          >
            <p className='fs-sm text-info'>
              Course: {details?.courseTitle || `not available on the API`}
            </p>
            {/* <p className='fs-sm text-white w-75'></p> */}
          </div>
          <div className={`d-flex gap-5 flex-wrap mt-5`}>
            <div className='flex-grow-1 d-flex align-items-start gap-3'>
              <div className='text-info'>
                <Icon
                  icon={`material-symbols:calendar-today`}
                  width={`1.5rem`}
                />
              </div>
              <div>
                <p className='fw-bold fs-sm'>
                  {convertDateToReadable(details?.startDate || details?.date)}
                </p>
                <p className={['fs-xs text-info'].join(' ')}>Start Date</p>
              </div>
            </div>
            <div className='flex-grow-1 d-flex align-items-start gap-3'>
              <div className='text-info'>
                <Icon
                  icon={`material-symbols:calendar-today`}
                  width={`1.5rem`}
                />
              </div>
              <div hidden={!details?.endDate}>
                <p className='fw-bold fs-sm'>
                  {convertDateToReadable(details?.endDate)}
                </p>
                <p className={['fs-xs text-info'].join(' ')}>End Date</p>
              </div>
              <div hidden={!details?.time}>
                <p className='fw-bold fs-sm'>{details?.time}</p>
                <p className={['fs-xs text-info'].join(' ')}>time</p>
              </div>
            </div>
            <div className='flex-grow-1 d-flex align-items-start gap-3'>
              <div className='text-info'>
                <Icon icon={`ic:baseline-computer`} width={`1.5rem`} />
              </div>
              <div>
                <p className='fw-bold fs-sm'>
                  {details?.preference || details?.classType} class
                </p>
                <p style={color} className={['fs-xs text-info'].join(' ')}>
                  preference
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={[`d-flex gap-3 align-items-center `].join(' ')}>
          {/* <Link to={`/admin/class/:id/lesson/edit`}>
            <button className='fs-xs bg-primary text-white rounded rounded-lg px-3'>
              Reschedule A Lesson
            </button>
          </Link> */}
          {/* <button className='fs-sm fw-semibold bg-white text-primary rounded rounded-lg px-3 w-50 border border-primary'>
            Reschedule
          </button> */}
        </div>
      </div>
    </div>
  )
}

TeacherClassNotificationView.propTypes = {
  mobile: PropTypes.bool.isRequired,
}

export default TeacherClassNotificationView
