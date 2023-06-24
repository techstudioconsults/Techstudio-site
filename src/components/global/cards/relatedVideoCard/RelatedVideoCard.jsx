import React from 'react'

// import video from '../../../../assets/video/video.mp4'
import clock from '@/assets/icons/alarm-clock-II.png'

import style from './relatedVideoCard.module.scss'

const RelatedVideoCard = () => {
  return (
    <section className={style.videoCard}>
      <div>
        <video height='94' width='163' controls className={style.videoFeed}>
          <source
            src={`https://res.cloudinary.com/dkszgtapy/video/upload/v1686218532/techstudio-web-app/assets/video/video_arycwv.mp4`}
            type='video/mp4'
          />
          <track
            src='captions_en.vtt'
            kind='captions'
            srcLang='en'
            label='english_captions'
          ></track>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={style.details}>
        <p className={style.title}>Theory of User Experience</p>
        <p className={style.name}>Oluwaseyi Sola</p>
        <span className={style.time}>
          <img src={clock} alt='clock' />
          <span>10 mins</span>
        </span>
      </div>
    </section>
  )
}

export default RelatedVideoCard
