/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import { Icon } from '@iconify/react'
import axios from 'axios'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

import useToast from '../../../../hooks/useToast'
import { Authlayout } from '../../../../layout'
import Feedback from '../../modals/Feedback'
import Portal from '../../POTAL/Portal'
import ToastComponent from '../../toast/ToastComponent'

import style from '../signupForm/signupForm.module.scss'

const baseUrl = import.meta.env.VITE_BASE_URL

const validation = {
  required: 'input your new password',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ChangePassword = () => {
  // state
  const [isOldShow, setOldShow] = useState(false)
  const [isNewShow, setNewShow] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()
  const navigate = useNavigate()

  const token = location.pathname.split(`/`)[2]
  console.log(token, baseUrl)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      //   'Content-Type': 'multipart/form-data',
    },
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  })

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

  const onSubmit = async (data) => {
    console.log(data)
    setLoading(true)
    if (data.password === data.confirmPassword) {
      try {
        let modal = bootstrap.Modal.getOrCreateInstance(
          document.getElementById('feedback')
        )

        const res = await axios.patch(
          `${baseUrl}/auth/set-password`,
          data,
          credentials
        )

        if (res.status === 200) {
          setLoading(false)
          navigate(`/login`)
          modal.show()
        }
      } catch (err) {
        setLoading(false)
        setErrorMessage(err.response.data.message)
        toast.show()
      }
    } else {
      setLoading(false)
      setErrorMessage(`confirm Password must be the same as new Password`)
      toast.show()
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <Authlayout>
      <section
        className={[style.signup, `cc-shadow p-5 border border-top`].join(' ')}
      >
        <div className={[style.header, `mb-5`].join(' ')}>
          <h4 className='text-blue fw-bolder mb-3'>Change Password</h4>
          <p className={style.subTitle}>
            Fill in the form below to reset password
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={[style.form].join(' ')}
        >
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
                  id='password'
                  className='form-control'
                  aria-describedby='oldPasswordHelpblock'
                  placeholder='new password'
                  {...register('password', validation)}
                />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                <div
                  onClick={toggleOldPasswordView}
                  className={['input-group-text', style.showPassword].join(' ')}
                  id='passwordHelpBlock'
                >
                  {isOldShow ? (
                    <Icon icon={`ph:eye-slash-thin`} />
                  ) : (
                    <Icon icon={`ph:eye`} />
                  )}
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
            <div>
              <div className={[style.password, 'input-group mb-3'].join(' ')}>
                <input
                  type={isNewShow ? `text` : `password`}
                  id='confirmPassword'
                  className='form-control'
                  aria-describedby='newPasswordHelpblock'
                  placeholder='Confirm new password'
                  {...register('confirmPassword', validation)}
                />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                <div
                  onClick={toggleNewPasswordView}
                  className={['input-group-text', style.showPassword].join(' ')}
                  id='passwordHelpBlock'
                >
                  {isNewShow ? (
                    <Icon icon={`ph:eye-slash-thin`} />
                  ) : (
                    <Icon icon={`ph:eye`} />
                  )}
                </div>
              </div>
              <ErrorMessage
                errors={errors}
                name='confirmPassword'
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
              Do you have an account already?{' '}
              <Link to={`/login`} className={style.signupLink}>
                Sign in here
              </Link>
            </p>
          </footer>
        </form>
      </section>
    </Authlayout>
  )
}

export default ChangePassword
