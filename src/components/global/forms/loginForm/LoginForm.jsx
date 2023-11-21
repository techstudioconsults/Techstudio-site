/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import { Icon } from '@iconify/react'
import axios from 'axios'

import useToast from '../../../../hooks/useToast'
// RTK
import { useLoginMutation } from '../../../../pages/Auth/api/authApiSlice.js'
import ToastComponent from '../../toast/ToastComponent'

import style from '../signupForm/signupForm.module.scss'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  // state
  // const [isLoading, setLoading] = useState(false)
  const [isShow, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  // const dispatch = useDispatch()

  // mutations
  // const [login] = useLoginMutation()
  const [login, { isLoading }] = useLoginMutation()

  // hooks
  // const [persist, setPersist] = usePersist()
  const navigate = useNavigate()
  const { toast } = useToast()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  })

  // restructure this function to use the inbuilt call back action (error, isError)
  const onSubmit = async (data) => {
    // try {
    //   setLoading(true)
    //   const res = await axios.post('https://api.staging.techstudioacademy.com/api/v1/auth/login', data)
    //   if (res.status === 200) {
    //     console.log(res)
    //     dispatch({
    //       type: `auth/setCredentials`,
    //       payload: {
    //         accessToken: res?.data?.data?.accessToken,
    //         refreshToken: res?.data?.data?.refreshToken,
    //       },
    //     })
    //     navigate(`/${res?.data?.data?.role.toLowerCase()}/dashboard`)
    //   }
    // } catch (err) {
    //   setErrorMessage(err?.data?.message)
    //   toast.show()
    // }
    try {
      const res = await login(data).unwrap()
      res.success ? navigate(`/${res.data.role.toLowerCase()}/dashboard`) : null
    } catch (err) {
      setErrorMessage(err.data.message)
      toast.show()
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const togglePasswordView = (e) => {
    e.stopPropagation()
    setShow((prevState) => {
      return !prevState
    })
  }
  // const handleToggle = () => {
  //   setPersist((prev) => !prev)
  // }

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
            <div onClick={togglePasswordView} className={['input-group-text', style.showPassword].join(' ')} id='passwordHelpBlock'>
              {isShow ? <Icon icon={`ph:eye-slash-thin`} /> : <Icon icon={`ph:eye`} />}
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
          {/* <div className='form-check d-flex align-items-center gap-2'>
            <input
              disabled
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
          </div> */}
          <Link to={`/forgot-password`}>
            <p className={style.forgotpassword}>Forgot Password?</p>
          </Link>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>
          <div hidden={!isLoading} className='spinner-border spinner-border-sm me-5 text-white' role='status' />
          {isLoading ? `Please Wait...` : `Login`}
        </button>
        <ToastComponent errorMessage={errorMessage} />
      </div>
      <footer className={style.caption}>
        <p className={style.footerLink}>
          Don’t have an account yet?{' '}
          <Link to={`/student/register`} className={style.signupLink}>
            Sign up here
          </Link>
        </p>
      </footer>
    </form>
  )
}

export default ContactForm
