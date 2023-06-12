import React from 'react'
import PropTypes from 'prop-types'
import style from './courseSectiontwo.module.scss'
import { Container } from '../../../../../layout'
import { CourseCard } from '../../../../../components'

const CourseSectionTwo = ({ content }) => {
  const { header, cards } = content
  const cardsDisplay = cards.map((card, index) => {
    return <CourseCard key={index} card={card} />
  })
  return (
    <Container>
      <section className={style.courseSectionTwo}>
        <h3 className={style.title}>{header.title}</h3>
        <div className={style.courseCardGroup}>{cardsDisplay}</div>
      </section>
    </Container>
  )
}

CourseSectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
}

export default CourseSectionTwo