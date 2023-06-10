import React from 'react'
import style from './singleBlogSectionThree.module.scss'
import { Container } from '../../../../../../layout'
import { SingleBlogCard } from '../../../../../../components'

const SingleBlogSectionThree = () => {
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

export default SingleBlogSectionThree
