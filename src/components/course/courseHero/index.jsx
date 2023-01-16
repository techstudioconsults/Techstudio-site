import React from 'react'
import style from './courseHero.module.scss'
import { Container } from '../../../layout'
import PropTypes from 'prop-types'

const index = ({ content }) => {
  const { title, subTitle, img } = content
  return (
    <header className={style.hero}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heroText}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{subTitle}</p>
          </div>
          <div className={style.heroImg}>
            <img src={img} alt='hero-img' />
          </div>
        </section>
      </Container>
    </header>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
