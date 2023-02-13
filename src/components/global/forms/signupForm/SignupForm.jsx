import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import style from './signupForm.module.scss'
import axios from 'axios'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = (data) => {
    console.log(data)
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, data)
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
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
            {...register('firstName', validation)}
          />
          <ErrorMessage
            errors={errors}
            name='firstName'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className='fs-xs text-danger' key={type}>
                      {message}
                    </p>
                  ))
                : null
            }}
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
            {...register('lastName', validation)}
          />
          <ErrorMessage
            errors={errors}
            name='lastName'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className='fs-xs text-danger' key={type}>
                      {message}
                    </p>
                  ))
                : null
            }}
          />
        </div>
      </div>

      <div className={style.row}>
        <div>
          <label htmlFor='subject' className='form-label'>
            Time Schedule
          </label>
          <select
            id='subject'
            {...register('schedule')}
            className={[`form-select`, style.select].join(' ')}
          >
            <option>Weekday Classes</option>
            <option>Weekend Classes</option>
          </select>
        </div>
        <div>
          <label htmlFor='course' className='form-label'>
            Courses
          </label>
          <select
            id='course'
            {...register('course')}
            className={[`form-select`, style.select].join(' ')}
          >
            <option>Mobile Development</option>
            <option>Fullstack Development</option>
            <option>Frontend Development</option>
            <option>UI/UX Development</option>
            <option>Data science</option>
          </select>
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
            {...register('phoneNumber', validation)}
          />
          <ErrorMessage
            errors={errors}
            name='phoneNumber'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className='fs-xs text-danger' key={type}>
                      {message}
                    </p>
                  ))
                : null
            }}
          />
        </div>

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
            {...register('email', validation)}
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className='fs-xs text-danger' key={type}>
                      {message}
                    </p>
                  ))
                : null
            }}
          />
        </div>
      </div>

      <div className={style.secondRow}>
        <div className='form-check d-flex align-items-center gap-2'>
          <input
            {...register('newsletter')}
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
