import { ErrorMessage } from '@hookform/error-message'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useToast from '../../../../hooks/useToast'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useContactUsMutation } from '../../../../pages/Auth/api/authApiSlice'
import style from './contactForm.module.scss'
import ToastComponent from '../../toast/ToastComponent'
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
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={[style.form, `cc-shadow`].join(' ')}
    >
      <Portal wrapperId='react-portal-modal-container'>
        <Feedback
          content={{
            title: `Message sent successfully`,
            desc: ` Your message has been received and our Customer Care
                Representative will contact you shortly.`,
          }}
        />
      </Portal>
      <div>
        <label htmlFor='fullName' className='form-label fw-semibold'>
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          className='form-control'
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
                  <p className='fs-xs text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>
      <div>
        <label htmlFor='email' className='form-label fw-semibold'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          className='form-control'
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
                  <p className='fs-xs text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>
      <div>
        <label htmlFor='email' className='form-label fw-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          className='form-control'
          aria-describedby='passwordHelpBlock'
          placeholder='subject title'
          {...register('subject', validation)}
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
      {/* <div>
        <label htmlFor='subject' className='form-label fw-semibold'>
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
        <label htmlFor='message' className='form-label fw-semibold'>
          Message or Questions
        </label>
        <textarea
          className='form-control'
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
                  <p className='fs-xs text-danger' key={type}>
                    {message}
                  </p>
                ))
              : null
          }}
        />
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>
          <div
            hidden={!isLoading}
            className='spinner-border spinner-border-sm me-5 text-white'
            role='status'
          />
          {isLoading ? `Please wait...` : `Send Message`}
        </button>
        <ToastComponent errorMessage={errorMessage} />
      </div>
    </form>
  )
}

export default ContactForm
