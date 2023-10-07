import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { DASHBOARD_CONTENT } from '../../../../layout/Layout/dashboardLayout/content'
import AvatarStack from '../../avatarStacks/AvatarStack'

import style from './classDetails.module.scss'

const ClassDetails = ({ isTDB, isADB }) => {
  const { imageList } = DASHBOARD_CONTENT
  return (
    <div className={style.classSummary}>
      <div className={style.header}>
        <span className='fs-xs text-primary'>Today, 28th March, 2021</span>
        <h5 className={['fw-bold mt-2'].join(' ')}>Design Process</h5>
        <p className={['fs-sm text-secondary', style.text].join(' ')}>
          The course is highly interactive with projects, Checklists &
          actionable lectures built into…
        </p>
      </div>
      <div className={style.classTimeType}>
        <div className='d-flex align-items-center gap-3 mb-5'>
          <div>
            <Icon icon={`mdi:clock-outline`} color='grey' width={`1rem`} />
          </div>
          <div>
            <p className='fw-bold fs-sm'>55 mins</p>
            <p className='fs-sm text-secondary'>Duration</p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-3 mb-5'>
          <div>
            <Icon icon={`mdi:laptop`} color='grey' width={`1rem`} />
          </div>
          <div>
            <p className='fw-bold fs-sm'>Live Class</p>
            <p className='fs-sm text-secondary'>Lecture Type</p>
          </div>
        </div>
      </div>
      <div>
        <AvatarStack imageList={imageList} />
      </div>
      <div
        className={[
          isTDB ? `d-flex` : `d-none`,
          `gap-3 mt-20 align-items-center `,
        ].join(' ')}
      >
        <button className='fs-sm bg-primary text-white rounded rounded-lg px-3 w-50'>
          Start Lesson
        </button>
        <button className='fs-sm fw-semibold bg-white text-primary rounded rounded-lg px-3 w-50 border border-primary'>
          Reschedule
        </button>
      </div>
      {/* <div className={[isADB ? `d-flex` : `d-none`, `gap-3 my-5`].join(' ')}>
        <button className='fs-sm fw-semibold bg-white text-primary rounded rounded-lg px-3 w-50 border border-primary'>
          Reschedule
        </button>
      </div> */}
    </div>
  )
}

ClassDetails.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default ClassDetails
