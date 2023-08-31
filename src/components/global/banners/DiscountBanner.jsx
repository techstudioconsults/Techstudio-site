import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

const DiscountBanner = () => {
  const date = '1 nov 2023'

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const countDown = useCallback(() => {
    const futureDate = new Date(date)
    const currentDate = new Date()
    const totalSeconds = (futureDate - currentDate) / 1000
    const hrs = Math.floor((totalSeconds / 3600) % 24)
    const mins = Math.floor((totalSeconds / 60) % 60)
    const secs = Math.floor(totalSeconds % 60)

    setHours(formatTime(hrs))
    setMinutes(formatTime(mins))
    setSeconds(formatTime(secs))
  }, [])

  setInterval(countDown, 1000)
  function formatTime(time) {
    return time < 10 ? `0${time}` : time
  }

  useEffect(() => {
    countDown()
  }, [countDown])

  return (
    <div
      style={{ height: `57px` }}
      className='bg-white w-100 d-flex align-items-center justify-content-center'
    >
      <p className='text-dark fw-bolder fs-lg'>
        Get 10% Discount Off Our Next Cohort!!!{' '}
        <span className='text-danger'>
          Expires in: {hours}hrs:{minutes}mins:{seconds}secs
        </span>
      </p>
    </div>
  )
}

export default DiscountBanner
