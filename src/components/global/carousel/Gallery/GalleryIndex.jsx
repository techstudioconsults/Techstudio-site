import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './Gallery.module.scss'
// import GalleryImg01 from '../../../../assets/images/GelleryImg01.png'
// import GalleryImg02 from '../../../../assets/images/GelleryImg02.png'
// import GalleryImg03 from '../../../../assets/images/GelleryImg03.png'
// import GalleryImg04 from '../../../../assets/images/GelleryImg04.png'
// import GalleryImg05 from '../../../../assets/images/GelleryImg05.png'
// import GalleryImg06 from '../../../../assets/images/GelleryImg06.png'
import { Container } from '../../../../layout'
import { Autoplay } from 'swiper'

const GalleryIndex = () => {
  const swiperRef = React.useRef(null)

  return (
    <div className={style.GalleryIndex}>
      <div className={style.GalleryIndexContents}>
        <Container>
          <div className={style.GalleryIndexContentsFirstInner}>
            <div>
              <h6 className={style.galleryHeader}>WHAT TO EXPECT</h6>
              <h3 className={`${style.gallerySubheader} mb-0`}>Our Facility</h3>
            </div>
            <p className={style.galleryText}>
              We have put in place a very comfortable, and conducive learning
              facilities where you have access to resources. We have also
              invested in unlimited internet to ensure our students don’t have
              hinderance in their learning process.
            </p>
          </div>
        </Container>

        <div>
          <Swiper
            ref={swiperRef}
            className={style.GalleryIndexContentsSecond}
            spaceBetween={0}
            slidesPerView={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
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
            }}
          >
            <SwiperSlide>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.GalleryImg} lazyload`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218521/techstudio-web-app/assets/images/GelleryImg01_kkaqwh.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218521/techstudio-web-app/assets/images/GelleryImg01_kkaqwh.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.GalleryImg} lazyload`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218521/techstudio-web-app/assets/images/GelleryImg02_a55pne.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218521/techstudio-web-app/assets/images/GelleryImg02_a55pne.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.GalleryImg} lazyload`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218521/techstudio-web-app/assets/images/GelleryImg03_ymo87m.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218521/techstudio-web-app/assets/images/GelleryImg03_ymo87m.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.GalleryImg} lazyload`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218521/techstudio-web-app/assets/images/GelleryImg04_rlaxcb.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218521/techstudio-web-app/assets/images/GelleryImg04_rlaxcb.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.GalleryImg} lazyload`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218522/techstudio-web-app/assets/images/GelleryImg05_xpe6gt.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218522/techstudio-web-app/assets/images/GelleryImg05_xpe6gt.webp`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='card-img'
                data-sizes='auto'
                className={`${style.GalleryImg} lazyload`}
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218522/techstudio-web-app/assets/images/GelleryImg06_ywrbbv.webp`}
                data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218522/techstudio-web-app/assets/images/GelleryImg06_ywrbbv.webp`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default GalleryIndex
