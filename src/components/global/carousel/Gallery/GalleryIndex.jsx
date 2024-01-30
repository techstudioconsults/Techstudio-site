import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { genericAnimation } from '../../../../gsap'
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
                <p className={`${style.galleryHeader} fw-semibold`}>WHAT TO EXPECT</p>
                <h3 className={`${style.gallerySubheader} mb-0`}>Our Facility</h3>
              </div>
              <p className={`${style.galleryText} facility`}>
                We have put in place a very comfortable, and conducive learning facilities where you have access to resources. We have also invested in
                unlimited internet to ensure our students don’t have hinderance in their learning process.
              </p>
            </div>
          </Gsap>
        </Container>

        <Container>
          <section className={` position-relative`}>
            <img
              className={style.polygon}
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879055/techstudio/images/Polygon_1_ysztg3_gz0ob2.png`}
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
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9412_mil4co_trbvdc.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/Rectangle_14_ttyodm_fgxexu.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9436_wcn8mn_x0dqal.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/Rectangle_15_qd4r71_y37idd.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9419_w7p2l6_phistp.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9423_oyny7o_aufi1n.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9418_f8hbk7_wuinco.png`}
                  />
                </SwiperSlide>
                <SwiperSlide className={style.slider}>
                  <img
                    alt='card-img'
                    data-sizes='auto'
                    className={`${style.GalleryImg} lazyload`}
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879366/techstudio/images/IMG_9433_kmoob7_svinvh.webp`}
                    data-src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879366/techstudio/images/IMG_9433_kmoob7_svinvh.webp`}
                  />
                </SwiperSlide>
              </Swiper>

              <div className={`${style.sliderText} mt-10`}>
                <Gsap animationFuncion={() => genericAnimation(`text`)}>
                  <h5 className='fw-bold text'>A World-Class Learning Facility</h5>
                  <p className='mt-10 text'>
                    At Tech Studio Academy, we have created a conducive environment for learning, combining exceptional school structures, inspiring classrooms,
                    and dedicated tutors. We understand that the physical surroundings greatly impact the educational experience, and we strive to provide a
                    nurturing setting that fosters academic growth, creativity, and personal development.
                  </p>
                  <br />
                  <p className='text'>
                    Our classrooms are carefully designed to facilitate effective teaching and learning to enable tutors to deliver dynamic and engaging lessons
                    that captivate students' attention and spark their curiosity.
                  </p>
                </Gsap>
              </div>
            </section>
          </section>
        </Container>
      </div>
    </div>
  )
}

export default GalleryIndex
