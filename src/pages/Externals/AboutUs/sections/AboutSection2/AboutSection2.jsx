import React from 'react'
import PropTypes from 'prop-types'

import { SCALE_ANIMATION, spin } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './AboutSection2.module.scss'

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
              src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/AboutSection2Pattern01_umrjsl_j0cr70.png`}
              alt=''
              className={`${style.pattern01} spin-reverse`}
            />
          </Gsap>
          <Gsap animationFuncion={() => spin(`spin`)}>
            <img
              src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/AboutSection2Pattern02_mnthqw_f9yjcp.png`}
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
