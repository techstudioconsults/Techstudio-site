import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Swiper } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

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
    <div className='w-100 position-relative bg-blue border-radius-lg py-10 p-lg-10 px-10'>
      <img
        className='position-absolute top-0 start-0 my-10 mx-16 d-none d-lg-block'
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476114/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Repeat_Grid_38_ipl0tv.png'
        alt='img'
      />

      <p className='fs-2xl fw-semibold text-center text-white'>{title}</p>
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

      <img
        className='position-absolute bottom-0 end-0 my-10 mx-16 d-none d-lg-block'
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7475_gijnxw.png'
        alt='img'
      />
    </div>
  )
}

TestimonialBanner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default TestimonialBanner
