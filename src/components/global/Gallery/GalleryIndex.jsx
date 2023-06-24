import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import GalleryImg01 from '../../../assets/images/GelleryImg01.png'
import GalleryImg02 from '../../../assets/images/GelleryImg02.png'
import GalleryImg03 from '../../../assets/images/GelleryImg03.png'
import GalleryImg04 from '../../../assets/images/GelleryImg04.png'
import GalleryImg05 from '../../../assets/images/GelleryImg05.png'
import GalleryImg06 from '../../../assets/images/GelleryImg06.png'

import 'swiper/css'
import style from './Gallery.module.scss'

const GalleryIndex = () => {
  return (
    // <div className={`container${style.container}`}>
    <div className={style.GalleryIndex}>
      <div className={style.GalleryIndexContents}>
        <div className={style.GalleryIndexContentsFirst}>
          <div className={style.GalleryIndexContentsFirstInner}>
            <div>
              <h6 className={style.galleryHeader}>What to expect</h6>
              <h3 className={style.gallerySubheader}>Our Gallery</h3>
            </div>
            <p className={style.galleryText}>
              Lorem ipsum dolor sit amet consectetur. Urna adipiscing risus
              faucibus ut vulputate malesuada eget. In leo commodo auctor
              facilisi. Le nisl justo in eu volutpat eu in. Sit urna nulla mi
              duis egestas feugiat felis molestie. Lorem ipsum dolor sit amet
              consectetur. Urna adipiscing risus faucibus ut vulputate malesuada
              eget.
            </p>
          </div>
        </div>

        <Swiper
          className={style.GalleryIndexContentsSecond}
          spaceBetween={0}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img src={GalleryImg01} alt='' className={style.GalleryImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GalleryImg02} alt='' className={style.GalleryImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GalleryImg03} alt='' className={style.GalleryImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GalleryImg04} alt='' className={style.GalleryImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GalleryImg05} alt='' className={style.GalleryImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GalleryImg06} alt='' className={style.GalleryImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    // </div>
  )
}

export default GalleryIndex
