import React from 'react'
import PropTypes from 'prop-types'
import style from './avatarStack.module.scss'

const AvatarStack = ({ imageList }) => {
  const imagesDisplay = imageList.slice(0, 3).map((img, index) => {
    return (
      <div key={index} className={style.avatarImg}>
        <img src={img} alt='img' className='cc-img-fluid' />
      </div>
    )
  })
  return (
    <div className={style.avatarCollections}>
      {imagesDisplay}
      <p className={[style.message, `ms-1`].join(' ')}>
        +{imageList.length - imagesDisplay.length} joined the class
      </p>
    </div>
  )
}

AvatarStack.propTypes = {
  imageList: PropTypes.array.isRequired,
}

export default AvatarStack
