import React from 'react'
import style from './hero.module.scss'
import heroImg from '../../../../../assets/images/heroImg.webp'
import { Container } from '../../../../../layout'
import Button from '../../../../../components/global/Button'
import PropTypes from 'prop-types'

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
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218523/techstudio-web-app/assets/images/heroImg_x9cptk.webp`}
              alt='hero-img'
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
