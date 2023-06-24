import React from 'react'

import { Button } from '../../../../components'

// import img from '../../../../assets/images/intro-img3.webp'
import style from './introCard.module.scss'

const StudentIntroCard = () => {
  return (
    <div className={[style.introCard].join(' ')}>
      <header className={style.header}>
        <h4 className={style.title}>Hello Tomiwa!</h4>
        <p className={style.text}>
          Welcome to Techstudio. Thanks for choosing this platform, we are here
          to guide you through every step of your tech journey.
        </p>
      </header>
      <div className={style.body}>
        <p className={style.subTitle}>
          Tools you need to download to get started on this course
        </p>
        <div className={style.list}>
          <div className=' d-flex align-item-center justify-content-between'>
            <p>-Adobe XD</p>
            <span>adobe.com/products/xd</span>
          </div>
          <div className=' d-flex align-item-center justify-content-between'>
            <p>-Figma</p>
            <span>adobe.com/products/xd</span>
          </div>
          <div className=' d-flex align-item-center justify-content-between'>
            <p>-Figma</p>
            <span>adobe.com/products/xd</span>
          </div>
        </div>
        <p className={style.caption}>
          After setting it up, click on ‘get started’ to begin your training.
        </p>
      </div>
      <div className={[style.footer].join(' ')}>
        <Button
          linkHref='/student/dashboard'
          linkText='Get Started'
          solidBtn
          navBtn
        />
      </div>
      <div className={style.img}>
        <img
          src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218525/techstudio-web-app/assets/images/intro-img3_p2sdv6.webp`}
          alt='intro-logo'
          className='cc-img-fluid'
        />
      </div>
    </div>
  )
}

export default StudentIntroCard
