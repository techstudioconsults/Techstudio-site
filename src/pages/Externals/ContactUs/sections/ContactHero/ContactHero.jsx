import React from 'react'
import PropTypes from 'prop-types'

import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './contacthero.module.scss'

const ContactHero = ({ content }) => {
  const { title, subTitle } = content
  return (
    <Gsap animationFuncion={() => genericAnimation(`hero`)}>
      <header className={`${style.contactHero}  pt-20`}>
        <Container paddingBlock={0}>
          <section className={style.heroWrapper}>
            <h1 className={`${style.title} hero`}>{title}</h1>
            <p className={`hero ${style.subTitle}`}>{subTitle}</p>
          </section>
        </Container>
      </header>
    </Gsap>
  )
}

ContactHero.propTypes = {
  content: PropTypes.object,
}

export default ContactHero
