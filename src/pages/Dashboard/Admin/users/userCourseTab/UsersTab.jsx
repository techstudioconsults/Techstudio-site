import React from 'react'
import PropTypes from 'prop-types'
import style from './usersTab.module.scss'
// import Feedback from '../../../global/feedbacks/Feedback'
import UsersCourseTab from './UsersCourseTab'
import { useDownloadAllTutorsMutation } from '../api/usersApiSlice'

const UserTab = ({ courses }) => {
  const [downloadAllTutors] = useDownloadAllTutorsMutation()
  const handleDownload = async () => {
    await downloadAllTutors().unwrap()
  }

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
                Tutors
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
                Students
              </a>
            </li>
          </div>
          {/* <li className={['nav-item ', style.link, style.lessonLink].join(' ')}> */}
          <div className={`d-flex align-items-center gap-10`}>
            <div>
              <select
                className='form-select'
                aria-label='Default select example'
                defaultValue={`Class Month/ Year`}
              >
                <option value='1'>Class Month/ Year</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
            <div>
              <button
                className='btn btn-outline btn-outline-primary'
                onClick={handleDownload}
                id='download-list'
              >
                Download List
              </button>
            </div>
          </div>
          {/* </li> */}
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
            <UsersCourseTab type={`tutors`} courses={courses} />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='previous'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>
            <UsersCourseTab type={`students`} courses={courses} />
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

UserTab.propTypes = {
  isTDB: PropTypes.bool,
  courses: PropTypes.array,
}

export default UserTab
