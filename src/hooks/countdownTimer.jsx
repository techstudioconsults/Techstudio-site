import { useCallback } from 'react'
import { useEffect, useState } from 'react'

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = useCallback(() => {
    const now = new Date()
    const difference = new Date(targetDate) - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }, [targetDate])

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [calculateTimeRemaining, targetDate])

  return (
    <>
      <span className={`text-danger fs-sm`}> Expires: </span>
      <span className={`text-danger fs-sm`}>
        {timeRemaining.days > 0 && `${timeRemaining.days} days `}
        {timeRemaining.hours > 0 && `${timeRemaining.hours} hrs `}
        {timeRemaining.minutes > 0 && `${timeRemaining.minutes} mins `}
        {`${timeRemaining.seconds} secs`}
      </span>
    </>
  )
}

export default CountdownTimer
