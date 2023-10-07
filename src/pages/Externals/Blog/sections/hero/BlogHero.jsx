import React from 'react'
import PropTypes from 'prop-types'

import { SearchForm } from '../../../../../components'
import { Container } from '../../../../../layout'

import style from './blogHero.module.scss'

const BlogHero = ({ content }) => {
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
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218518/techstudio-web-app/assets/images/coffeeImg_pgbpqq.webp`}
              alt='hero-img'
            />
          </div>
        </section>
      </Container>
    </header>
  )
}

BlogHero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default BlogHero
