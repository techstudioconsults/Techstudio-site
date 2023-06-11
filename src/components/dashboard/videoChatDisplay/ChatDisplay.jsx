import React from 'react'
import style from './chat.module.scss'
import { Icon } from '@iconify/react'

const ChatDisplay = () => {
  return (
    <section className={style.chat}>
      <div className={style.header}>
        <h5>Chat</h5>
      </div>
      <div className={[style.messsageWrapper, `hide_scrollbar`].join(' ')}>
        ...
      </div>
      <div className={style.inputForm}>
        <input
          className='form-control form-control-sm border-0'
          type='text'
          placeholder='write your message here'
          aria-label='.form-control-sm example'
        />
        <div className='py-2 px-3'>
          <Icon icon={`mdi:send`} width={`1rem`} />
        </div>
      </div>
    </section>
  )
}

export default ChatDisplay
