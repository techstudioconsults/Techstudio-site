import React from 'react'
import { MdOutlineSlideshow, MdOutlineVideocam } from 'react-icons/md'
import { BsRecordCircle } from 'react-icons/bs'
// import noise from '../../../../../assets/video/white-noise.gif'
import {
  Avatar,
  CalendarOffCanvas,
  ChatDisplay,
} from '../../../../../components'
import style from './liveCourse.module.scss'
import { HiOutlineMicrophone } from 'react-icons/hi'
import { CgScreen } from 'react-icons/cg'

const SingleCourseViewLive = () => {
  return (
    <section className={style.classView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <div>
            <h4 className={[style.title, `mb-0`].join(' ')}>
              Becoming a UX Designer from Scra…
            </h4>
            <p>Emma Gannon, Author, Broadcaster, Podcast Host</p>
          </div>
          <Avatar />
          <CalendarOffCanvas>
            <ChatDisplay />
          </CalendarOffCanvas>
        </div>
        <section className={style.frame}>
          <div className={style.videoframe}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218529/techstudio-web-app/assets/video/white-noise_oy3hyr.gif`}
              alt='static'
              className='cc-img-fluid'
            />
          </div>
          <div className={style.controlFrame}>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <MdOutlineVideocam className={style.i} />
                {/* <MdVideocam  className={style.i} /> */}
              </div>
              <p>Cam</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <MdOutlineSlideshow className={style.i} />
              </div>
              <p>Slides</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <BsRecordCircle color='red' className={[style.i].join(' ')} />
                {/* <MdVideocam  className={style.i} /> */}
              </div>
              <p>Rec</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <HiOutlineMicrophone className={style.i} />
                {/* <MdVideocam  className={style.i} /> */}
              </div>
              <p>Mic</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <CgScreen className={style.i} />
                {/* <MdVideocam size={`2rem`} /> */}
              </div>
              <p>Share</p>
            </div>
          </div>
        </section>
      </div>
      <div className={style.chatView}>
        <ChatDisplay />
      </div>
    </section>
  )
}

export default SingleCourseViewLive
