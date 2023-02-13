import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from '../signupForm/signupForm.module.scss'
import axios from 'axios'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'

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
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, data)
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
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
        <div>
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
              {...register('password', validation)}
            />
            <span
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              <FaEye />
              {/* <FaEyeSlash /> */}
            </span>
          </div>
          <ErrorMessage
            errors={errors}
            name='password'
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
        <div className='d-flex justify-content-between align-items-center'>
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
              Remember me
            </label>
          </div>
          <p className={style.forgotpassword}>Forgot Password?</p>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>Login</button>
      </div>
      <footer className={style.caption}>
        <p className={style.footerLink}>
          Don’t have an account yet?{' '}
          <Link to={`/signup`} className={style.signupLink}>
            Sign up here
          </Link>
        </p>
      </footer>
    </form>
  )
}

export default ContactForm
