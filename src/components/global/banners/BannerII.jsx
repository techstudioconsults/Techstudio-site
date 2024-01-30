import React from 'react'
import boxFiller from '@assets/images/box-filler.png'
import PropTypes from 'prop-types'

import { genericAnimation, spin } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'

const BannerII = ({ children }) => {
  const style = {
    height: `16.938rem`,
  }

  return (
    <div className='w-100 position-relative bg-blue d-flex align-items-center bannerII border-radius-lg mt-n9 py-lg-10'>
      <Gsap animationFuncion={() => spin(`spin`)}>
        <div className='position-absolute top-0 start-0 translate-middle m-5 d-none d-lg-block'>
          <img
            className='m-5 d-none d-lg-block spin'
            src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/AboutSection2Pattern01_umrjsl_j0cr70.png`}
            alt='img'
          />
        </div>
      </Gsap>
      <Gsap animationFuncion={() => genericAnimation(`banner`)}>
        <div className='banner'>{children}</div>
      </Gsap>
      <div style={{ bottom: `-6px` }} className='position-absolute end-0 me-32 d-none d-xl-block'>
        <img
          alt='card-img'
          data-sizes='auto'
          className={`lazyload`}
          src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/smiling-lady-2.png`}
        />
      </div>
      <Gsap animationFuncion={() => spin(`spin-reverse`)}>
        <div className='position-absolute top-100 start-100 translate-middle'>
          <img className=' d-none d-xxl-block spin-reverse' src={boxFiller} alt='img' />
        </div>
      </Gsap>
    </div>
  )
}

BannerII.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default BannerII
