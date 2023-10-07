import React from 'react'

import { HOME_CONTENT } from '../../../pages/Externals/Home/content'

import style from './brand.module.scss'

const Brands = () => {
  const {
    sectionFour: { articleOne },
  } = HOME_CONTENT
  return (
    <section>
      <section className='d-flex align-items-center justify-content-between'>
        <div className={`text-center text-lg-start`}>
          <p className={`text-primary fs-sm fw-semibold`}>{articleOne.title}</p>
          <p className={`fs-3xl text-blue fw-semibold`}>{articleOne.topic}</p>
        </div>
        <div className={`fs-sm text-center text-lg-start ${style.description}`}>
          {articleOne.description}
        </div>
      </section>
      <div className='container mt-12 mb-32 text-center'>
        <div className='row align-items-center justify-content-center justify-content-lg-between gap-10'>
          {/* <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[0]}
                alt='logo'
              /> */}
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[0]}
            data-src={articleOne.companies[0]}
          />
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[1]}
            data-src={articleOne.companies[1]}
          />
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[2]}
            data-src={articleOne.companies[2]}
          />
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[3]}
            data-src={articleOne.companies[3]}
          />
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[4]}
            data-src={articleOne.companies[4]}
          />
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[5]}
            data-src={articleOne.companies[5]}
          />
          <img
            alt='card-img'
            data-sizes='auto'
            className={`${style.brand} col-5 col-lg-2 lazyload`}
            src={articleOne.companies[6]}
            data-src={articleOne.companies[6]}
          />
        </div>
      </div>
    </section>
  )
}

export default Brands
