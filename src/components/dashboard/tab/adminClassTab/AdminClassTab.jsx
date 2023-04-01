import React, { useState } from 'react'
import PropTypes from 'prop-types'
import style from '../classesTab/classesTab.module.scss'
import AdminClassDisplayCard from '../../../global/cards/adminClassDisplayCard/AdminClassDisplayCard'
import { Icon } from '@iconify/react'
import LessonCard from '../../../global/cards/lessonCards/LessonCard'
import { Link } from 'react-router-dom'

const ClassesTab = ({ classes, lessons, isTDB }) => {
  const [isLesson, setLesson] = useState(false)
  let onGoingClasses
  let previousClasses
  let ongoingLessons
  let previousLessons

  const toggleLesson = () => {
    setLesson((prevState) => {
      return !prevState
    })
  }

  if (isLesson) {
    ongoingLessons = lessons?.ongoing?.map((singleLesson) => {
      return <LessonCard key={singleLesson.id} singleLesson={singleLesson} />
    })
    previousLessons = lessons?.previous?.map((singleLesson) => {
      return <LessonCard key={singleLesson.id} singleLesson={singleLesson} />
    })
  } else {
    onGoingClasses = classes?.ongoing?.map((singleClass) => {
      return (
        <AdminClassDisplayCard key={singleClass.id} singleClass={singleClass} />
      )
    })
    previousClasses = classes?.previous?.map((singleClass) => {
      return (
        <AdminClassDisplayCard key={singleClass.id} singleClass={singleClass} />
      )
    })
  }

  return (
    <section className={style.tab}>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
        <div className={['nav', style.tabList].join(' ')}>
          <div className={`${style.tablistGroup}`}>
            <li className={['nav-item', style.link].join(' ')}>
              <a
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
                className={['nav-link', style.lessonBtn, style.a].join(' ')}
                id='ongoing-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                onClick={toggleLesson}
              >
                LESSONS
              </a>
              <Link
                to={`/admin/class/lesson/create`}
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
        {/* <div
          className='tab-pane fade'
          id='lesson'
          role='tabpanel'
          aria-labelledby='lesson-tab'
        >
          <div className={style.listWrapper}>
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
          </div>
        </div> */}
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
