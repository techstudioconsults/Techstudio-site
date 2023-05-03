/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import useToast from '../../../../../hooks/useToast'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useViewAllCoursesMutation } from '../../courses/api/coursesApiSlice'
import { useGetClassByCourseIDMutation } from '../../classes/api/classApiSlice'
import { useSignupStudentMutation } from '../../../../Auth/api/authApiSlice'
import { Feedback, Portal, ToastComponent } from '../../../../../components'
import { useGetAllStudentsMutation } from '../api/usersApiSlice'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

// const schema = yup.object().shape({
//   firstName: yup.string().required('first name is required'),
//   lastName: yup.string().required('last name is required'),
//   email: yup.string().required('email is required'),
//   phoneNumber: yup.string().required('phone number is required'),
//   // course: yup.string().required('course is required'),
//   deposit: yup.string().required('deposit is required'),
//   userRole: yup.string().required('use role is required'),
// })

const StudentRegistrationForm = ({ cancelBtn }) => {
  const [signupStudent, { isLoading }] = useSignupStudentMutation()

  const [viewAllCourse] = useViewAllCoursesMutation()
  const [getClassesByCourseID] = useGetClassByCourseIDMutation()
  const [getAllStudents] = useGetAllStudentsMutation()
  const [courses, setCourses] = useState([])
  const [passwordStatus, setPasswordStatus] = useState(`user`)
  const [courseSelected, setCourseSelected] = useState()
  const [classes, setClasses] = useState([])
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
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    // resolver: yupResolver(schema),
  })

  const getCourses = useCallback(async () => {
    const res = await viewAllCourse().unwrap()
    if (res.success) {
      setCourses(res.data)
    }
  }, [viewAllCourse])

  const getClasses = async (e) => {
    console.log(e.currentTarget.value)
    setCourseSelected(e.currentTarget.value)
    const res = await getClassesByCourseID(e.currentTarget.value).unwrap()
    console.log(res)
    if (res.success) {
      setClasses(res.data.ongoing)
    }
  }

  const OnSubmit = async (data) => {
    console.log(data)
    const formData = {
      ...data,
      phoneNumber: parseInt(data.phoneNumber),
      course: courseSelected,
      deposit: parseInt(data.deposit),
      userRole: `STUDENT`,
      // not in the design
      paymentMethod: `transfer`,
    }
    console.log(formData)

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await signupStudent(formData).unwrap()
      console.log(res)
      // res.success ? modal.show() : null
      if (res.success) {
        cancelBtn.current.click()
        modal.show()
        getAllStudents().unwrap()
      }
    } catch (err) {
      console.log(err)
      setErrorMessage(err.data.message)
      toast.show()
    }
  }

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [isSubmitSuccessful, reset])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  // console.log(courses)

  const coursesOption = courses?.map((course) => {
    return (
      <option key={course.id} value={course.id}>
        {course.title}
      </option>
    )
  })
  const classOption = classes?.map((classItem) => {
    return (
      <option key={classItem.id} value={classItem.id}>
        {classItem.title}
      </option>
    )
  })

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
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
                className='form-control form-control-lg fs-sm'
                id='firstName'
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
                className='form-control form-control-lg fs-sm'
                id='lastName'
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
                className='form-control form-control-lg fs-sm'
                id='email'
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
                placeholder='08012345678'
                className='form-control form-control-lg fs-sm'
                id='phoneNumber'
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
          </div>
        </div>
        {/* Courses */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='courses'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Courses
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <select
                placeholder='Select a course'
                onChange={getClasses}
                className='form-select fs-sm'
                aria-label='Default select example'
                // {...register(`courses`, validation)}
              >
                {coursesOption}
              </select>
              <ErrorMessage
                errors={errors}
                name='course'
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
        </div>
        {/* Classes */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='classes'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Classes
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <select
                {...register(`schedule`)}
                className='form-select fs-sm'
                aria-label='Default select example'
              >
                {classOption}
              </select>
            </div>
          </div>
        </div>
        {/* Paymaent */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='phoneNumber'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Deposit
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <input
                placeholder='300,000'
                type='number'
                className='form-control form-control-lg fs-sm'
                id='payment'
                {...register('deposit', validation)}
              />
              <ErrorMessage
                errors={errors}
                name='deposit'
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
                id='password'
                {...register('password')}
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
                  id='choosePassword'
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
                  id='manualPassword'
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
  )
}

export default StudentRegistrationForm
