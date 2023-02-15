import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from '../signupForm/signupForm.module.scss'
import axios from 'axios'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useState } from 'react'
import Portal from '../../POTAL/Portal'
import Feedback from '../../modals/Feedback'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  const [isShow, setShow] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = (data) => {
    setLoading(true)
    console.log(data)
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('feedback')
    )
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, data)
      .then((data) => {
        setLoading(false)
        console.log(data)
        modal.show()
      })
  }

  const togglePasswordView = () => {
    setShow((prevState) => {
      return !prevState
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
      <Portal wrapperId='react-portal-modal-container'>
        <Feedback />
      </Portal>
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
              type={isShow ? `text` : `password`}
              id='password'
              className='form-control'
              aria-describedby='passwordHelpBlock'
              placeholder='Password'
              {...register('password', validation)}
            />
            <button
              onClick={togglePasswordView}
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              {isShow ? <FaEyeSlash /> : <FaEye />}
            </button>
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
        <button
          className={[style.noiseImage, isLoading ? style.gradient : null].join(
            ' '
          )}
          type='submit'
        >
          {isLoading ? `Chill, let me get the door...` : `Login`}
        </button>
      </div>
      <footer className={style.caption}>
        <p className={style.footerLink}>
          Don’t have an account yet?{' '}
          <Link to={`/register`} className={style.signupLink}>
            Sign up here
          </Link>
        </p>
      </footer>
    </form>
  )
}

export default ContactForm
