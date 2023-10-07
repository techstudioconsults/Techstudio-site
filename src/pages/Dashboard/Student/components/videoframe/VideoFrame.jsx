import React from 'react'

// import video from '../../../../../assets/video/video.mp4'
import { RelatedVideoCard } from '../../../../../components'

import style from './videoframe.module.scss'

const VideoFrame = () => {
  return (
    <section className={style.videoFrame}>
      <div className={style.currentVideo}>
        <video controls className={style.videoFeed}>
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
      <div className={style.relatedVideo}>
        <h5>Related videos</h5>
        <div className={style.scroller}>
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
          <RelatedVideoCard />
        </div>
      </div>
    </section>
  )
}

export default VideoFrame
