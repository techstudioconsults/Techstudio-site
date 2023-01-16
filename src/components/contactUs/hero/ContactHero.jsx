import React from 'react'
import style from './contactHero.module.scss'
import { Container } from '../../../layout'
import PropTypes from 'prop-types'

const index = ({ content }) => {
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

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
