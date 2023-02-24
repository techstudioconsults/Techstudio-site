/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from '../signupForm/signupForm.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
// RTK
import { useForgotPasswordMutation } from '../../../../pages/Auth/api/authApiSlice.js'
import ToastComponent from '../../toast/ToastComponent'
import useToast from '../../../../hooks/useToast'
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
  // state
  const [isOldShow, setOldShow] = useState(false)
  const [isNewShow, setNewShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  // mutations
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  // hooks
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
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await forgotPassword(data).unwrap()
      console.log(res)
      res.success ? modal.show() : null
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

  const toggleOldPasswordView = (e) => {
    e.stopPropagation()
    setOldShow((prevState) => {
      return !prevState
    })
  }

  const toggleNewPasswordView = (e) => {
    e.stopPropagation()
    setNewShow((prevState) => {
      return !prevState
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
      <Portal wrapperId='react-portal-modal-container'>
        <Feedback
          content={{
            title: `Password changed successfully`,
            desc: null,
          }}
        />
      </Portal>
      <div className={style.secondRow}>
        <div>
          <div className={[style.password, 'input-group mb-3'].join(' ')}>
            <input
              type={isOldShow ? `text` : `password`}
              id='oldPassword'
              className='form-control'
              aria-describedby='oldPasswordHelpblock'
              placeholder='Old Password'
              {...register('oldPassword', validation)}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              onClick={toggleOldPasswordView}
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              {isOldShow ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name='oldPassword'
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
          <div className={[style.password, 'input-group mb-3'].join(' ')}>
            <input
              type={isNewShow ? `text` : `password`}
              id='newPassword'
              className='form-control'
              aria-describedby='newPasswordHelpblock'
              placeholder='New Password'
              {...register('newPassword', validation)}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              onClick={toggleNewPasswordView}
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              {isNewShow ? <FaEyeSlash /> : <FaEye />}
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
      </div>
      <div className={style.btnContainer}>
        <button
          className={[style.noiseImage, isLoading ? style.gradient : null].join(
            ' '
          )}
          type='submit'
        >
          <div
            hidden={!isLoading}
            className='spinner-border spinner-border-sm me-5 text-white'
            role='status'
          />
          {isLoading ? `Changing password...` : `Change password`}
        </button>
        <ToastComponent errorMessage={errorMessage} />
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
