import React from 'react'
import style from './header.module.scss'
import singleImg from '../../../../assets/images/blog-img1.webp'

import { Container } from '../../../../layout'
// import PropTypes from 'prop-types'

const index = () => {
  return (
    <header className={style.singleBlogHeader}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heading}>
            <h2 className={style.title}>
              Techstudio Wins 2021 Africa Innovation Challenge
            </h2>
            <div className={style.subText}>
              <p>blog</p>
              <p>3MIN READ</p>
            </div>
          </div>
          <div className={style.imgContainer}>
            <img src={singleImg} alt='img-story' className='cc-img-fluid' />
          </div>
        </section>
      </Container>
    </header>
  )
}

export default index
