import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import style from '../signupForm/signupForm.module.scss'
import Feedback from '../../modals/Feedback'
import Portal from '../../POTAL/Portal'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useRegisterAdminMutation } from '../../../../pages/Auth/api/authApiSlice'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  const [registerAdmin, { isLoading }] = useRegisterAdminMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    console.log(data)
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await registerAdmin(data).unwrap()
      console.log(res)
      res.success ? modal.show() : null
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
      <Portal wrapperId='react-portal-modal-container'>
        <Feedback
          content={{
            title: `Registration Successfull!`,
            desc: ` Your details have been received and our Customer Care
                Representative will contact you shortly.`,
          }}
        />
      </Portal>
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
            {...register('password', validation)}
          />
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
          {isLoading ? `Chill, let me get the keys...` : `Sign up`}
        </button>
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
  )
}

export default ContactForm
