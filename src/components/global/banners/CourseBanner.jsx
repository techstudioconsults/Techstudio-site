import React from 'react'
import { Icon } from '@iconify/react'

import Button from '../Button'

const CourseBanner = ({ duration }) => {
  return (
    <section
      style={{
        borderRadius: `8.33846px`,
      }}
      className='cc-shadow w-75 p-10 m-auto bg-white'
    >
      <span className='d-flex gap-1 align-items-center'>
        <Icon icon={`solar:calendar-linear`} />
        <span className='fw-bold'>Next Cohort:</span>
      </span>
      <section className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
        <div>
          <h2 className='m-0 fs-3xl text-primary'>{duration?.weekday?.date}</h2>
          <p className='m-0 fs-xs text-dark fw-bold'>
            Weekday Class, Online Class; Mon - Thurs (10am - 5pm){' '}
          </p>
        </div>
        <div>
          <h2 className='m-0 fs-3xl text-primary'>{duration?.weekend?.date}</h2>
          <p className='m-0 fs-xs text-dark fw-bold'>
            Weekday Class, Online Class; Mon - Thurs (10am - 5pm){' '}
          </p>
        </div>
        <div className=''>
          <Button
            linkHref='/student/register'
            linkText='Register Now'
            solidBtn
            navBtn
            width={`10`}
          />
        </div>
      </section>
    </section>
  )
}

export default CourseBanner
