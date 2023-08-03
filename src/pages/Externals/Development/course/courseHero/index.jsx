import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import useToast from '../../../../../hooks/useToast'
import Portal from '../../../../../components/global/POTAL/Portal'
import Feedback from '../../../../../components/global/modals/Feedback'
import ToastComponent from '../../../../../components/global/toast/ToastComponent'

import { Button } from '../../../../../components'
import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'
import { useRegisterStudentMutation } from '../../../../../pages/Auth/api/authApiSlice'

import style from './courseHero.module.scss'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const index = ({ content, duration }) => {
  const [registerStudent, { isLoading }] = useRegisterStudentMutation()
  const [errorMessage, setErrorMessage] = useState(null)
  const { title, subTitle, img } = content
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
    const formData = {
      ...data,
      course: `design`,
      schedule: `Weekday`,
      phoneNumber: (data.phoneNumber),
    }
    console.log(formData)
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await registerStudent(formData).unwrap()
      console.log(res)

      res.success ? modal.show() : null
    } catch (err) {
      console.log(err.data)
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
    <Gsap animationFuncion={() => genericAnimation(`hero`)}>
      <header className={style.hero}>
        <Container paddingBlock={0}>
          <section className={style.heroWrapper}>
            <div className={style.heroText}>
              <h1 className={`${style.title} hero`}>{title}</h1>
              <p className={`${style.description} hero`}>{subTitle}</p>

              <div className='mt-10 d-flex justify-content-center justify-content-xl-start mb-10 mb-lg-0 hero'>
                <Button
                  linkHref='/student/register'
                  linkText='Enroll Now'
                  solidBtn
                  navBtn
                  width={`10`}
                />
              </div>
            </div>
            <div className={style.heroForm}>
              <div className={style.heroFormContents}>
                {/* <img src={img} alt='hero-img' /> */}
                <h5 className='pb-4 text-2'>
                  <small>
                    Register to lern more about the program pricing and
                    curriculum
                  </small>
                </h5>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={[style.heroFormInputs].join(' ')}
                >
                  <Portal wrapperId='react-portal-modal-container'>
                    <ToastComponent errorMessage={errorMessage} />
                    <Feedback
                      content={{
                        title: `Registration Successfull!`,
                        desc: ` Your details have been received and our Customer Care Representative will contact you shortly.`,
                      }}
                    />
                  </Portal>
                  <div className={style.row}>
                    <div>
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
                            ? Object.entries(messages).map(
                                ([type, message]) => (
                                  <p className='fs-xs text-danger' key={type}>
                                    {message}
                                  </p>
                                )
                              )
                            : null
                        }}
                      />
                    </div>
                    <div>
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
                            ? Object.entries(messages).map(
                                ([type, message]) => (
                                  <p className='fs-xs text-danger' key={type}>
                                    {message}
                                  </p>
                                )
                              )
                            : null
                        }}
                      />
                    </div>
                  </div>
                  <div className={style.email}>
                    <input
                      type='email'
                      id='email'
                      className='form-control'
                      aria-describedby='emailHelpBlock'
                      placeholder='Email Address'
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
                  <div className={style.phoneNumber}>
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
                  <button type='submit' className={style.btn}>
                    <div
                      hidden={!isLoading}
                      className={`spinner-border spinner-border-sm me-5 text-white`}
                      role='status'
                    />
                    {isLoading ? `Please wait...` : `Get Program Package`}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </Container>
      </header>
    </Gsap>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
