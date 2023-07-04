import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GALLERY_TEXT_ANIMATION, genericAnimation } from '../../../../gsap'
import Gsap from '../../../../hooks/Gsap'
import { Container } from '../../../../layout'

import 'swiper/css'
import style from './Gallery.module.scss'

const GalleryIndex = () => {
  const swiperRef = React.useRef(null)

  return (
    <div className={`${style.GalleryIndex} bg-white`}>
      <div className={style.GalleryIndexContents}>
        <Container>
          <Gsap animationFuncion={() => genericAnimation(`facility`)}>
            <div className={`${style.GalleryIndexContentsFirstInner} facility`}>
              <div>
                <h6 className={style.galleryHeader}>WHAT TO EXPECT</h6>
                <h3 className={`${style.gallerySubheader} mb-0`}>
                  Our Facility
                </h3>
              </div>
              <p className={`${style.galleryText} facility`}>
                We have put in place a very comfortable, and conducive learning
                facilities where you have access to resources. We have also
                invested in unlimited internet to ensure our students don’t have
                hinderance in their learning process.
              </p>
            </div>
          </Gsap>
        </Container>

        <Container>
          <section className={` position-relative`}>
            <img
              className={style.polygon}
              src='https://res.cloudinary.com/dkszgtapy/image/upload/v1686740627/techstudio-web-app/assets/images/Polygon_1_ysztg3.webp'
              alt='polygon'
            />
            <section className='d-xl-flex position-relative'>
              <Swiper
                ref={swiperRef}
                className={style.GalleryIndexContentsSecond}
                spaceBetween={0}
                // slidesPerView={5}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
              >
                {/* <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686743832/techstudio-web-app/assets/images/Rectangle_17_l7oaid.webp`}
                    data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_2000/v1686743832/techstudio-web-app/assets/images/Rectangle_17_l7oaid.webp`}
                  />
                </SwiperSlide> */}
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686777381/techstudio-web-app/assets/images/Rectangle_14_ttyodm.webp`}
                    data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_2000/v1686777381/techstudio-web-app/assets/images/Rectangle_14_ttyodm.webp`}
                  />
                </SwiperSlide>
                {/* <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686777368/techstudio-web-app/assets/images/Rectangle_17_3_fpehs3.webp`}
                    data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_2000/v1686777368/techstudio-web-app/assets/images/Rectangle_17_3_fpehs3.webp`}
                  />
                </SwiperSlide> */}
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686777212/techstudio-web-app/assets/images/Rectangle_15_qd4r71.webp`}
                    data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_2000/v1686777212/techstudio-web-app/assets/images/Rectangle_15_qd4r71.webp`}
                  />
                </SwiperSlide>
                {/* <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686777198/techstudio-web-app/assets/images/Rectangle_11_mc9urm.webp`}
                    data-src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_2000/v1686777198/techstudio-web-app/assets/images/Rectangle_11_mc9urm.webp`}
                  />
                </SwiperSlide> */}
              </Swiper>

              <Gsap animationFuncion={GALLERY_TEXT_ANIMATION}>
                <div className={`${style.sliderText} mt-10 slideText`}>
                  <h5 className='fs-xl fw-bold'>
                    A World-Class Learning Facility
                  </h5>
                  <p className='mt-10'>
                    At Tech Studio Academy, we have created a conducive
                    environment for learning, combining exceptional school
                    structures, inspiring classrooms, and dedicated tutors. We
                    understand that the physical surroundings greatly impact the
                    educational experience, and we strive to provide a nurturing
                    setting that fosters academic growth, creativity, and
                    personal development.
                  </p>
                  <br />
                  <p>
                    Our classrooms are carefully designed to facilitate
                    effective teaching and learning to enable tutors to deliver
                    dynamic and engaging lessons that captivate students'
                    attention and spark their curiosity.
                  </p>
                </div>
              </Gsap>
            </section>
          </section>
        </Container>
      </div>
    </div>
  )
}

export default GalleryIndex
