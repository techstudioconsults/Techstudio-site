import React from 'react'
import clock from '../../../../assets/icons/clock.png'
import style from './liveClass.module.scss'
import { Avatar } from '../../../../components'

const LiveClassDisplayCard = () => {
  return (
    <div className={style.liveCard}>
      <div className={style.avatar}>
        <Avatar />
      </div>
      <div className={style.content}>
        <h5 className={style.title}>
          Becoming a UX Designer from Scratch: Things to look out for
        </h5>
        <div className={style.detail}>
          <span className={style.name}>Emma Gannon, Author, Broadcaster</span>
          <span className={style.time}>
            <span className={style.icon}>
              <img src={clock} alt='clock' />
            </span>{' '}
            9 AM
          </span>
        </div>
      </div>
      <div className={style.buttonDiv}>
        <button className={style.btn}>Start Class</button>
      </div>
    </div>
  )
}

export default LiveClassDisplayCard
