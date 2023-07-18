/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TutorLessonCard from '../../card/TutorLessonCard'

import style from '../classTab/tutorClassTab.module.scss'

const TutorLessonTab = ({ classes, lessons, isTDB }) => {
  return (
    <section className={style.tab}>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
        <div className={['nav', style.tabList].join(' ')}>
          <div id={`classTab`} className={`${style.tablistGroup}`}>
            <li className={['nav-item', style.link].join(' ')}>
              <a
                className={['nav-link active', style.a].join(' ')}
                id='ongoing-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                // onClick={() => setLesson(false)}
              >
                UPCOMING
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
            <div>
              <Link
                to={`/tutor/classes/1/class`}
                className={[style.a].join(' ')}
                id='view-lesson-tab'
              >
                Go Back To Classes
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
            <TutorLessonCard />
            <TutorLessonCard />
            <TutorLessonCard />
            <TutorLessonCard />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='previous'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>
            <TutorLessonCard />
            <TutorLessonCard />
            {/* {isLesson ? previousLessons : previousClasses} */}
          </div>
        </div>
      </div>
    </section>
  )
}

TutorLessonTab.propTypes = {
  isTDB: PropTypes.bool,
  classes: PropTypes.object,
  lessons: PropTypes.object,
}

export default TutorLessonTab
