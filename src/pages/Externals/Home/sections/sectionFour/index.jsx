import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import PropTypes from 'prop-types'
import { SwiperSlide } from 'swiper/react'

import { Profile, TestimonialBanner } from '../../../../../components'
import Button from '../../../../../components/global/Button'
import GalleryIndex from '../../../../../components/global/carousel/Gallery/GalleryIndex'
import {
  HERO_ANIMATION,
  SECTION_FOUR_ANIMATION,
  TAKE_A_COURSE_ANIMATION,
} from '../../../../../gsap'
import IntersectionObserver from '../../../../../hooks/Gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './sectionFour.module.scss'

const SectionFour = ({ content, isDevelopmentView }) => {
  const sectionFour = useRef() // create a ref for the root level element (for scoping)
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
    <section className={`${style.sectionFour} pb-20 bg-white`}>
      <Container>
        <Gsap animationFuncion={SECTION_FOUR_ANIMATION}>
          <section className='sectionFour'>
            <section className='d-flex flex-column align-items-center justify-content-between flex-lg-row my-12'>
              <div className={`text-center text-lg-start`}>
                <p className={`text-primary fw-semibold`}>{articleOne.title}</p>
                <p className={`fs-3xl text-blue fw-semibold`}>
                  {articleOne.topic}
                </p>
              </div>
              <div className={`text-center text-lg-start ${style.description}`}>
                {articleOne.description}
              </div>
            </section>
          </section>
        </Gsap>
      </Container>

      <div
        className={`container-fluid text-center mb-20 ${style.gradientOverlay}`}
      >
        <Marquee speed={50}>
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
            {/* <img
              alt='card-img'
              data-sizes='auto'
              className={`${style.brand} col-5 col-lg-2 lazyload`}
              src={articleOne.companies[5]}
              data-src={articleOne.companies[5]}
            /> */}
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

        <IntersectionObserver
          animationFuncion={() => TAKE_A_COURSE_ANIMATION(sectionFour)}
        >
          <div hidden={isDevelopmentView} className={style.sectionFourWrapper}>
            <div ref={sectionFour} className={style.sectionFourImg}>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`lazyload ${style.angle} angle`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1687594313/techstudio-web-app/assets/images/Group_1000002319_izpnar.svg`}
              />
              <img
                alt='card-img'
                data-sizes='auto'
                className={`lazyload ${style.img} img`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1687594302/techstudio-web-app/assets/images/Frame_73_eqbnub.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_425/v1687594302/techstudio-web-app/assets/images/Frame_73_eqbnub.webp`}
              />
              <img
                alt='card-img'
                data-sizes='auto'
                className={`lazyload ${style.box} box`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1687594309/techstudio-web-app/assets/images/Frame_70_xuw32a.svg`}
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
        </IntersectionObserver>
      </Container>
    </section>
  )
}

SectionFour.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFour
