import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import style from '../signupForm/signupForm.module.scss'

const EmployerForm = ({ showTopInputs }) => {
  return (
    <form className={[style.form, style.employerForm].join(' ')}>
      <div
        className={[
          style.name,
          'input-group mb-3',
          showTopInputs ? `d-flex` : `d-none`,
        ].join(' ')}
      >
        <input
          type='text'
          id='name'
          className='form-control'
          aria-describedby='roleHelpBlock'
          placeholder='Your name'
        />
      </div>
      <div
        className={[
          style.companyName,
          'input-group mb-3',
          showTopInputs ? `d-flex` : `d-none`,
        ].join(' ')}
      >
        <input
          type='text'
          id='company-name'
          className='form-control'
          aria-describedby='roleHelpBlock'
          placeholder='Company Name'
        />
      </div>
      <div className={[style.role, 'input-group mb-3'].join(' ')}>
        <input
          type='text'
          id='role'
          className='form-control'
          aria-describedby='roleHelpBlock'
          placeholder='What role are you trying to fill?'
        />
      </div>
      <div className={style.email}>
        <input
          type='email'
          id='email'
          className='form-control'
          aria-describedby='emailHelpBlock'
          placeholder='Company Email'
        />
      </div>

      <div className={style.btnContainer}>
        <Link to={`/employers/detailedform`}>
          <button>Get Started</button>
        </Link>
      </div>
    </form>
  )
}

EmployerForm.propTypes = {
  showTopInputs: PropTypes.bool,
}

export default EmployerForm
