import React from 'react'
import PropTypes from 'prop-types'

import { ShortStepper } from '../../../../../components'
import { Container } from '../../../../../layout'

import style from './courseSectionFour.module.scss'

const CourseSectionFour = ({ content }) => {
  const { header, list } = content
  return (
    <Container paddingBlock={0}>
      <div className={style.courseSectionFour}>
        <h2 className={style.title}>{header.title}</h2>
        <div className={style.stepperList}>
          <ShortStepper isCourses lists={list} />
        </div>
      </div>
    </Container>
  )
}

CourseSectionFour.propTypes = {
  content: PropTypes.object.isRequired,
}

export default CourseSectionFour
