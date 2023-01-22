import React from 'react'
import PropTypes from 'prop-types'
import style from './courseSectionFour.module.scss'
import ShortStepper from '../../global/steppers/ShortStepper'
import { Container } from '../../../layout'

//added isSocial prop to give facebookLive specific stylings
const CourseSectionFour = ({ content, isSocial }) => {
  const { header, list } = content
  return (
    <Container paddingBlock={0}>
      <div className={style.courseSectionFour}>
        <h2 className={isSocial ? style.socialTitle : style.title}>
          {header.title}
        </h2>
        <div className={style.stepperList}>
          <ShortStepper isSocial isCourses lists={list} />
        </div>
      </div>
    </Container>
  )
}

CourseSectionFour.propTypes = {
  content: PropTypes.object.isRequired,
  isSocial: PropTypes.bool,
}

export default CourseSectionFour
