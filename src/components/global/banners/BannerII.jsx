import React from 'react'
import PropTypes from 'prop-types'

const BannerII = ({ children }) => {
  const style = {
    height: `20.938rem`,
  }

  return (
    <div
      style={style}
      className='w-100 position-relative bg-blue d-flex align-items-center bannerII border-radius-lg'
    >
      <img
        className='position-absolute top-0 start-0 translate-middle m-5 d-none d-lg-block'
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476114/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Repeat_Grid_38_ipl0tv.png'
        alt='img'
      />
      {children}
      <div className='position-absolute bottom-0 end-0 me-32 d-none d-lg-block'>
        <img
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476100/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Image_134_ext3we.png'
          alt='img'
        />
      </div>
      <img
        className='position-absolute top-100 start-100 translate-middle d-none d-xxl-block'
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7475_gijnxw.png'
        alt='img'
      />
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
