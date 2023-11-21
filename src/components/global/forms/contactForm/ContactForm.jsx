import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

import { SCALE_ANIMATION } from '../../../../gsap'
import Gsap from '../../../../hooks/Gsap'
import useToast from '../../../../hooks/useToast'
import { useContactUsMutation } from '../../../../pages/Auth/api/authApiSlice'
import ContactUsFeedback from '../../../../pages/Externals/ContactUs/sections/ContactSection3/ContactSection3'
import Portal from '../../POTAL/Portal'
import ToastComponent from '../../toast/ToastComponent'

import style from './contactForm.module.scss'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  const [contactUs, { isLoading }] = useContactUsMutation()
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    console.log(data)
    let modal
    try {
      modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('contactUsfeedback'))
      const res = await contactUs(data).unwrap()
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
  // const onSubmit = async (data) => {
  //   console.log(data)
  //   let modal
  //   try {
  //     modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('contactUsfeedback'))
  //     const res = await contactUs(data).unwrap()
  //     console.log(res)
  //     res.success ? modal.show() : null
  //   } catch (err) {
  //     setErrorMessage(err.data.message)
  //     toast.show()
  //   }
  // }
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [isSubmitSuccessful, reset])

  return (
    // <Gsap animationFuncion={() => SCALE_ANIMATION(`form`)}>
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form, `cc-shadow form`].join(' ')}>
      <Portal wrapperId='react-portal-modal-container'>
        <ContactUsFeedback />
      </Portal>
      <div>
        <label htmlFor='fullName' className='form-label fw-semibold d-flex'>
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          className='form-control text-dark'
          aria-describedby='passwordHelpBlock'
          placeholder='Full name'
          {...register('fullName', validation)}
        />
        <ErrorMessage
          errors={errors}
          name='fullName'
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className=' text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>
      <div>
        <label htmlFor='email' className='form-label fw-semibold d-flex'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          className='form-control text-dark'
          aria-describedby='passwordHelpBlock'
          placeholder='example@example.com'
          {...register('email', validation)}
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className='text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>
      <div>
        <label htmlFor='email' className='form-label fw-semibold d-flex'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          className='form-control text-dark'
          aria-describedby='passwordHelpBlock'
          placeholder='subject title'
          // {...register('subject', validation)}
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className='text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>
      {/* <div>
        <label htmlFor='subject' className='form-label fw-semibold d-flex'>
          Subject
        </label>
        <select
          id='subject'
          className={[`form-select`, style.select].join(' ')}
        >
          <option>Training programs</option>
        </select>
      </div> */}
      <div className={style.textArea}>
        <label htmlFor='message' className='form-label fw-semibold d-flex'>
          Message or Questions
        </label>
        <textarea
          className='form-control text-dark'
          id='message'
          rows='3'
          placeholder='Type your message, questions or inquiries here'
          {...register('message', validation)}
        ></textarea>
        <ErrorMessage
          errors={errors}
          name='message'
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className='text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>

      <div className={style.btnContainer}>
        <button type='submit' data-toggle='modal' data-target='#ContactFeedback'>
          <div hidden={!isLoading} className='spinner-border spinner-border-sm me-5 text-white' role='status' />
          {isLoading ? `Please wait...` : `Send Message`}
        </button>
        <ToastComponent errorMessage={errorMessage} />
      </div>
    </form>
    // </Gsap>
  )
}

export default ContactForm
