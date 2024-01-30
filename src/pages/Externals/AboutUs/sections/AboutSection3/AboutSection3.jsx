import React from 'react'
import PropTypes from 'prop-types'

import AboutSectionThreeCard from '../../../../../components/global/cards/AboutSectionThreeCard'
import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './AboutSection3.module.scss'

const AboutSection3 = ({ content }) => {
  const { header, cards } = content
  const cardsDisplay = cards.map((card) => {
    return (
      <Gsap key={card.title} animationFuncion={() => genericAnimation(`sectionThree`)}>
        <AboutSectionThreeCard isAbout content={card} />
      </Gsap>
    )
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
          <p className={`${style.subTitle} px-5`}>{header.subTitle}</p>
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
