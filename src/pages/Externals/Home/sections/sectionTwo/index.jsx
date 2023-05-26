import React from 'react'
import style from './sectionTwo.module.scss'
import PropTypes from 'prop-types'
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
        <section className='d-flex flex-column justify-content-center align-items-center'>
          <p className={style.title}>{header.title}</p>
          <h2 className={style.subTitle}>{header.subTitle}</h2>
          <p className={style.desc}>{header.description}</p>
        </section>
      </Container>
      <Container paddingBlock={0}>
        <div className={style.body}>
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
