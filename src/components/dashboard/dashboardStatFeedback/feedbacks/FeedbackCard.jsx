import React from 'react'
import { Link } from 'react-router-dom'
import style from './feedback.module.scss'
import img from '../../../../assets/icons/avatar.png'

const FeedbackCard = () => {
  return (
    <section className={style.feedbackCard}>
      <header className={style.header}>
        <h5>Tutor’s Feedbacks</h5>
        <Link>View All</Link>
      </header>
      <div className={style.body}>
        <div className={style.imgWrapper}>
          <img src={img} alt='img' className='cc-img-fluid' />
        </div>
        <div className={style.message}>
          <p>
            I am so glad to hear plenty of answers from you during class. Keep
            doing great!
          </p>
        </div>
      </div>
      <div className={style.footer}>
        <p className={style.name}>Sorunke Sherif</p>
        <p className={style.date}>May 3, 2021</p>
      </div>
    </section>
  )
}

export default FeedbackCard
