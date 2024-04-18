import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import PropTypes from 'prop-types'
import { SwiperSlide } from 'swiper/react'
import { useLocation } from 'react-router-dom'
import { Profile, TestimonialBanner } from '../../../../../components'
import Button from '../../../../../components/global/Button'
import GalleryIndex from '../../../../../components/global/carousel/Gallery/GalleryIndex'
import { genericAnimation, TAKE_A_COURSE_ANIMATION } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './sectionFour.module.scss'

const SectionFour = ({ content, isDevelopmentView }) => {
  const {pathname} = useLocation()
  const uniqueCourse = pathname == '/course/instagram-marketing' ? 'd-none' : 'd-block'
  const sectionFour = useRef() // create a ref for the root level element (for scoping)
  const { articleOne, header, body } = content

  const testimonials = body.testimonials.map((testimonial, index) => {
    return (
      <SwiperSlide className='pb-10' key={index}>
        <div className={`text-white text-center d-flex flex-column align-items-lg-center ${style.testimonial}`}>
          <p className={['text-center lh-lg mt-5 mb-10', style.message].join(' ')}>{testimonial.message}</p>
          <Profile content={testimonial.profile} />
        </div>
      </SwiperSlide>
    )
  })

  return (
    <Gsap animationFuncion={() => genericAnimation(`sectionFour`)}>
      <section className={`${style.sectionFour}  pb-0 bg-white`}>
        <Container className={`${uniqueCourse}`}>
          <section className='sectionFour'>
            <section className={` ${uniqueCourse} d-flex flex-column align-items-center justify-content-between flex-lg-row my-5`}>
              <div className={`text-center text-lg-start`}>
                <p className={`text-primary fw-semibold`}>{articleOne.title}</p>
                <h2 className={`text-blue fw-semibold`}>{articleOne.topic}</h2>
              </div>
              <p className={`text-center text-lg-start ${style.description}`}>{articleOne.description}</p>
            </section>
          </section>
        </Container>

        <div className={` ${uniqueCourse} container-fluid text-center mb-lg-20 ${style.gradientOverlay}`}>
          <Marquee speed={50}>
            <div className={`d-flex align-items-center justify-content-center justify-content-lg-between gap-24 ${style.brandScale}`}>
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
              {/* <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.brand} col-5 col-lg-2 lazyload`}
                src={articleOne.companies[6]}
                data-src={articleOne.companies[6]}
              /> */}
            </div>
          </Marquee>
        </div>
       
        <div className={``} hidden={!isDevelopmentView}>
          <GalleryIndex />
        </div>
        <Container>
          <section className='mt-lg-20 '>
            <TestimonialBanner title={body.title}>{testimonials}</TestimonialBanner>
          </section>

          <Gsap animationFuncion={TAKE_A_COURSE_ANIMATION}>
            <div hidden={isDevelopmentView} className={style.sectionFourWrapper}>
              <div ref={sectionFour} className={style.sectionFourImg}>
                <img
                  alt='card-img'
                  data-sizes='auto'
                  className={`lazyload ${style.angle} angle`}
                  src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/edges.svg`}
                />
                <img
                  alt='card-img'
                  data-sizes='auto'
                  className={`lazyload ${style.img} img`}
                  src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/smiling-lady.webp`}
                />
                <img
                  alt='card-img'
                  data-sizes='auto'
                  className={`lazyload ${style.box} box`}
                  src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/box.svg`}
                />
              </div>
              <div className={style.sectionFourTextGroup}>
                <Gsap animationFuncion={() => genericAnimation(`sectionFourText`)}>
                  <div className={`${style.sectionFourText}`}>
                    <p className={`${style.caption} sectionFourText`}>{header.caption}</p>
                    <h2 className={`${style.title} sectionFourText`}>{header.title}</h2>
                    <p className={`${style.subTitle} sectionFourText`}>{header.subTitle}</p>
                  </div>
                  <div className={`${style.btnContainer} sectionFourText`}>
                    <Button linkHref='/student/register' linkText='Get Started' solidBtn navBtn width={`11`} />
                  </div>
                </Gsap>
              </div>
            </div>
          </Gsap>
        </Container>
      </section>
    </Gsap>
  )
}

SectionFour.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFour
