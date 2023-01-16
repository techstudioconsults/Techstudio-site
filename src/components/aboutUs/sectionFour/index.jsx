import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionFour.module.scss'
import TeamCard from '../../global/cards/teamCard/TeamCard'
import { Container } from '../../../layout'

const index = ({ content }) => {
  const { header, cards } = content

  const cardsDisplay = cards.map((card) => {
    return <TeamCard key={card.id} content={card} />
  })

  return (
    <Container>
      <section className={style.aboutSectionFour}>
        <h1 className={style.header}>{header.title}</h1>
        <div className={style.teamCardGroup}>{cardsDisplay}</div>
      </section>
    </Container>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
