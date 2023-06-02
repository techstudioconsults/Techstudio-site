// import React from 'react'
// import PropTypes from 'prop-types'
// import style from './introCard.module.scss'
// import clock from '../../../../assets/icons/clock.png'
// import calendar from '../../../../assets/icons/calendar.png'
// import img2 from '../../../../assets/images/intro-img1.webp'
// import Button from '../../Button'
import useCurrency from '../../../../hooks/useCurrency'

// const IntroCard = ({ course }) => {
//   const formatCurrency = useCurrency()

//   const convertDateToReadable = (date) => {
//     let dateSet = new Date(date).toUTCString().split(' ')
//     return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
//   }

//   return (
//     <div className={[style.introCard, `cc-shadow`].join(' ')}>
//       <div className={style.imgContainer}>
//         <img src={img2} alt='img' className='cc-img-fluid' />
//       </div>
//       <div className={style.introCardText}>
//         <h5 className={style.title}>{course?.title}</h5>
//         <p className={style.desc}>{course?.description}</p>

//         <div className={style.timeDate}>
//           <div className={style.time}>
//             <span className={style.icon}>
//               <img src={calendar} alt='calendar' />
//             </span>
//             <span>Starting {convertDateToReadable(course?.startDate)}</span>
//           </div>
//           <div className={style?.date}>
//             <span className={style.icon}>
//               <img src={clock} alt='clock' />
//             </span>
//             <span>{course?.duration} Weeks</span>
//           </div>
//         </div>
//         <div className={style.priceButton}>
//           <h5 className={style.price}>{formatCurrency(course?.fee)}</h5>
//           <Button
//             width={`10`}
//             linkText='View Full Details'
//             linkHref={course?.path}
//             solidBtn
//             navBtn
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// IntroCard.propTypes = {
//   course: PropTypes.object,
// }

// export default IntroCard

import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import style from './introCard.module.scss'
import clock from '../../../../assets/icons/clock.png'
import calendar from '../../../../assets/icons/calendar.png'
import Button from '../../Button'
import { useSelector } from 'react-redux'
import { selectCoursesExternal } from '../../../../app/api/appSlice'

const IntroCard = ({ course }) => {
  const formatCurrency = useCurrency()
  const courses = useSelector(selectCoursesExternal)
  const [duration, setDuration] = useState()
  const [time, setTime] = useState()
  const [fee, setFee] = useState()

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  const dynamicDetails = useCallback(() => {
    courses.forEach((singleCourse) => {
      if (singleCourse.title === course.course) {
        setDuration(singleCourse.duration)
        setTime(singleCourse.startDate)
        setFee(singleCourse.fee)
      }
    })
  }, [course.course, courses])

  useEffect(() => {
    dynamicDetails()
  }, [dynamicDetails])

  return (
    <div className={[style.introCard, `cc-shadow`].join(' ')}>
      <div className={style.imgContainer}>
        <img src={course.img} alt='img' className='cc-img-fluid' />
      </div>
      <div className={style.introCardText}>
        <h5 className={style.title}>{course.course}</h5>
        <p className={style.desc}>{course.desc}</p>

        <div className={style.timeDate}>
          <div className={style.time}>
            <span className={style.icon}>
              <img src={calendar} alt='calendar' />
            </span>
            <span>Starting {convertDateToReadable(time)}</span>
          </div>
          <div className={style?.date}>
            <span className={style.icon}>
              <img src={clock} alt='clock' />
            </span>
            <span>{duration} Weeks</span>
          </div>
        </div>
        <div className={style.priceButton}>
          <h5 className={style.price}>{formatCurrency(fee)}</h5>
          <Button
            width={`10`}
            linkText='View Full Details'
            linkHref={course.path}
            solidBtn
            navBtn
          />
        </div>
      </div>
    </div>
  )
}

IntroCard.propTypes = {
  course: PropTypes.object.isRequired,
}

export default IntroCard
