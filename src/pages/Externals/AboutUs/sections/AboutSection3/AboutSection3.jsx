import React from 'react'
import PropTypes from 'prop-types'
import style from './AboutSection3.module.scss'
import AboutSectionThreeCard from '../../../../../components/global/cards/AboutSectionThreeCard'
import { Container } from '../../../../../layout'

const AboutSection3 = ({ content }) => {
  const { header, cards } = content
  const cardsDisplay = cards.map((card) => {
    return <AboutSectionThreeCard key={card.title} content={card} />
  })
  return (
    <section className={style.aboutSectionThree}>
      <Container>
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
      </Container>
    </section>
  )
}

AboutSection3.propTypes = {
  content: PropTypes.object,
  // textAlignLeft: PropTypes.bool,
}

export default AboutSection3
