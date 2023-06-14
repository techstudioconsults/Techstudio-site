import React from 'react'

import BlogCard from '../../../../../components/global/cards/blogCard/BlogCard'
import { Container } from '../../../../../layout'

import style from './blogSectionTwo.module.scss'

const index = () => {
  return (
    <Container>
      <section className={StyleSheet.blogSectionTwo}>
        <BlogCard isCarouselView />
      </section>
      <div className={style.carouselBtnGroup}>
        <button className={style.btnNavFlat}></button>
        <button className={style.btnNavFlat}></button>
        <button className={style.btnNavFlat}></button>
        <button className={style.btnNavFlat}></button>
      </div>
    </Container>
  )
}

export default index
