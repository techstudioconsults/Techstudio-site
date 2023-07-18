/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import Feedback from '../../../../../../components/global/feedbacks/Feedback'
import TutorClassCard from '../../card/TutorClassCard'

import style from './tutorClassTab.module.scss'

const TutorClassTab = ({ classes, lessons, isTDB }) => {
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
            <TutorClassCard />
            <TutorClassCard />
            <TutorClassCard />
            <TutorClassCard />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='previous'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>
            <Feedback />
            <p className='text-center'>
              You don’t have any previous class yet{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

TutorClassTab.propTypes = {
  isTDB: PropTypes.bool,
  classes: PropTypes.object,
  lessons: PropTypes.object,
}

export default TutorClassTab
