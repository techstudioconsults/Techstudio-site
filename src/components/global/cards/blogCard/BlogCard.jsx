import React from 'react'
import style from './blogCard.module.scss'
import blogImg from '../../../../assets/images/blog-img1.webp'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogCard = ({ isCarouselView }) => {
  return (
    <div
      className={[
        style.blogCard,
        isCarouselView ? style.isCarousel : null,
      ].join(' ')}
    >
      <div className={style.imgContainer}>
        <img src={blogImg} alt='blog-img' className='cc-img-fluid' />
      </div>
      <div className={style.blogText}>
        <p className={style.date}>14th February, 2021</p>
        <h3 className={style.title}>
          Techstudio Wins 2021 Africa Freedom Innovation Challenge
        </h3>
        <p className={style.desc}>
          Request for unavailable documents across sectors and countries. Our
          team is committed to fast turn-around.Request for unavailable
          documents across sectors and countries.
          <Link className={style.singleBlogLink} to='/blog/1'>
            read all
          </Link>
        </p>
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  isCarouselView: PropTypes.bool,
}

export default BlogCard
