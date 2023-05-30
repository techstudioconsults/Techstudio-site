import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionFour.module.scss'
import { Container } from '../../../../../layout'
import Button from '../../../../../components/global/Button'
import { Profile, TestimonialBanner } from '../../../../../components'
import { SwiperSlide } from 'swiper/react'

const SectionFour = ({ content }) => {
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
          <section className='d-flex flex-column align-items-center justify-content-between flex-lg-row mt-12'>
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
          <div className='container mt-12 mb-32 text-center'>
            <div className='row align-items-center justify-content-center justify-content-lg-between gap-10'>
              <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[0]}
                alt='logo'
              />

              <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[1]}
                alt='logo'
              />

              <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[2]}
                alt='logo'
              />

              <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[3]}
                alt='logo'
              />

              <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[4]}
                alt='logo'
              />

              <img
                className={`${style.brand} col-5 col-lg-2`}
                src={articleOne.companies[5]}
                alt='logo'
              />
            </div>
          </div>
        </section>

        <TestimonialBanner title={body.title}>{testimonials}</TestimonialBanner>

        <div className={style.sectionFourWrapper}>
          <div className={style.sectionFourImg}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1684971187/techstudio/Group_1000002320_pve1ql.png`}
              alt='section-four'
              className='img-fluid'
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
