import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from './signupForm.module.scss'

const ContactForm = () => {
  return (
    <form className={[style.form].join(' ')}>
      <div className={style.row}>
        <div>
          <label htmlFor='firstname' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            id='firstname'
            className='form-control'
            aria-describedby='firstnameHelpBlock'
            placeholder='First Name'
          />
        </div>
        <div>
          <label htmlFor='lastname' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            id='lastname'
            className='form-control'
            aria-describedby='lastnameHelpBlock'
            placeholder='Last Name'
          />
        </div>
      </div>

      <div className={style.row}>
        <div className={style.phoneNumber}>
          <label htmlFor='phone' className='form-label'>
            Your Phone Number
          </label>
          <input
            type='number'
            id='phone'
            className='form-control'
            aria-describedby='phoneHelpBlock'
            placeholder='user type'
          />
        </div>
        <div>
          <label htmlFor='subject' className='form-label'>
            Time Schedule
          </label>
          <select
            id='subject'
            className={[`form-select`, style.select].join(' ')}
          >
            <option>Weekday Classes</option>
          </select>
        </div>
      </div>

      <div className={style.secondRow}>
        <div className={style.email}>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            className='form-control'
            aria-describedby='emailHelpBlock'
            placeholder='example@example.com'
          />
        </div>
        {/* <div>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <div className={[style.password, 'input-group mb-3'].join(' ')}>
            <input
              type='password'
              id='password'
              className='form-control'
              aria-describedby='passwordHelpBlock'
              placeholder='Password'
            />
            <span
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              <FaEye />
            </span>
          </div>
        </div> */}
        {/* <div>
          <label htmlFor='password' className='form-label'>
            confirm Password
          </label>
          <div className={[style.password, 'input-group mb-3'].join(' ')}>
            <input
              type='password'
              id='confirm-password'
              className='form-control'
              aria-describedby='passwordHelpBlock'
              placeholder='confirm password'
            />
            <span
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              <FaEye />
            </span>
          </div>
        </div> */}
        <div className='form-check d-flex align-items-center gap-2'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='newsletter'
          />
          <label
            className={['form-check-label', style.checkboxLabel].join(' ')}
            htmlFor='newsletter'
          >
            Send me alerts and Weekly Newsletters
          </label>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>Register</button>
      </div>
      <footer className={style.caption}>
        <p className={style.footerLink}>
          Do you have an account already?{' '}
          <Link to={`/signin`} className={style.signupLink}>
            Sign in here
          </Link>
        </p>
      </footer>
    </form>
  )
}

export default ContactForm
