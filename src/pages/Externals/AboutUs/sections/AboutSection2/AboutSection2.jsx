import React from 'react'
import PropTypes from 'prop-types'
import style from './AboutSection2.module.scss'
import { Container } from '../../../../../layout'

const AboutSection2 = ({ content }) => {
  const { images } = content

  const imgDisplay = images.map((img) => {
    return (
      <div className={style.imgContainer} key={img.src}>
        <img src={img.src} alt='img' />
      </div>
    )
  })

  return (
    <Container>
      {/* <section className={style.aboutSectionTwo}>
        <div className={style.imgGroup}>{imgDisplay}</div>
      </section> */}
      <section className={style.aboutSectionTwo}>{imgDisplay}</section>
    </Container>
  )
}
AboutSection2.propTypes = {
  content: PropTypes.object.isRequired,
}
export default AboutSection2
