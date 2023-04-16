import React from 'react'
import style from './registrationFormTab.module.scss'
// import '../../../../../components/dashboard/resources/custom.css'
import PropTypes from 'prop-types'
import StudentRegistrationForm from '../StudentRegistrationForm'
import TutorRegistrationForm from '../TutorRegistrationForm'
import AdminRegistrationForm from '../AdminRegistrationForm'

const UserRegistrationFormTab = () => {
  return (
    <section className={style.UserRegistrationFormTab}>
      <ul className={['nav', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link active', style.a].join(' ')}
            data-bs-toggle='tab'
            href='#student'
            id={1}
          >
            STUDENT
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            data-bs-toggle='tab'
            href='#tutor'
            id={2}
          >
            TUTOR
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            data-bs-toggle='tab'
            href='#admin'
            id={3}
          >
            ADMIN
          </a>
        </li>
      </ul>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='student'
          aria-labelledby='home-tab'
        >
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            <StudentRegistrationForm />
          </div>
        </div>
        <div className='tab-pane fade' id='tutor' aria-labelledby='about-tab'>
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            <TutorRegistrationForm />
          </div>
        </div>
        <div className='tab-pane fade' id='admin' aria-labelledby='album-tab'>
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            <AdminRegistrationForm />
          </div>
        </div>
      </div>
    </section>
  )
}

UserRegistrationFormTab.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default UserRegistrationFormTab
