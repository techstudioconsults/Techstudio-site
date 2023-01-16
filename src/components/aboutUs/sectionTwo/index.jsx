import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionTwo.module.scss'
import { Container } from '../../../layout'

const index = ({ content }) => {
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
index.propTypes = {
  content: PropTypes.object.isRequired,
}
export default index
