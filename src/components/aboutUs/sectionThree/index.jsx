import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionThree.module.scss'
import AboutSectionThreeCard from '../../global/cards/AboutSectionThreeCard'
import { Container } from '../../../layout'

const index = ({ content, textAlignLeft }) => {
  const { header, cards } = content
  const cardsDisplay = cards.map((card) => {
    return <AboutSectionThreeCard key={card.title} content={card} />
  })
  return (
    <Container>
      <section className={style.aboutSectionThree}>
        <div
          className={[
            style.header,
            // textAlignLeft ? `text-start` : `text-center`,
          ].join(' ')}
        >
          <h2 className={style.title}>{header.title}</h2>
          <p className={style.subTitle}>{header.subTitle}</p>
        </div>
        <div className={style.cardGroup}>{cardsDisplay}</div>
      </section>
    </Container>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
  textAlignLeft: PropTypes.bool,
}

export default index
