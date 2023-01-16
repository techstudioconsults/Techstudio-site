import React from 'react'
import PropTypes from 'prop-types'

const TestimonialBanner = ({ children }) => {
  return (
    <div className='w-100 position-relative bg-blue d-flex align-items-center justify-content-center border-radius-lg'>
      <img
        className='position-absolute top-0 start-0 my-10 mx-16 d-none d-lg-block'
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476114/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Repeat_Grid_38_ipl0tv.png'
        alt='img'
      />
      {children}
      <img
        className='position-absolute bottom-0 end-0 my-10 mx-16 d-none d-lg-block'
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7475_gijnxw.png'
        alt='img'
      />
    </div>
  )
}

TestimonialBanner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default TestimonialBanner
