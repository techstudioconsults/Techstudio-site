import React from 'react'
import PropTypes from 'prop-types'

import { CourseCard } from '../../../../../components'
import { Container } from '../../../../../layout'

import style from './courseSectiontwo.module.scss'

const CourseSectionTwo = ({ content }) => {
  console.log(content);
  const { header, cards } = content
  const cardsDisplay = cards.map((card, index) => {
    return <CourseCard key={index} card={card} />
  })
  return (
    <Container>
      <section className={style.courseSectionTwo}>
        <h2 className={style.title}>{header.title}</h2>
        <div className={style.courseCardGroup}>{cardsDisplay}</div>
      </section>
    </Container>
  )
}

CourseSectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
}

export default CourseSectionTwo
