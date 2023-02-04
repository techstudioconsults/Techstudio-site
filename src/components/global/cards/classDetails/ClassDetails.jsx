import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineComputer } from 'react-icons/md'
import { DASHBOARD_CONTENT } from '../../../../layout/Layout/dashboardLayout/content'
import AvatarStack from '../../avatarStacks/AvatarStack'
import style from './classDetails.module.scss'

const ClassDetails = () => {
  const { imageList } = DASHBOARD_CONTENT
  return (
    <div
      className={[
        style.classSummary,
        `d-flex flex-column justify-content-between`,
      ].join(' ')}
    >
      <div className={style.header}>
        <span className='fs-xs'>Today, 28th March, 2021</span>
        <h5 className={['fw-bold'].join(' ')}>Design Process</h5>
        <p className={['fs-sm', style.text].join(' ')}>
          The course is highly interactive with projects, Checklists &
          actionable lectures built into…
        </p>
      </div>
      <div className={style.classTimeType}>
        <div className='d-flex align-items-center gap-3'>
          <div>
            <AiOutlineClockCircle color='grey' size={20} />
          </div>
          <div>
            <p className='fw-bold fs-sm'>55 mins</p>
            <p className='fs-sm'>Duration</p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-3'>
          <div>
            <MdOutlineComputer color='grey' size={20} />
          </div>
          <div>
            <p className='fw-bold fs-sm'>Live Class</p>
            <p className='fs-sm'>Lecture Type</p>
          </div>
        </div>
      </div>
      <div>
        <AvatarStack imageList={imageList} />
      </div>
      <div
        className={[
          `gap-3 my-5 align-items-center `,
          //   isTDB ? `d-flex` : `d-none`,
        ].join(' ')}
      >
        {/* <button className='fs-sm bg-primary text-white rounded rounded-lg px-3 w-50'>
          Start Class
        </button> */}
        <button className='fs-sm fw-semibold bg-white text-primary rounded rounded-lg px-3 w-50 border border-primary'>
          Reschedule
        </button>
      </div>
    </div>
  )
}

export default ClassDetails
