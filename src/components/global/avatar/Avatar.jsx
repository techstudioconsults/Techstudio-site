import React from 'react'

import style from './avatar.module.scss'

const Avatar = () => {
  return (
    <div className={style.avatarWrapper}>
      <img
        src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1688287664/techstudio-web-app/assets/images/Ellipse_8_pa8go9.png`}
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
