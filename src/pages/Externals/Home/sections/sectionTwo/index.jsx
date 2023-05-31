import React from 'react'
import style from './sectionTwo.module.scss'
import PropTypes from 'prop-types'
import { Container } from '../../../../../layout'
import { SectionTwoCard } from '../../../../../components'
import { Link } from 'react-router-dom'

const SectionTwo = ({ content }) => {
  const { header, cards } = content

  const cardsDisplay = cards.map((card) => {
    return <SectionTwoCard key={card.title} cardDetails={card} />
  })

  return (
    <section className={style.sectionTwo}>
      <Container paddingBlock={0} className={style.headerContainer}>
        <p className={style.headerTitle}>{header.title}</p>
        <div className={style.descriptionContainer}>
          <h2 className={style.title}>{header.title2}</h2>
          <p className={style.headerDescription}>
            {header.description}.{' '}
            <Link
              style={{ textDecoration: `underline` }}
              className='d-inline'
              to={`/about-us`}
            >
              Read More
            </Link>
          </p>
        </div>
      </Container>
      <Container paddingBlock={0}>
        <div className={`${style.body} my-20`}>
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
