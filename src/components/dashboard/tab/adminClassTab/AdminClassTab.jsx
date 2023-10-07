/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import AdminClassDisplayCard from '../../../global/cards/adminClassDisplayCard/AdminClassDisplayCard'
import LessonCard from '../../../global/cards/lessonCards/LessonCard'
import Feedback from '../../../global/feedbacks/Feedback'

import style from '../classesTab/classesTab.module.scss'

const ClassesTab = ({ classes, lessons, isTDB }) => {
  const location = useLocation()
  const onGoingTabRef = useRef(null)
  const lessonTabRef = useRef(null)
  const [isLesson, setLesson] = useState(false)
  const { courseID } = useParams()
  const dispatch = useDispatch()

  let onGoingClasses
  let previousClasses
  let ongoingLessons
  let previousLessons

  const toggleLesson = () => {
    try {
      onGoingTabRef.current.click()
      dispatch({ type: 'app/setClassDetailOpen', payload: true })
      setLesson((prevState) => {
        return !prevState
      })
    } catch (err) {
      console.log(err)
    }
  }

  if (isLesson) {
    ongoingLessons = lessons?.ongoing?.length ? (
      lessons?.ongoing?.map((singleLesson) => {
        return <LessonCard key={singleLesson.id} singleLesson={singleLesson} />
      })
    ) : (
      <Feedback
        route={`/admin/class/${courseID}/lesson/create`}
        btnName={`Create Lesson`}
        message={`No Lesson Found.`}
      />
    )
    previousLessons = lessons?.previous?.length ? (
      lessons?.previous?.map((singleLesson) => {
        return <LessonCard key={singleLesson.id} singleLesson={singleLesson} />
      })
    ) : (
      <Feedback message={`You have zero previous lessons a the moment`} />
    )
  } else {
    onGoingClasses = classes?.ongoing?.length ? (
      classes?.ongoing?.map((singleClass) => {
        return (
          <AdminClassDisplayCard
            key={singleClass.id}
            singleClass={singleClass}
          />
        )
      })
    ) : (
      <Feedback
        route={`/admin/class/${courseID}/create`}
        btnName={`Create Class`}
        message={`No Class has been created yet!`}
      />
    )

    previousClasses = classes?.previous?.length ? (
      classes?.previous?.map((singleClass) => {
        return (
          <AdminClassDisplayCard
            isPrevious
            key={singleClass.id}
            singleClass={singleClass}
          />
        )
      })
    ) : (
      <Feedback
        btnName={`Create Class`}
        message={`No Class has been created yet!`}
      />
    )
  }

  useEffect(() => {
    if (location.state === `lesson`) {
      lessonTabRef.current.click()
    }
  }, [location.state])

  return (
    <section className={style.tab}>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
        <div className={['nav', style.tabList].join(' ')}>
          <div id={`classTab`} className={`${style.tablistGroup}`}>
            <li className={['nav-item', style.link].join(' ')}>
              <a
                ref={onGoingTabRef}
                className={['nav-link active', style.a].join(' ')}
                id='ongoing-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                // onClick={() => setLesson(false)}
              >
                ONGOING
              </a>
            </li>
            <li className={['nav-item', style.link].join(' ')}>
              <a
                className={['nav-link', style.a].join(' ')}
                id='previous-tab'
                data-bs-toggle='tab'
                href='#previous'
                // onClick={() => setLesson(false)}
              >
                PREVIOUS
              </a>
            </li>
          </div>
          <li className={['nav-item ', style.link, style.lessonLink].join(' ')}>
            <div className={`${!isLesson ? `d-block` : `d-none`}`}>
              <a
                ref={lessonTabRef}
                hidden={!classes?.ongoing?.length}
                className={['nav-link', style.a].join(' ')}
                id='view-lesson-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                onClick={toggleLesson}
              >
                View Lesson
              </a>
            </div>
            <div className={`d-flex ${isLesson ? `d-block` : `d-none`}`}>
              <a
                className={['nav-link', style.lessonBtn, style.a].join(' ')}
                id='lesson-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                onClick={toggleLesson}
              >
                LESSONS
              </a>
              <Link
                to={`/admin/class/${courseID}/lesson/create`}
                className={['nav-link', style.a].join(' ')}
                id='lesson-tab'
              >
                <span>
                  <Icon icon={`ic:baseline-add-circle-outline`} />
                </span>
                <span> New Lesson</span>
              </Link>
            </div>
          </li>
        </div>
      </div>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='ongoing'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className={style.listWrapper}>
            {isLesson ? ongoingLessons : onGoingClasses}
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='previous'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>
            {isLesson ? previousLessons : previousClasses}
          </div>
        </div>
      </div>
    </section>
  )
}

ClassesTab.propTypes = {
  isTDB: PropTypes.bool,
  classes: PropTypes.object,
  lessons: PropTypes.object,
}

export default ClassesTab
