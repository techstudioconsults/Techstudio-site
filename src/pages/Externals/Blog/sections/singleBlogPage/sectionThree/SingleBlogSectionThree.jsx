import React from 'react'

import { SingleBlogCard } from '../../../../../../components'
import { Container } from '../../../../../../layout'

import style from './singleBlogSectionThree.module.scss'

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
