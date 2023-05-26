import React from 'react'
import PropTypes from 'prop-types'
import style from './introCard.module.scss'
import clock from '../../../../assets/icons/clock.png'
import calendar from '../../../../assets/icons/calendar.png'
import Button from '../../Button'

const IntroCard = ({ course }) => {
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
            <span>{course.time}</span>
          </div>
          <div className={style.date}>
            <span className={style.icon}>
              <img src={clock} alt='clock' />
            </span>
            <span>{course.date}</span>
          </div>
        </div>
        <div className={style.priceButton}>
          <h5 className={style.price}>{course.price}</h5>
          <Button
            width={`10`}
            linkText='View Full Details'
            linkHref='/payment'
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
