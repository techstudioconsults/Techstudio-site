import React, { useState } from 'react'
// import 'swiper/swiper.min.css'
import { Icon } from '@iconify/react'
// import required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'

import { HOME_CONTENT } from '../../../../pages/Externals/Home/content'
import { SectionThreeCard } from '../../../../pages/Externals/Home/sections/sectionThree'

// Import Swiper styles
import './styles.css'

const Carousel = () => {
  const { sectionThree } = HOME_CONTENT
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const swiperRef = React.useRef(null)

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const handleSlideChange = () => {
    console.log(swiperRef.current.swiper.realIndex)
    if (swiperRef.current && swiperRef.current.swiper) {
      setCurrentSlideIndex(swiperRef.current.swiper.realIndex)
    }
  }

  const cardDisplay = sectionThree.cards.map((card, index) => (
    <SwiperSlide className='pb-16' key={index}>
      <SectionThreeCard content={card} />
    </SwiperSlide>
  ))

  const isLastSlide = currentSlideIndex === sectionThree.cards.length
  const isFirstSlide = currentSlideIndex === 0

  return (
    <div className='carousel-container'>
      <section className='d-flex align-items-center'>
        {/* <div style={{ width: `8rem` }} className='d-none d-lg-block'>
          <Icon
            className={`${
              isFirstSlide ? `d-none` : `d-block`
            } btn fs-6xl text-blue`}
            icon={`carbon:previous-outline`}
            onClick={goPrev}
          />
        </div> */}
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
        >
          {cardDisplay}
        </Swiper>

        {/* <div className='d-none d-lg-block'>
          <Icon
            className={`${
              !isLastSlide ? `d-block` : `d-none`
            } btn fs-6xl text-blue`}
            onClick={goNext}
            icon={`carbon:next-outline`}
          />
        </div> */}
      </section>
      <section className='d-flex d-lg-none justify-content-center align-items-center mt-10'>
        <div>
          <Icon className={`${isFirstSlide ? `d-none` : `d-block`} btn fs-6xl text-blue`} icon={`carbon:previous-outline`} onClick={goPrev} />
        </div>
        <div>
          <Icon className={`${!isLastSlide ? `d-block` : `d-none`} btn fs-6xl text-blue`} onClick={goNext} icon={`carbon:next-outline`} />
        </div>
      </section>
    </div>
  )
}

export default Carousel
