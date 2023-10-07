import React from 'react'
import PropTypes from 'prop-types'

import TeamCard from '../../../../../components/global/cards/teamCard/TeamCard'
import { Container } from '../../../../../layout'

import style from './AboutSection4.module.scss'

const AboutSection4 = ({ content }) => {
  const { header, cards, subtitle } = content
  const cardsDisplay = cards.map((card, index) => {
    return <TeamCard key={index} content={card} />
  })
  return (
    <Container>
      <section className={style.aboutSectionFour}>
        <div className={style.aboutSectionFourContent}>
          <h1 className={style.header}>{header.title}</h1>
          <p className={style.subtitle}>{header.subTitle}</p>
        </div>
        <div className={style.teamCardGroup}>{cardsDisplay}</div>
      </section>
    </Container>
  )
}

AboutSection4.propTypes = {
  content: PropTypes.object,
}

export default AboutSection4
