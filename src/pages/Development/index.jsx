import React from 'react'
import PropTypes from 'prop-types'
import { ExternalLayout } from '../../layout'
import {
  CourseHero,
  CourseSectionFour,
  CourseSectionTwo,
  SectionSix,
} from '../../components'
import { HOME_CONTENT } from '../Home/content'

const index = ({ content }) => {
  const { sectionSix } = HOME_CONTENT
  const { hero, sectionTwo, sectionFour } = content
  return (
    <ExternalLayout>
      <CourseHero content={hero} />
      <CourseSectionTwo content={sectionTwo} />
      <SectionSix content={sectionSix} />
      <CourseSectionFour content={sectionFour} />
    </ExternalLayout>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
