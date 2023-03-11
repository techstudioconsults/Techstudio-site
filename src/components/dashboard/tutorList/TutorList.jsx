import React from 'react'
import { Link } from 'react-router-dom'
import ListLayout from './ListLayout'
import style from './tutorlist.module.scss'

const TutorList = () => {
  return (
    <div className={style.tutorList}>
      <div className='d-flex justify-content-between mb-5'>
        <p className='fw-bold'>Tutors</p>
        <Link to={`#`}>
          <p>View All</p>
        </Link>
      </div>
      <div
        className={`${style.listLayout} d-flex flex-column gap-3 overflow-auto hide_scrollbar`}
      >
        <ListLayout />
        <ListLayout />
        <ListLayout />
        <ListLayout />
        <ListLayout />
        <ListLayout />
      </div>
    </div>
  )
}

export default TutorList
