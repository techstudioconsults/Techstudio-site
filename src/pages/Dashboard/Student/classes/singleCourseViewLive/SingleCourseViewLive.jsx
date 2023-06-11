import React from 'react'
// import { MdOutlineSlideshow, MdOutlineVideocam } from 'react-icons/md'
// import { BsRecordCircle } from 'react-icons/bs'
// import noise from '../../../../../assets/video/white-noise.gif'
import {
  Avatar,
  CalendarOffCanvas,
  ChatDisplay,
} from '../../../../../components'
import style from './liveCourse.module.scss'
// import { HiOutlineMicrophone } from 'react-icons/hi'
// import { CgScreen } from 'react-icons/cg'
import { Icon } from '@iconify/react'

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
                <Icon icon={`mdi:videocam-outline`} className={style.i} />
                {/* <MdVideocam  className={style.i} /> */}
              </div>
              <p>Cam</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <Icon
                  icon={`material-symbols:slideshow-outline`}
                  className={style.i}
                />
              </div>
              <p>Slides</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                {/* <MdVideocam  className={style.i} /> */}
              </div>
              <p>Rec</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <Icon icon={`bytesize:microphone`} className={style.i} />
              </div>
              <p>Mic</p>
            </div>
            <div className={style.action}>
              <div className={[style.icon].join(' ')}>
                <Icon icon={`gg:screen`} className={style.i} />
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
