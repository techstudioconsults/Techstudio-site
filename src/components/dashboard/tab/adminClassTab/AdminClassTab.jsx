import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import style from '../classesTab/classesTab.module.scss'
import AdminClassDisplayCard from '../../../global/cards/adminClassDisplayCard/AdminClassDisplayCard'
import LessonCard from '../../../global/cards/lessonCards/LessonCard'
import { Link, useLocation, useParams } from 'react-router-dom'
import Feedback from '../../../global/feedbacks/Feedback'
import { Icon } from '@iconify/react'

const ClassesTab = ({ classes, lessons, isTDB }) => {
  const onGoingTabRef = useRef(null)
  const lessonTabRef = useRef(null)
  const [isLesson, setLesson] = useState(false)
  const { courseID } = useParams()
  const location = useLocation()
  let onGoingClasses
  let previousClasses
  let ongoingLessons
  let previousLessons

  const toggleLesson = () => {
    try {
      onGoingTabRef.current.click()
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
      <Feedback message={`You have zero ongoing lessons at the moment !`} />
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
      <Feedback message={`you have zero ongoing classes at the moment`} />
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
      <Feedback message={`You have zero previous classes at the moment`} />
    )
  }

  useEffect(() => {
    console.log(location)
    if (location?.state?.from?.includes(`lesson`)) {
      lessonTabRef.current.click()
    }
  }, [location])

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
                className={['nav-link', style.a].join(' ')}
                id='lesson-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                onClick={toggleLesson}
              >
                View Lesson
              </a>
            </div>
            <div className={`d-flex ${isLesson ? `d-block` : `d-none`}`}>
              <a
                ref={lessonTabRef}
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
