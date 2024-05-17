// import React from 'react'
import PropTypes from 'prop-types'

import calendar from '../../../../assets/icons/calendar.png'
import clock from '../../../../assets/icons/clock.png'
import useCurrency from '../../../../hooks/useCurrency'
import Button from '../../Button'

import style from './introCard.module.scss'

const IntroCard = ({ course }) => {
  const formatCurrency = useCurrency()

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  function calculateWeeks(startDate, endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)

    // Calculate the time difference in milliseconds
    const timeDiff = end.getTime() - start.getTime()
    // Calculate the number of weeks
    const weeks = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7))
    return weeks
  }

  const getCourseRoute = (title) => {
    switch (title?.toLowerCase()) {
      case `product design ui/ux`:
        return `/course/product-design`
      case `fullstack development`:
        return `/course/fullstack`
      case `data science`:
        return `/course/data-science`
      case `frontend engineering`:
        return `/course/frontend`
      case `cyber security`:
        return `/course/cyber-security`
        case ` digital marketing immersive`:
          return `/course/digital-marketing`
      // case `advanced instagram marketing`:
      //   return `/course/instagram-marketing`
      // the default here is meant to be /
      default:
        return `/course/digital-marketing`
    }
  }

  return (
    <div className={[style.introCard, `cc-shadow`].join(' ')}>
      {/* <Gsap animationFuncion={() => SCALE_ANIMATION(`scale`)}> */}
      <div className={style.imgContainer}>
        <img
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699890564/techstudio/GIFS/Frame_1000002483_ww93xt.gif`}
          alt='img'
          className='cc-img-fluid scale'
        />
      </div>
      {/* </Gsap> */}
      <div className={style.introCardText}>
        <h3 className={`${style.title} tagDetails`}>{course?.title}</h3>
        <p className={`${style.desc} tagDetails`}>{course?.description}</p>

        {/* onliine */}
        <section className='my-3 tagDetails'>
          <p className='text-danger fw-semibold tiny-text'>Online</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <img className={style.icon} src={calendar} alt='calendar' />
              <span>{!course?.classes?.online?.[0]?.startDate ? `N/A` : `Starting ${convertDateToReadable(course?.classes?.online?.[0]?.startDate)}`}</span>
            </div>
            <div className={style.date}>
              <img className={style.icon} src={clock} alt='clock' />
              <span>
                {!course?.classes?.online?.[0]?.startDate
                  ? `N/A`
                  : `${calculateWeeks(course?.classes?.online?.[0]?.startDate, course?.classes?.online?.[0]?.endDate)} Weeks`}
              </span>
            </div>
            <div className={style.date}>
              <p className='mb-0 fw-bold medium-text'>{!course?.classes?.online?.[0]?.fee ? `N/A` : formatCurrency(course?.classes?.online?.[0]?.fee)}</p>
            </div>
          </div>
        </section>
        {/* weekday */}
        <section className='my-3 tagDetails'>
          <p className=' text-danger fw-semibold tiny-text'>Weekday</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <img className={style.icon} src={calendar} alt='calendar' />
              <span>{!course?.classes?.weekday?.[0]?.startDate ? `N/A` : `Starting ${convertDateToReadable(course?.classes?.weekday?.[0]?.startDate)}`}</span>
            </div>
            <div className={style?.date}>
              <img className={style.icon} src={clock} alt='clock' />
              <span>
                {!course?.classes?.weekday?.[0]?.startDate
                  ? `N/A`
                  : `${calculateWeeks(course?.classes?.weekday?.[0]?.startDate, course?.classes?.weekday?.[0]?.endDate)} Weeks`}
              </span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>{!course?.classes?.weekday?.[0]?.fee ? `N/A` : formatCurrency(course?.classes?.weekday?.[0]?.fee)}</p>
            </div>
          </div>
        </section>
        {/* weekend */}
        <section className='my-3 tagDetails'>
          <p className=' text-danger fw-semibold tiny-text'>Weekend</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <img className={style.icon} src={calendar} alt='calendar' />
              <span>{!course?.classes?.weekend?.[0]?.startDate ? `N/A` : `Starting ${convertDateToReadable(course?.classes?.weekend?.[0]?.startDate)}`}</span>
            </div>
            <div className={style?.date}>
              <img className={style.icon} src={clock} alt='clock' />
              <span>
                {' '}
                {!course?.classes?.weekend?.[0]?.startDate
                  ? `N/A`
                  : `${calculateWeeks(course?.classes?.weekend?.[0]?.startDate, course?.classes?.weekend?.[0]?.endDate)} Weeks`}
              </span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>{!course?.classes?.weekend?.[0]?.fee ? `N/A` : formatCurrency(course?.classes?.weekend?.[0]?.fee)}</p>
            </div>
          </div>
        </section>
        <div className={`${style.priceButton} justify-content-end tagDetails`}>
          {/* <h5 className={style.price}>
            {formatCurrency(course.price) || formatCurrency(fee)}
          </h5> */}
          <Button
            width={`10`}
            linkText='View Full Details'
            // linkHref={`/course/${course?.title}`}
            linkHref={getCourseRoute(course?.title)}
            solidBtn
            navBtn
          />
        </div>
      </div>
    </div>
  )
}

IntroCard.propTypes = {
  course: PropTypes.object,
}

export default IntroCard
