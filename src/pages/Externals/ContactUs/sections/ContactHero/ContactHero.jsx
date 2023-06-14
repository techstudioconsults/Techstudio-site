import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../../../../../layout'

import style from './contacthero.module.scss'

const ContactHero = ({ content }) => {
  const { title, subTitle } = content
  return (
    <header className={style.contactHero}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.subTitle}>{subTitle}</p>
        </section>
      </Container>
    </header>
  )
}

ContactHero.propTypes = {
  content: PropTypes.object,
}

export default ContactHero
