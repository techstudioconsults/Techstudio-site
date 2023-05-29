import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

const Profile = ({ content }) => {
  const { name, job } = content

  const style = useMemo(() => {
    const baseStyle = {
      height: '5.5rem',
      width: '5.5rem',
    }

    if (window.innerWidth <= 767) {
      baseStyle.height = '3rem'
      baseStyle.width = '3rem'
    }

    return baseStyle
  }, [])

  return (
    <div className='d-flex gap-5 align-items-center'>
      <div
        style={style}
        className='overflow-hidden border border-secondary border-4 rounded-circle'
      >
        <img
          className='img-fluid'
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476103/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Mask_Group_45_azkyby.png'
          alt='avatar'
        />
      </div>
      <div className='text-start'>
        <h5 className='text-info fs-xl fw-bold'>{name}</h5>
        <p className='text-white fs-sm'>{job}</p>
      </div>
    </div>
  )
}

Profile.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Profile
