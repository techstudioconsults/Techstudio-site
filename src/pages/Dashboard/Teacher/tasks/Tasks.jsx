import React from 'react'
import { Avatar } from '../../../../components'
import Table from './component/table/Table'
import style from './tasks.module.scss'

const Tasks = () => {
  return (
    <div className={style.tasks}>
      <div className={style.header}>
        <h5 className={style.title}>Tasks</h5>
        <Avatar />
      </div>
      <div>
        <div className={style.search}>
          <input
            type='text'
            id='fullName'
            className='form-control'
            aria-describedby='passwordHelpBlock'
            placeholder='Full name'
          />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default Tasks
