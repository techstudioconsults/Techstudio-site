import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../../../components/global/Button'
// import heroImg from '../../../../../assets/images/heroImg.webp'
import { Container } from '../../../../../layout'

import style from './hero.module.scss'

const Hero = ({ content }) => {
  const { title, description } = content
  return (
    <header className={style.hero}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heroText}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{description}</p>
            <div className={style.btnGroup}>
              <Button
                width={`11`}
                solidBtn
                linkHref='/our-courses'
                // linkHref='/student/signup'
                linkText='Explore Courses'
              />
              <Button
                width={`11`}
                solidBtn={false}
                linkHref='/login'
                linkText='Log in'
              />
            </div>
          </div>
          <div className={style.heroImg}>
            <img
              alt='logo'
              data-sizes='auto'
              src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218523/techstudio-web-app/assets/images/heroImg_x9cptk.webp'
              data-src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000,f_auto,q_auto/v1686218523/techstudio-web-app/assets/images/heroImg_x9cptk.webp'
              className='lazyload'
            />
          </div>
        </section>
      </Container>
    </header>
  )
}

Hero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Hero
