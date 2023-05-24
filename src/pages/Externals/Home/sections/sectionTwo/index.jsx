import React from 'react'
import style from './sectionTwo.module.scss'
import PropTypes from 'prop-types'
import sectionTwoImg from '../../../../../assets/images/home-sec1.webp'
import { Container } from '../../../../../layout'
import { SectionTwoCard } from '../../../../../components'

const SectionTwo = ({ content }) => {
  const { header, cards } = content

  const cardsDisplay = cards.map((card) => {
    return <SectionTwoCard key={card.title} cardDetails={card} />
  })

  return (
    <section className={style.sectionTwo}>
      <Container>
        <h2 className={style.title}>{header.title}</h2>
      </Container>
      <Container paddingBlock={0}>
        <div className={style.body}>
          <div className={style.sectionTwoImg}>
            {/* visibility is none */}
            <img src={sectionTwoImg} alt='section-img' />
          </div>
          <div className={style.cardGroup}>{cardsDisplay}</div>
        </div>
      </Container>
    </section>
  )
}

SectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionTwo
