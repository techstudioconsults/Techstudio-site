import React from 'react'
import PropTypes from 'prop-types'
import style from './AboutSection2.module.scss'
import { Container } from '../../../../../layout'
import AboutSection2Pattern01 from '../../../../../assets/images/AboutSection2Pattern01.png'
import AboutSection2Pattern02 from '../../../../../assets/images/AboutSection2Pattern02.png'

const AboutSection2 = ({ content }) => {
  const { images } = content

  const imgDisplay = images.map((img) => {
    return (
      <div className={style.imgContainer} key={img.src}>
        <img src={img.src} alt='img' className={style.mainImg} />
      </div>
    )
  })

  return (
    <Container paddingBlock={0}>
      <section className={style.aboutSectionTwo}>
        {imgDisplay}
        <div className={style.aboutSectionTwoInner}>
          <img
            src={AboutSection2Pattern01}
            alt=''
            className={style.pattern01}
          />
          <img
            src={AboutSection2Pattern02}
            alt=''
            className={style.pattern02}
          />
        </div>
      </section>
    </Container>
  )
}
AboutSection2.propTypes = {
  content: PropTypes.object.isRequired,
}
export default AboutSection2
