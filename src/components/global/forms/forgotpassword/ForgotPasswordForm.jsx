/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'

import useToast from '../../../../hooks/useToast'
// RTK
import { useGetOTPMutation } from '../../../../pages/Auth/api/authApiSlice.js'
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
  const [message, setMessage] = useState(null)
  const [getOTP, OTPArgs] = useGetOTPMutation()
  const { toast } = useToast()
  const navigate = useNavigate()

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
    try {
      const res = await getOTP(data).unwrap()
      console.log(res)
      if (res.success) {
        setMessage(`Check ${data.email} for OTP`)
        setTimeout(() => {
          navigate(`/verify-otp`, { state: { email: data.email } })
        }, 3000)
        toast.show()
      }
    } catch (err) {
      setMessage(err.data.message)
      toast.show()
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
      <div>
        <div>
          <div className={[style.password, 'input-group mb-3'].join(' ')}>
            <input
              type={`email`}
              id='email'
              className='form-control'
              aria-describedby='email'
              placeholder='enter your email address'
              {...register('email', validation)}
            />
          </div>
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
      <div className={style.btnContainer}>
        <button type='submit'>
          <div
            hidden={!OTPArgs.isLoading}
            className='spinner-border spinner-border-sm me-5 text-white'
            role='status'
          />
          {OTPArgs.isLoading ? `Sending OTP...` : `Send OTP`}
        </button>
        <ToastComponent bgColor='green' errorMessage={message} />
      </div>
      <footer className={style.caption}>
        <p className={style.footerLink}>
          Have an account?{' '}
          <Link to={`/login`} className={style.signupLink}>
            Sign in here
          </Link>
        </p>
      </footer>
    </form>
  )
}

export default ContactForm
