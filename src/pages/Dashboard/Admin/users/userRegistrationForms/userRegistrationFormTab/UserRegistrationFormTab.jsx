import React from 'react'
// import '../../../../../components/dashboard/resources/custom.css'
import PropTypes from 'prop-types'

import AdminRegistrationForm from '../AdminRegistrationForm'
import StudentRegistrationForm from '../StudentRegistrationForm'
import TutorRegistrationForm from '../TutorRegistrationForm'

import style from './registrationFormTab.module.scss'

const UserRegistrationFormTab = ({ cancelBtn }) => {
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
            <StudentRegistrationForm cancelBtn={cancelBtn} />
          </div>
        </div>
        <div className='tab-pane fade' id='tutor' aria-labelledby='about-tab'>
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            <TutorRegistrationForm cancelBtn={cancelBtn} />
          </div>
        </div>
        <div className='tab-pane fade' id='admin' aria-labelledby='album-tab'>
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            <AdminRegistrationForm cancelBtn={cancelBtn} />
          </div>
        </div>
      </div>
    </section>
  )
}

UserRegistrationFormTab.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
  cancelBtn: PropTypes.node,
}

export default UserRegistrationFormTab
