import React from 'react'

import Avatar from '../../avatar/Avatar'

import style from './messageCard.module.scss'

const MessageCard = () => {
  return (
    <div className={style.messageCard}>
      <div className={style.avatar}>
        <Avatar />
      </div>
      <div className={style.messageInfo}>
        <div className={style.header}>
          <p className={style.name}>Olawunmi Williams</p>
          <span className={style.number}>
            <span>2</span>
          </span>
          <p className={style.time}>Now</p>
        </div>
        <div className={style.messageWrapper}>
          <p className={style.message}>
            Hey, can you share me new design course? Because I do not have this
            one. Thanks!
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
