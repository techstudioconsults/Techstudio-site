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

  console.log(course)

  return (
    <div className={[style.introCard, `cc-shadow`].join(' ')}>
      {/* <Gsap animationFuncion={() => SCALE_ANIMATION(`scale`)}> */}
      <div className={style.imgContainer}>
        <img
          src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612898/20e286636ecf529af409f599f0dbb9c2_xak8qt.gif`}
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
              <span className={style.icon}>
                <img src={calendar} alt='calendar' />
              </span>
              <span>
                {!course?.classes?.online?.[0]?.startDate
                  ? `N/A`
                  : `starting ${convertDateToReadable(
                      course?.classes?.online?.[0]?.startDate
                    )}`}
              </span>
            </div>
            <div className={style.date}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>
              <span>
                {!course?.duration ? `N/A` : `${course?.duration} Weeks`}
              </span>
            </div>
            <div className={style.date}>
              <p className='mb-0 fw-bold medium-text'>
                {!course?.fee ? `N/A` : formatCurrency(course?.fee)}
              </p>
            </div>
          </div>
        </section>
        {/* weekday */}
        <section className='my-3 tagDetails'>
          <p className=' text-danger fw-semibold tiny-text'>Weekday</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <span className={style.icon}>
                <img src={calendar} alt='calendar' />
              </span>
              <span>
                {`starting ${convertDateToReadable(
                  course?.classes?.weekday?.[0]?.startDate
                )}`}
              </span>
            </div>
            <div className={style?.date}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>
              <span>{`${course?.duration} Weeks`}</span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>
                {formatCurrency(course?.fee)}
              </p>
            </div>
          </div>
        </section>
        {/* weekend */}
        <section className='my-3 tagDetails'>
          <p className=' text-danger fw-semibold tiny-text'>Weekend</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <span className={style.icon}>
                <img src={calendar} alt='calendar' />
              </span>
              <span>
                {`starting ${convertDateToReadable(
                  course?.classes?.weekend?.[0]?.startDate
                )}`}
              </span>
            </div>
            <div className={style?.date}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>
              <span>{course?.duration} Weeks</span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>
                {formatCurrency(course?.fee)}
              </p>
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
            linkHref={`/course/${course?.title}`}
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
