import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useToast from '../../../../../hooks/useToast'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useSignupStudentMutation } from '../../../../Auth/api/authApiSlice'
import { Feedback, Portal, ToastComponent } from '../../../../../components'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const TutorRegistrationForm = () => {
  const [signupStudent, { isLoading }] = useSignupStudentMutation()
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
    const formData = {
      ...data,
      userRole: `TUTOR`,
      phoneNumber: parseInt(data.phoneNumber),
    }
    console.log(formData)
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await signupStudent(formData).unwrap()
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Portal wrapperId='react-portal-modal-container'>
        <ToastComponent errorMessage={errorMessage} />
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
      <div className='mt-10 container'>
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
                placeholder='First name'
                type='text'
                className='form-control form-control-lg'
                id='firstName'
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
                placeholder='Last name'
                type='text'
                className='form-control form-control-lg'
                id='lastName'
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
                placeholder='Email Address'
                type='text'
                className='form-control form-control-lg'
                id='email'
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
                type='tel'
                pattern='[0-9]{11}'
                placeholder='08100792853'
                className='form-control form-control-lg'
                id='phoneNumber'
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
                className='form-select'
                aria-label='Default select example'
                {...register(`status`)}
              >
                <option value='on site'>On Site</option>
                <option value='remote'>Remote</option>
                <option value='hybrid'>Hybrid</option>
              </select>
            </div>
          </div>
        </div>

        {/* password */}
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
                  className='form-check-input'
                  type='radio'
                  name='passwordRadio'
                  id='choosePassword'
                  value='option1'
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
                  className='form-check-input'
                  type='radio'
                  name='passwordRadio'
                  id='manualPassword'
                  value='option2'
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
  )
}

export default TutorRegistrationForm
