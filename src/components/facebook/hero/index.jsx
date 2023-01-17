import React from 'react'
import { Container } from '../../../layout'
import Button from '../../global/Button'

import style from './hero.module.scss'
import frontendImg from '../../../assets/images/frontend.webp'

const index = () => {
  return (
    <header className={style.hero}>
      {/* <Container paddingBlock={0}> */}
      <section className={`${style.heroWrapper} container`}>
        <div className={style.heroText}>
          <h1>Frontend Web Development Live Class</h1>
          <p>
            Let’s help you become a professional frontend web developer. You’ll
            learn all you need to know to become a Frontend Developer and build
            interesting portfolios while learning the fundmentals of HTML, CSS,
            JavaScript and React.
          </p>
          <div>
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
          <img src={frontendImg} alt='hero-img' />
        </div>
      </section>
      {/* </Container> */}
    </header>
  )
}

export default index
