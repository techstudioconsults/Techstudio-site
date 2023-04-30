import React, { useEffect, useCallback } from 'react'
import { courses } from '../data'
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom'
import style from '../style/paymentClasses.module.scss'

const Paymenttab = () => {
  const navigate = useNavigate()
  const { courseID } = useParams()
  const courseNav = courses.map((course) => {
    return (
      <div className='mb-2' key={course.id}>
        <div>
          <Link
            className={[style.anchor, 'anchor d-block text-secondary'].join(
              ' '
            )}
            to={`courses/${course.id}`}
          >
            {course.name}
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
