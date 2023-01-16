import React from 'react'
import { Container } from '../../../layout'
import BlogCard from '../../global/cards/blogCard/BlogCard'
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
