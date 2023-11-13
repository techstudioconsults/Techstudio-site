import React, { useEffect } from 'react'
import boxFiller from '@assets/images/box-filler.png'
import repeatGrid from '@assets/images/repeat-grid.webp'
import PropTypes from 'prop-types'
import { Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

import 'swiper/css/pagination'

import { spin, TESTIMONIAL_BANNER_ANIMATION } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'

import 'swiper/swiper.min.css'

const TestimonialBanner = ({ children, title }) => {
  const swiperRef = React.useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext()
      }
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Gsap animationFuncion={TESTIMONIAL_BANNER_ANIMATION}>
      <div className={`w-100 position-relative bg-blue border-radius-lg py-10 p-lg-10 px-10 testimonialBanner`}>
        <Gsap animationFuncion={() => spin(`spin`)}>
          <img className='position-absolute top-0 start-0 my-10 mx-16 d-none d-lg-block spin' src={repeatGrid} alt='img' />
        </Gsap>

        <h3 className='fw-semibold text-center text-white'>{title}</h3>
        <Swiper
          ref={swiperRef}
          loop={true}
          spaceBetween={300}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          // onSlideChange={handleSlideChange}
        >
          {children}
        </Swiper>
        <Gsap animationFuncion={() => spin(`spin-reverse`)}>
          <img className='position-absolute bottom-0 end-0 my-10 mx-16 d-none d-lg-block spin-reverse' src={boxFiller} alt='img' />
        </Gsap>
      </div>
    </Gsap>
  )
}

TestimonialBanner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default TestimonialBanner
