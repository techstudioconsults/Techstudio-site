/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useToast from '../../../../../hooks/useToast'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useSignupStudentMutation } from '../../../../Auth/api/authApiSlice'
import { Feedback, Portal, ToastComponent } from '../../../../../components'
import { useGetAllTutorsMutation } from '../api/usersApiSlice'

const TutorRegistrationForm = ({ cancelBtn }) => {
  const [signupStudent, { isLoading }] = useSignupStudentMutation()
  const [getAllTutors] = useGetAllTutorsMutation()
  const [passwordStatus, setPasswordStatus] = useState(`user`)
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()

  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPasswordStatus(e.target.value)
  }

  const {
    register,
    reset,
    handleSubmit,
    // formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      userRole: `TUTOR`,
      phoneNumber: parseInt(data.phoneNumber),
    }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await signupStudent(formData).unwrap()

      if (res.success) {
        reset()
        cancelBtn.current.click()
        getAllTutors().unwrap()
        modal.show()
      }
    } catch (err) {
      setErrorMessage(err.data.message)
      toast.show()
    }
  }

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [isSubmitSuccessful, reset])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToastComponent errorMessage={errorMessage} />
        <Portal wrapperId='react-portal-modal-container'>
          <Feedback
            content={{
              title: `Registration Successfull!`,
              desc: ` Your details have been received and our Customer Care
                Representative will contact you shortly.`,
            }}
          />
        </Portal>
        <header>
          <h5 className='fs-lg'>User’s Profile</h5>
          <p>Fill in the user’s details. All fields are required.</p>
        </header>
        <div
          style={{ height: `25rem`, overflowY: `auto` }}
          className='mt-10 container hide_scrollbar'
        >
          {/* first name */}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='firstName'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                First Name
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <input
                  required
                  placeholder='First name'
                  type='text'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='t-firstName'
                  {...register(`firstName`)}
                />
              </div>
            </div>
          </div>
          {/* Last name */}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='lastName'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Last Name
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <input
                  required
                  placeholder='Last name'
                  type='text'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='t-lastName'
                  {...register(`lastName`)}
                />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='email'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Email
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <input
                  required
                  placeholder='Email Address'
                  type='text'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='t-email'
                  {...register(`email`)}
                />
              </div>
            </div>
          </div>
          {/* Phone Number */}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='phoneNumber'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Phone Number
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <input
                  required
                  type='tel'
                  pattern='[0-9]{11}'
                  placeholder='08100792853'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='t-phoneNumber'
                  {...register(`phoneNumber`)}
                />
              </div>
            </div>
          </div>
          {/* status */}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='courses'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Status
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <select
                  required
                  className='form-select fs-sm text-dark'
                  aria-label='Default select example'
                  {...register(`status`)}
                >
                  <option value='' hidden>
                    Select Status
                  </option>
                  <option value='on-site'>On Site</option>
                  <option value='remote'>Remote</option>
                  <option value='hybrid'>Hybrid</option>
                </select>
              </div>
            </div>
          </div>
          {/* password input*/}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='phoneNumber'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Password
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <input
                  disabled={passwordStatus === `user`}
                  placeholder='*******'
                  type='password'
                  className='form-control form-control-lg fs-sm'
                  id='t-password'
                  {...register('password')}
                />
                {/* <ErrorMessage
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
              /> */}
              </div>
            </div>
          </div>
          {/* password set*/}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-12'>
              <label
                htmlFor='password'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Password
              </label>
              <p>Choose your most preferred option.</p>
            </div>
            <div className='col-12 mt-5'>
              <div className={` w-100`}>
                <div className='form-check border rounded-2 p-3 ps-10 d-flex align-items-center gap-3 mb-3'>
                  <input
                    defaultChecked
                    onChange={handlePasswordChange}
                    className='form-check-input'
                    type='radio'
                    name='passwordRadio'
                    id='choosePassword-tutor'
                    value='user'
                  />
                  <label
                    className='form-check-label mt-1'
                    htmlFor='choosePassword'
                  >
                    User chooses password
                  </label>
                </div>
                <div className='form-check border rounded-2 p-3 ps-10 d-flex align-items-center gap-3'>
                  <input
                    onChange={handlePasswordChange}
                    className='form-check-input'
                    type='radio'
                    name='passwordRadio'
                    id='manualPassword-tutor'
                    value='admin'
                  />
                  <label className='form-check-label' htmlFor='manualPassword'>
                    Manually set password for the user.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <button type='submit' className='btn btn-primary'>
              <div
                hidden={!isLoading}
                className='spinner-border spinner-border-sm me-5 text-white'
                role='status'
              />
              {isLoading ? `Please wait...` : `Register`}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default TutorRegistrationForm
