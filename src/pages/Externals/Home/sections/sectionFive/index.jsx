import React from 'react'
import PropTypes from 'prop-types'
import sectionFiveImg from '../../../../../assets/images/home-img6.webp'
import style from './sectionFive.module.scss'
import ShortStepper from '../../../../../components/global/steppers/ShortStepper'
import { Container } from '../../../../../layout'

const SectionFive = ({ content }) => {
  const { lists } = content
  return (
    <Container>
      <section className={style.sectionFive}>
        <div className={style.stepperList}>
          <ShortStepper lists={lists} />
        </div>
        <div className={style.sectionFiveImg}>
          <img
            src={sectionFiveImg}
            alt='sectionFive-img'
            className='img-fluid'
          />
        </div>
      </section>
    </Container>
  )
}

SectionFive.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFive
