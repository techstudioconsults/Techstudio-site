import React from 'react'
import style from './avatar.module.scss'

const Avatar = () => {
  return (
    <div className={style.avatarWrapper}>
      <img
        src={``}
        // src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`}
        alt='img'
        className='cc-img-fluid'
      />
    </div>
  )
}

export default Avatar

export const AvatarXL = () => {
  return (
    <div className={style.avatarWrapperLarge}>
      <img
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`}
        alt='img'
        className='cc-img-fluid'
      />
    </div>
  )
}
