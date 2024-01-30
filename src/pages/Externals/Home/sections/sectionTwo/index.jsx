import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { SectionTwoCard } from '../../../../../components'
import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './sectionTwo.module.scss'

const SectionTwo = ({ content }) => {
  const { header, cards } = content

  const cardsDisplay = cards.map((card) => {
    return (
      <Gsap key={card.title} animationFuncion={() => genericAnimation(`sectionTwo`)}>
        <SectionTwoCard cardDetails={card} />
      </Gsap>
    )
  })

  return (
    <section className={style.sectionTwo}>
      <Container paddingBlock={0} className={style.headerContainer}>
        <p className={`${style.headerTitle} sectionTwo`}>{header.title}</p>
        <div className={style.descriptionContainer}>
          <h2 className={`${style.title} sectionTwo`}>{header.title2}</h2>
          <p className={`${style.headerDescription} sectionTwo`}>{header.description}.</p>
          <div className='text-center'>
            <Link style={{ textDecoration: `underline` }} className='d-inline sectionTwo' to={`/about-us`}>
              Read More
            </Link>
          </div>
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
