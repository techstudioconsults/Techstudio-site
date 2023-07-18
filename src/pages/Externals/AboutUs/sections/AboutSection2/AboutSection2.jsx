import React from 'react'
import PropTypes from 'prop-types'

import { SCALE_ANIMATION, spin } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './AboutSection2.module.scss'
// import AboutSection2Pattern01 from '../../../../../assets/images/AboutSection2Pattern01.png'
// import AboutSection2Pattern02 from '../../../../../assets/images/AboutSection2Pattern02.png'

const AboutSection2 = ({ content }) => {
  const { images } = content

  const imgDisplay = images.map((img) => {
    return (
      <div className={style.imgContainer} key={img.src}>
        <Gsap animationFuncion={() => SCALE_ANIMATION(`scale`)}>
          <img src={img.src} alt='img' className={`${style.mainImg} scale`} />
        </Gsap>
      </div>
    )
  })

  return (
    <Container paddingBlock={0}>
      <section className={style.aboutSectionTwo}>
        {imgDisplay}
        <div className={style.aboutSectionTwoInner}>
          <Gsap animationFuncion={() => spin(`spin-reverse`)}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218516/techstudio-web-app/assets/images/AboutSection2Pattern01_umrjsl.png`}
              alt=''
              className={`${style.pattern01} spin-reverse`}
            />
          </Gsap>
          <Gsap animationFuncion={() => spin(`spin`)}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218516/techstudio-web-app/assets/images/AboutSection2Pattern02_mnthqw.png`}
              alt=''
              className={`${style.pattern02} spin`}
            />
          </Gsap>
        </div>
      </section>
    </Container>
  )
}
AboutSection2.propTypes = {
  content: PropTypes.object.isRequired,
}
export default AboutSection2
