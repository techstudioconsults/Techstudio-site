import React from 'react'
import PropTypes from 'prop-types'
import style from './hero.module.scss'
import heroImg from '../../../assets/images/about-img1.webp'
import { Container } from '../../../layout'

const index = ({ content }) => {
  const { caption, title, description } = content
  return (
    <Container>
      <header className={style.aboutHero}>
        <section className={style.aboutHeroTextGroup}>
          <h5 className={style.caption}>{caption}</h5>
          <h1 className={style.title}>{title}</h1>
          <p className={style.description}>{description}</p>
        </section>
        <section className={style.aboutHeroImg}>
          <img src={heroImg} alt='hero-mg' className='img-fluid' />
        </section>
      </header>
    </Container>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
