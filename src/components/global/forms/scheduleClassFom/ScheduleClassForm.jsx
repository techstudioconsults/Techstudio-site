import React from 'react'
import { Icon } from '@iconify/react'

import style from './scheduleClass.module.scss'

const ScheduleClassForm = () => {
  return (
    <form className={style.scheduleForm}>
      <div className={style.inputs}>
        <label htmlFor='topic'>Topic</label>
        <div className={[style.input].join(' ')}>
          <input type='text' />
        </div>
      </div>
      <div className={style.inputs}>
        <label htmlFor='date'>Date</label>
        <div className={[style.input].join(' ')}>
          <input type='text' />
        </div>
      </div>
      <div className={style.inputs}>
        <label htmlFor='time'>Time</label>
        <div className={[style.input].join(' ')}>
          <input type='text' />
        </div>
      </div>
      <div className={style.attachment}>
        <label htmlFor='resource'>Resources</label>
        <div className={style.attachmentForm}>
          <div className={style.iconText}>
            <Icon icon={`gg:attachment`} />
            <p>Browse files or drag and drop here</p>
          </div>
          <button type='submit'>Add</button>
        </div>
      </div>
      <div className={[`d-flex gap-3 my-10 align-items-center justify-content-end`].join(' ')}>
        <button className='fs-sm bg-primary text-white rounded rounded-lg px-3 w-25'>Save Changes</button>
        <button className='fs-sm fw-semibold bg-white text-primary rounded rounded-lg px-3 w-25 border border-primary'>Cancel</button>
      </div>
    </form>
  )
}

export default ScheduleClassForm
