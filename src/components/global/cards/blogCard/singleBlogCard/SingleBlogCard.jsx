import React from 'react'

import style from './singleBlogCard.module.scss'
// import img from '../../../../../assets/images/blog-img2.webp'

const SingleBlogCard = () => {
  return (
    <div className={style.singleBlogCard}>
      <div className={style.imgContainer}>
        <img
          src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218518/techstudio-web-app/assets/images/blog-img2_ye8vqw.webp`}
          alt='img-card'
          className='cc-img-fluid'
        />
      </div>
      <div className={style.singleBlogText}>
        <span className={style.caption}>Policy Vault Africa</span>
        <h4 className={style.title}>
          Policy Vault wins award of the year and bcvsz cxvhcg vusz cvshz
        </h4>
        <p className={style.desc}>
          Request for unavailable documents across sectors and countries. Our
          team is committed to fast turn-around.Request for unavailable
          documents across sectors and countries.
        </p>
        <div className={style.blogCardBtn}>
          <button className={style.readMoreBtn}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default SingleBlogCard
