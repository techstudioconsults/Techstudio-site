import React from 'react'
import PropTypes from 'prop-types'

import BlogCard from '../../../../../components/global/cards/blogCard/BlogCard'
import { Container } from '../../../../../layout'

import style from './blogSectionThree.module.scss'

const index = ({ content }) => {
  const { header } = content

  return (
    <Container>
      <section className={style.blogSectionThree}>
        <div className={style.header}>
          <h2 className={style.title}>{header.title}</h2>
          <hr className={style.horizontalLine} />
        </div>
        <div className={style.olderPosts}>
          <BlogCard />
          <hr className={style.horizontalLine} />
          <BlogCard />
          <hr className={style.horizontalLine} />
          <BlogCard />
          <hr className={style.horizontalLine} />
          <BlogCard />
          {/* once we start consuming apis...then we add the pagination component */}
        </div>
      </section>
    </Container>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
