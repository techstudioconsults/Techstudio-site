import React from 'react'
import PropTypes from 'prop-types'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from './classNotification.module.scss'
import { Avatar, AvatarStack } from '../../../../../components'
import { MdCalendarToday, MdOutlineComputer } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Icon } from '@iconify/react'
import { useSelector } from 'react-redux'
import { selectClassDetails } from '../../../Admin/classes/api/classSlice'

const color = {
  color: `#95A8B8`,
}

const TeacherClassNotificationView = ({ mobile }) => {
  const { imageList } = DASHBOARD_CONTENT
  const classDetails = useSelector(selectClassDetails)

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  return (
    <div
      className={[style.notification, mobile ? `m-0 p-8` : `p-10`].join(' ')}
    >
      <div className={style.classSummary}>
        <div>
          <div className={style.header}>
            <div className={style.avatar}>
              <Avatar />
            </div>
            <h6 className={['fw-bold', style.title].join(' ')}>
              {classDetails.title}
            </h6>
            <p className={[style.text, `text-secondary`].join(' ')}>
              Ibori James, Tutor
            </p>
            <p className={`text-dark ${style.desc}`}>
              {classDetails.description}
            </p>
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
            <p className='fs-sm text-info'>Course:</p>
            <p className='fs-sm text-white w-75'>javascript Fullstack</p>
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
                  {convertDateToReadable(classDetails.startDate)}
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
              <div>
                <p className='fw-bold fs-sm'>
                  {convertDateToReadable(classDetails.endDate)}
                </p>
                <p className={['fs-xs text-info'].join(' ')}>End Date</p>
              </div>
            </div>
            <div className='flex-grow-1 d-flex align-items-start gap-3'>
              <div className='text-info'>
                <Icon icon={`ic:baseline-computer`} width={`1.5rem`} />
              </div>
              <div>
                <p className='fw-bold fs-sm'>Live Class</p>
                <p style={color} className={['fs-xs text-info'].join(' ')}>
                  prefrence
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={[`d-flex gap-3 align-items-center `].join(' ')}>
          <button className='fs-xs bg-primary text-white rounded rounded-lg px-3 w-50'>
            Schedule A Lesson
          </button>
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
