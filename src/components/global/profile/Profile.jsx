import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

const Profile = ({ content }) => {
  const { image, name, job } = content

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
    <div className='d-flex gap-5 align-items-center justify-content-center'>
      <div
        style={style}
        className='overflow-hidden border border-secondary border-4 rounded-circle'
      >
        <img className='img-fluid' src={image} alt='avatar' />
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
