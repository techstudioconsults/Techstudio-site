import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

// RTK
import { useRegisterStudentMutation } from '../../../../pages/Auth/api/authApiSlice'
import { selectExternalCourses } from '../../../../pages/Externals/api/externalSlice'
import Feedback from '../../modals/Feedback'
import Portal from '../../POTAL/Portal'

import style from './signupForm.module.scss'

// input validation
const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const ContactForm = () => {
  const [registerStudent, { isLoading }] = useRegisterStudentMutation()
  const upcomingCourses = useSelector(selectExternalCourses)

  // console.log(upcomingCourses)

  const dropdownOption = upcomingCourses.map((course) => {
    return (
      <option key={course.id} value={course.id} title={course.title}>
        {course.title}
      </option>
    )
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    // console.log(data)
    const selectedCourse = upcomingCourses.filter((course) => {
      return course.id === data.course
    })
    // console.log(selectedCourse)
    // console.log('Selected Course ID:', data.course)
    // console.log('Selected Course Title:', selectedCourse[0].title)
    // console.log(data)
    const formData = {
      ...data,
      course: selectedCourse[0]?.title || `Product Design UI/UX`,
      schedule: `Weekday`,
    }
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('feedback'))
      const res = await registerStudent({
        body: formData,
        courseID: selectedCourse[0]?.id,
      }).unwrap()
      // console.log(res)
      res.success ? modal.show() : null
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={[style.form].join(' ')}>
      {/* <p ref={errRef} aria-live='assertive'>
        {errMsg}
      </p> */}
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
            autoComplete='off'
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
            autoComplete='off'
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
        <div>
          <label htmlFor='subject' className='form-label'>
            Time Schedule
          </label>
          <select id='subject' {...register('schedule')} className={[`form-select`, style.select].join(' ')}>
            <option>Weekday Classes</option>
            <option>Weekend Classes</option>
          </select>
        </div>
        <div>
          <label htmlFor='course' className='form-label'>
            Courses
          </label>
          <select id='course' {...register('course')} className={[`form-select`, style.select].join(' ')}>
            {dropdownOption}
            {/* <option>Mobile Development</option>
            <option>Fullstack Development</option>
            <option>Frontend Development</option>
            <option>Product Design</option>
            <option>Data Science</option>
            <option>Frontend Engineering</option> */}
          </select>
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
            placeholder='Phone Number'
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
        <div className='form-check d-flex align-items-center gap-2'>
          <input {...register('newsletter')} className='form-check-input' type='checkbox' value='' id='newsletter' />
          <label className={['form-check-label', style.checkboxLabel].join(' ')} htmlFor='newsletter'>
            Send me alerts and Weekly Newsletters
          </label>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>
          <div hidden={!isLoading} className='spinner-border spinner-border-sm me-5 text-white' role='status' />
          {isLoading ? `Please wait...` : `Register`}
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
