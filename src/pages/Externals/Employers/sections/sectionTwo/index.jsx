import React from 'react'
import PropTypes from 'prop-types'

import { HowItWorksCard } from '../../../../../components'
import { Container } from '../../../../../layout'

import style from './employersSectionTwo.module.scss'

const index = ({ content }) => {
  const cardDisplay = content.cards.map((card, index) => {
    return <HowItWorksCard key={index} card={card} />
  })

  return (
    <section className={style.employerSectionTwo}>
      <Container paddingBlock={0}>
        <div className={style.headerText}>
          <h2 className={style.title}>{content.header.title}</h2>
        </div>
        <div className={style.sectionTwoWrapper}>
          <div className={style.cardGroup}>{cardDisplay}</div>
        </div>
      </Container>
    </section>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
