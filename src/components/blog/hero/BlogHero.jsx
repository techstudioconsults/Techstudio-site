import React from 'react'
import style from './blogHero.module.scss'
import heroImg from '../../../assets/images/coffeeImg.webp'
import { Container } from '../../../layout'
import PropTypes from 'prop-types'
import SearchForm from '../../global/forms/SearchForm'

const index = ({ content }) => {
  const { title, caption } = content
  return (
    <header className={style.blogHero}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heroText}>
            <p className={style.caption}>{caption}</p>
            <h1 className={style.title}>{title}</h1>
            <div className={style.searchForm}>
              <SearchForm />
            </div>
          </div>
          <div className={style.heroImg}>
            <img src={heroImg} alt='hero-img' />
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
