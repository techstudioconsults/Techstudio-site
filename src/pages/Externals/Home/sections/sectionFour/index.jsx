import React from 'react'
import Marquee from 'react-fast-marquee'
import PropTypes from 'prop-types'
import { SwiperSlide } from 'swiper/react'

import { Profile, TestimonialBanner } from '../../../../../components'
import Brands from '../../../../../components/global/brands/Brands'
import Button from '../../../../../components/global/Button'
import GalleryIndex from '../../../../../components/global/carousel/Gallery/GalleryIndex'
import { Container } from '../../../../../layout'

import style from './sectionFour.module.scss'

const SectionFour = ({ content, isDevelopmentView }) => {
  const { articleOne, header, body } = content

  const testimonials = body.testimonials.map((testimonial, index) => {
    return (
      <SwiperSlide className='pb-10' key={index}>
        <div
          className={`text-white text-center d-flex flex-column align-items-lg-center ${style.testimonial}`}
        >
          <p
            className={['text-center lh-lg mt-5 mb-10', style.message].join(
              ' '
            )}
          >
            {testimonial.message}
          </p>
          <Profile content={testimonial.profile} />
        </div>
      </SwiperSlide>
    )
  })

  return (
    <section className={`${style.sectionFour} mb-20`}>
      <Container>
        <section>
          <section className='d-flex flex-column align-items-center justify-content-between flex-lg-row my-12'>
            <div className={`text-center text-lg-start`}>
              <p className={`text-primary fs-sm fw-semibold`}>
                {articleOne.title}
              </p>
              <p className={`fs-3xl text-blue fw-semibold`}>
                {articleOne.topic}
              </p>
            </div>
            <div
              className={`fs-sm text-center text-lg-start ${style.description}`}
            >
              {articleOne.description}
            </div>
          </section>
        </section>
      </Container>

      <div className='container-fluid text-center mb-20'>
        <Marquee speed={30} style={{}}>
          <div className=' d-flex align-items-center justify-content-center justify-content-lg-between gap-24'>
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
        </Marquee>
      </div>

      <div hidden={!isDevelopmentView}>
        <GalleryIndex />
      </div>

      <Container>
        <TestimonialBanner title={body.title}>{testimonials}</TestimonialBanner>

        <div hidden={isDevelopmentView} className={style.sectionFourWrapper}>
          <div className={style.sectionFourImg}>
            <img
              alt='card-img'
              data-sizes='auto'
              className={`lazyload`}
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218826/techstudio-web-app/assets/images/Group_1000002320_pve1ql_lqi4vr.webp`}
              data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_425/v1686218826/techstudio-web-app/assets/images/Group_1000002320_pve1ql_lqi4vr.webp`}
            />
          </div>
          <div className={style.sectionFourTextGroup}>
            <div className={style.sectionFourText}>
              <h5 className={style.caption}>{header.caption}</h5>
              <h2 className={style.title}>{header.title}</h2>
              <p className={style.subTitle}>{header.subTitle}</p>
            </div>
            <div className={style.btnContainer}>
              <Button
                linkHref='/student/register'
                linkText='Get Started'
                solidBtn
                navBtn
                width={`11`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

SectionFour.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFour
