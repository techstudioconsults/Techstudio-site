import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { Avatar, AvatarStack } from '../../../../../components'
import useCurrency from '../../../../../hooks/useCurrency'
import { selectDetails } from '../../../Admin/classes/api/classSlice'

import style from './classNotification.module.scss'

const color = {
  color: `#95A8B8`,
}

const TeacherClassNotificationView = ({ mobile }) => {
  const details = useSelector(selectDetails)
  const formatCurrency = useCurrency()

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
              {details?.title ||
                details?.topic ||
                `Javascript Fullstack January 2023`}
            </h6>
            <p className={[style.text, `text-secondary`].join(' ')}>
              {details?.tutors?.[0].name || details?.tutorName}
            </p>
            <p className={`text-dark text-wrap hide_scrollbar ${style.desc}`}>
              {details?.description ||
                `Lorem ipsum dolor sit amet consectetur. Quis nam viverra vitae varius aenean tempor vel etiam. Tortor aliquet imperdiet magnis tristique dignissim pharetra malesuada. Mauris egestas eget sapien at massa tellus. `}
            </p>
            <p className='mt-3 fs-2xl fw-bold text-danger'>
              {details?.fee ? `${formatCurrency(details?.fee)}` : ``}
            </p>
          </div>
          <div
            className={`d-flex justify-content-between align-items-center mt-5`}
          >
            <p className='fs-sm text-info'>Students:</p>
            <div className='w-75'>
              <AvatarStack imageList={details?.students} />
            </div>
          </div>
          <div
            className={`d-flex justify-content-between align-items-center mt-5`}
          >
            <p className='fs-sm text-info'>
              {/* Class: {details?.title || details?.classTitle} */}
              Course: {`Javascript Fullstack`}
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
                  {convertDateToReadable(
                    details?.startDate || details?.date || `18 Jan, 2023`
                  )}
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
              <div hidden={details?.endDate}>
                <p className='fw-bold fs-sm'>
                  {convertDateToReadable(details?.endDate || `18 Jan, 2023`)}
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
                  {details?.preference || details?.classType || `Weekend`} class
                </p>
                <p style={color} className={['fs-xs text-info'].join(' ')}>
                  preference
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={[`d-flex gap-3 align-items-center `].join(' ')}>
          <Link to={`/tutor/class/lesson/create`}>
            <button className='fs-xs bg-primary text-white rounded rounded-lg px-5'>
              Schedule A Lesson
            </button>
          </Link>
          <Link to={`/tutor/class/lesson/create`}>
            <button className='fs-xs bg-primary text-white rounded rounded-lg px-5'>
              Reschedule Lesson
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

TeacherClassNotificationView.propTypes = {
  mobile: PropTypes.bool.isRequired,
}

export default TeacherClassNotificationView
