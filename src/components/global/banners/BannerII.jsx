import React from 'react'
import PropTypes from 'prop-types'

import { genericAnimation, spin } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'

const BannerII = ({ children }) => {
  const style = {
    height: `16.938rem`,
  }

  return (
    <div
      style={style}
      className='w-100 position-relative bg-blue d-flex align-items-center bannerII border-radius-lg mt-n9'
    >
      <Gsap animationFuncion={() => spin(`spin`)}>
        <div className='position-absolute top-0 start-0 translate-middle m-5 d-none d-lg-block'>
          <img
            className='m-5 d-none d-lg-block spin'
            src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218527/techstudio-web-app/assets/images/repeatGrid_iwd5xz.webp'
            alt='img'
          />
        </div>
      </Gsap>
      <Gsap animationFuncion={() => genericAnimation(`banner`)}>
        <div className='banner'>{children}</div>
      </Gsap>
      <div
        style={{ bottom: `-6px` }}
        className='position-absolute end-0 me-32 d-none d-xl-block'
      >
        <img
          alt='card-img'
          data-sizes='auto'
          className={`lazyload`}
          src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686220354/techstudio-web-app/assets/images/Image_134_ext3we_yxqfpf.webp'
          data-src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_300/v1686220354/techstudio-web-app/assets/images/Image_134_ext3we_yxqfpf.webp'
        />
      </div>
      <Gsap animationFuncion={() => spin(`spin-reverse`)}>
        <div className='position-absolute top-100 start-100 translate-middle'>
          <img
            className=' d-none d-xxl-block spin-reverse'
            src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218516/techstudio-web-app/assets/images/AboutSection2Pattern02_mnthqw.png'
            alt='img'
          />
        </div>
      </Gsap>
    </div>
  )
}

BannerII.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default BannerII
