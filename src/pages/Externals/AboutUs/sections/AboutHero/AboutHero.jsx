import React from 'react'
import PropTypes from 'prop-types'

import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
// import heroImg from '../../../../../assets/images/AboutHeroImg.png'
import { Container } from '../../../../../layout'

import style from './AboutHero.module.scss'

const AboutHero = ({ content }) => {
  const { caption, title, description1, description2, description3 } = content
  return (
    <Container>
      <Gsap animationFuncion={() => genericAnimation(`hero`)}>
        <header className={style.aboutHero}>
          <section className={style.aboutHeroTextGroup}>
            <h5 className={`${style.caption} hero small-text`}>{caption}</h5>
            <h1 className={`${style.title} hero`}>{title}</h1>
            <p className={`${style.description} hero`}>{description1}</p>
            <br />
            <p className={`${style.description} hero`}>{description2}</p>
            <br />
            <p className={`${style.description} hero`}>{description3}</p>
          </section>
          <section className={style.aboutHeroImg}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1691526548/techstudio-web-app/assets/images/Group_1000002342_xxwg28.webp`}
              alt='hero-mg'
              className='img-fluid'
            />
          </section>
        </header>
      </Gsap>
    </Container>
  )
}

AboutHero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default AboutHero
