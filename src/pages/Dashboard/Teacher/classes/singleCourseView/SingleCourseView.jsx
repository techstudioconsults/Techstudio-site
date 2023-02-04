import React from 'react'
import { Avatar } from '../../../../../components'
import clock from '../../../../../assets/icons/alarm-clock.png'
import style from './singlecourseview.module.scss'
import VideoFrame from '../../components/videoframe/VideoFrame'
import StudentDashboardClassTab from '../../components/tab/StudentDashboardClassTab'

const SingleCourseView = () => {
  return (
    <section className={style.singleClassView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <Avatar />
        </div>
        <header>
          <h4 className={style.title}>
            Becoming a UX Designer from Scratch: Things to look out for
          </h4>
          <div className={style.subTitle}>
            <span>Emma Gannon, Author, Broadcaster, Podcast Host</span>
            <span className='d-flex align-items-center gap-3'>
              <img src={clock} alt='time-img' />
              <span>30 mins</span>
            </span>
          </div>
        </header>
        <div>
          <VideoFrame />
        </div>
        <div>
          <StudentDashboardClassTab />
        </div>
      </div>
    </section>
  )
}

export default SingleCourseView
