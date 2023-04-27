import React from 'react'
import { courses } from '../data'
import { Link, Outlet } from 'react-router-dom'

const Paymenttab = () => {
  const courseNav = courses.map((course, index) => {
    return (
      <div className='mb-2' key={index}>
        <div>
          <Link className='d-block text-secondary' to={`courses/${index}`}>
            {course}
          </Link>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className='mt-5 border-bottom border-secondary d-flex align-items-center gap-4'>
        {courseNav}
      </div>
      <div className='mt-1'>
        <Outlet />
      </div>
    </>
  )
}

export default Paymenttab
