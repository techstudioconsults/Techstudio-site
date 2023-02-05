import React from 'react'
import { MdSend } from 'react-icons/md'
import style from './chat.module.scss'

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
          <MdSend size={`1rem`} />
        </div>
      </div>
    </section>
  )
}

export default ChatDisplay
