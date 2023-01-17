import React from 'react'
import Button from '../../global/Button'

import style from './hero.module.scss'

const index = ({ content }) => {
  return (
    <header className={style.hero}>
      <section className={`${style.heroWrapper} container`}>
        <div className={style.heroText}>
          <h1>{content.title}</h1>
          <p>{content.subTitle}</p>
          <div className={style.btn}>
            <Button
              linkText='Enroll Now'
              linkHref='/'
              solidBtn
              width={`7.5`}
              paddingInline={2}
            />
          </div>
        </div>
        <div className={style.heroImg}>
          <img src={content.img} alt='hero-img' />
        </div>
      </section>
    </header>
  )
}

export default index
