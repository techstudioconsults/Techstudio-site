import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './feedback.module.scss'
import img from '../../../../assets/icons/avatar.png'

const FeedbackCard = ({ title, message }) => {
  return (
    <section className={style.feedbackCard}>
      <header className={style.header}>
        <h5>{title}</h5>
        <Link>View All</Link>
      </header>
      <div className={style.body}>
        <div className={style.imgWrapper}>
          <img src={img} alt='img' className='cc-img-fluid' />
        </div>
        <div className={style.message}>
          <p>{message}</p>
          <div className='d-flex gap-5'>
            <p className={style.date}>(weekday)</p>
            <p className={style.duration}>week 5</p>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <p className={style.name}>Sorunke Sherif</p>
      </div>
    </section>
  )
}

FeedbackCard.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}

export default FeedbackCard
