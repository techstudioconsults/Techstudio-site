import React from 'react'
import { Container } from '../../../../layout'
import SingleBlogCard from '../../../global/cards/blogCard/singleBlogCard/SingleBlogCard'
import style from './singleBlogSectionThree.module.scss'

const BlogSectionThree = () => {
  return (
    <Container>
      <section className={style.singleBlogSectionThree}>
        <h2 className={style.title}>Read this next</h2>
        <div className={style.cardGroup}>
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
        </div>
      </section>
    </Container>
  )
}

export default BlogSectionThree
