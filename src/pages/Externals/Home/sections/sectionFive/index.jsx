import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionFive.module.scss'
import ShortStepper from '../../../../../components/global/steppers/ShortStepper'
import { Container } from '../../../../../layout'

const SectionFive = ({ content }) => {
  const { lists } = content
  return (
    <section className={`${style.sectionFive}`}>
      <Container>
        <section className={`${style.sectionFive} my-4`}>
          <div className={style.stepperList}>
            <ShortStepper lists={lists} />
          </div>
          <div className={style.sectionFiveImg}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1684971336/techstudio/Property_1_Frame_1000002406_ohrkxt.png`}
              alt='sectionFive-img'
              className='img-fluid'
            />
          </div>
        </section>
      </Container>
    </section>
  )
}

SectionFive.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFive
