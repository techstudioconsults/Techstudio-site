import React from 'react'
import PropTypes from 'prop-types'

import { ShortStepper } from '../../../../../components'

import style from './courseSectionFour.module.scss'

const CourseSectionFour = ({ content }) => {
  const { list } = content
  return (
    <div className={style.courseSectionFour}>
      <div className={style.stepperList}>
        <ShortStepper isCourses lists={list} />
      </div>
       
    </div>
  )
}

CourseSectionFour.propTypes = {
  content: PropTypes.object.isRequired,
}

export default CourseSectionFour
