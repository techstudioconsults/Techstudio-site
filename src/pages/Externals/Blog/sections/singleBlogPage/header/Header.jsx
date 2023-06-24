import React from 'react'

import { Container } from '../../../../../../layout'

import style from './header.module.scss'
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <header className={style.singleBlogHeader}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heading}>
            <h2 className={style.title}>
              Techstudio Wins 2021 Africa Innovation Challenge
            </h2>
            <div className={style.subText}>
              <p>BLOG</p>
              <p>3MIN READ</p>
            </div>
          </div>
          <div className={style.imgContainer}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218517/techstudio-web-app/assets/images/blog-img1_gm7m8n.webp`}
              alt='img-story'
              className='cc-img-fluid'
            />
          </div>
        </section>
      </Container>
    </header>
  )
}

export default Header
