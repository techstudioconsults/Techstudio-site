/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import style from '../signupForm/signupForm.module.scss'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
// RTK
import { useLoginMutation } from '../../../../pages/Auth/api/authApiSlice.js'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../../../pages/Auth/api/authSlice'
import usePersist from '../../../../hooks/usePersist'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  // state
  const [isShow, setShow] = useState(false)
  const [persist, setPersist] = usePersist()

  // mutations
  const [login, { isLoading }] = useLoginMutation()

  // actions
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap()
      res.success
        ? dispatch(setCredentials({ accessToken: res.data.accessToken }))
        : null
      navigate('/admin/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  const togglePasswordView = (e) => {
    e.stopPropagation()
    setShow((prevState) => {
      return !prevState
    })
  }
  const handleToggle = () => {
    setPersist((prev) => !prev)
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
              type={isShow ? `text` : `password`}
              id='password'
              className='form-control'
              aria-describedby='passwordHelpBlock'
              placeholder='Password'
              {...register('password', validation)}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              onClick={togglePasswordView}
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              {isShow ? <FaEyeSlash /> : <FaEye />}
            </div>
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
              id='remember-me'
              onChange={handleToggle}
              checked={persist}
            />
            <label
              className={['form-check-label', style.checkboxLabel].join(' ')}
              htmlFor='remember-me'
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
