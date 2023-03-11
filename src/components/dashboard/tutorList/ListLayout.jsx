import React from 'react'
import Avatar from '../../global/avatar/Avatar'
import style from './tutorlist.module.scss'

const ListLayout = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center gap-3'>
        <Avatar />
        <div>
          <p className='fs-sm fw-bold'>James Kalu</p>
          <p className='fs-sm text-muted'>Javacript & Python</p>
        </div>
      </div>
      <div>
        <p className={`${style.status} fs-sm`}>Online</p>
      </div>
    </div>
  )
}

export default ListLayout
