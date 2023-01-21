import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../../layout'
import style from './employersSectionTwo.module.scss'
import HowItWorksCard from '../../global/cards/employersCard/HowItWorksCard'

const index = ({ content }) => {
  const cardDisplay = content.cards.map((card, index) => {
    return <HowItWorksCard key={index} />
  })

  return (
    <section className={style.employerSectionTwo}>
      <Container>
        <div className={style.sectionTwoWrapper}>
          <header className={style.headerText}>
            <h2 className={style.title}>{content.title}</h2>
            <p className={style.subTitle}>{content.subTitle}</p>
          </header>

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
