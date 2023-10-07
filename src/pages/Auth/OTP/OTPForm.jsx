/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'

import { ToastComponent } from '../../../components'
// RTK
import useToast from '../../../hooks/useToast'
import { useGetOTPMutation, useVerifyOTPMutation } from '../api/authApiSlice'

import style from '../../../components/global/forms/signupForm/signupForm.module.scss'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const OTPForm = ({ email }) => {
  const [message, setMessage] = useState(null)
  const [verifyOTP, verifyOTPArgs] = useVerifyOTPMutation()
  const { toast } = useToast()
  const navigate = useNavigate()

  const defaultValues = {
    email: email,
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    defaultValues,
  })

  // restructure this function to use the inbuilt call back action (error, isError)
  const onSubmit = async (data) => {
    try {
      const res = await verifyOTP(data).unwrap()
      console.log(res)
      if (res.success) {
        setMessage(`${data.email} ${res.data.status}`)
        toast.show()
        setTimeout(() => {
          navigate(`/change-password/${res.data.resetToken}`)
        }, 3000)
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
          <div className={[style.email, 'input-group mb-3'].join(' ')}>
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
        <div>
          <div className={[style.email, 'input-group mb-3'].join(' ')}>
            <input
              type={`number`}
              id='otp'
              className='form-control'
              aria-describedby='otp'
              placeholder='enter OTP'
              {...register('otp', validation)}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name='otp'
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
            hidden={!verifyOTPArgs.isLoading}
            className='spinner-border spinner-border-sm me-5 text-white'
            role='status'
          />
          {verifyOTPArgs.isLoading ? `ongoing verification...` : `Verify OTP`}
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

export default OTPForm
