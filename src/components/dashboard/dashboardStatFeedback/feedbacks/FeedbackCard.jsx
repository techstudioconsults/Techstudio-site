import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import style from './feedback.module.scss'
import img from '../../../../assets/icons/avatar.png'
import { useCallback } from 'react'
import { useGetClassByCourseIDMutation } from '../../../../pages/Dashboard/Admin/classes/api/classApiSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectClasses } from '../../../../pages/Dashboard/Admin/classes/api/classSlice'
import SpinnerComponent from '../../../global/skeletonLoader/SpinnerComponent'

const FeedbackCard = ({ title }) => {
  let { courseID } = useParams()
  const [getClassByCourseID, classByIDArgs] = useGetClassByCourseIDMutation()
  const classes = useSelector(selectClasses)

  const getClasses = useCallback(async () => {
    if (courseID) {
      await getClassByCourseID(courseID).unwrap()
    }
  }, [courseID, getClassByCourseID])

  useEffect(() => {
    getClasses()
  }, [courseID, getClasses])
  return (
    <section className={style.feedbackCard}>
      <header className={style.header}>
        <h5>{title}</h5>
        <Link hidden={!classes?.ongoing?.length} to={`/admin/classes`}>
          View All
        </Link>
      </header>
      {classByIDArgs.isLoading ? (
        <SpinnerComponent />
      ) : classes?.ongoing?.length ? (
        <>
          <div className={style.body}>
            <div className={style.imgWrapper}>
              <img src={img} alt='img' className='cc-img-fluid' />
            </div>
            <div className={style.message}>
              <p>{classes?.ongoing?.[0]?.title}</p>
              <div className='d-flex gap-5'>
                <p className={style.date}>
                  {classes?.ongoing?.[0]?.preference}
                </p>
                <p className={style.duration}>week 5</p>
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <p className={style.name}>
              {classes?.ongoing?.[0].tutors?.[0]?.name}
            </p>
          </div>
        </>
      ) : (
        <h5 className='text-danger fw-semibold fs-xs text-center'>
          There Are No Current Class At The Moment
        </h5>
      )}
    </section>
  )
}

FeedbackCard.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}

export default FeedbackCard
