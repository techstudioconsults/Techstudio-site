import React from 'react'
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
            <optgroup>
              <option>Weekday Classes</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className={style.secondRow}>
        <div className={style.email}>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <input
            type='number'
            id='email'
            className='form-control'
            aria-describedby='emailHelpBlock'
            placeholder='example@example.com'
          />
        </div>
        <div className={style.paswword}>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='form-control'
            aria-describedby='emailHelpBlock'
            placeholder='Password'
          />
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='newsletter'
          />
          <label className='form-check-label' htmlFor='newsletter'>
            Send me alerts and Weekly Newsletters
          </label>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>Send Message</button>
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
