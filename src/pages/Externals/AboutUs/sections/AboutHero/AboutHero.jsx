import React from 'react'
import PropTypes from 'prop-types'

import { HERO_ANIMATION } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
// import heroImg from '../../../../../assets/images/AboutHeroImg.png'
import { Container } from '../../../../../layout'

import style from './AboutHero.module.scss'

const AboutHero = ({ content }) => {
  const { caption, title, description1, description2, description3 } = content
  return (
    <Gsap animationFuncion={HERO_ANIMATION}>
      <Container>
        <header className={style.aboutHero}>
          <section className={style.aboutHeroTextGroup}>
            <h5 className={style.caption}>{caption}</h5>
            <h1 className={style.title}>{title}</h1>
            <p className={`${style.description} hero`}>{description1}</p>
            <br />
            <p className={`${style.description} hero`}>{description2}</p>
            <br />
            <p className={`${style.description} hero`}>{description3}</p>
          </section>
          <section className={style.aboutHeroImg}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218827/techstudio-web-app/assets/images/Group_1000002342_wtjpod_lbxmfq.png`}
              alt='hero-mg'
              className='img-fluid'
            />
          </section>
        </header>
      </Container>
    </Gsap>
  )
}

AboutHero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default AboutHero
