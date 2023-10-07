/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import * as yup from 'yup'

import { selectErrorMessage } from '../../../../../app/api/appSlice'
import { Feedback, Portal, ToastComponent } from '../../../../../components'
import NewToast from '../../../../../components/global/toast/NewToast'
import useToast from '../../../../../hooks/useToast'
import { useSignupStudentMutation } from '../../../../Auth/api/authApiSlice'
import { useGetClassByCourseIDMutation } from '../../classes/api/classApiSlice'
import { useViewAllCoursesMutation } from '../../courses/api/coursesApiSlice'
import { useGetAllStudentsMutation } from '../api/usersApiSlice'

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
  const errorText = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPasswordStatus(e.target.value)
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
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
    const formData = {
      ...data,
      phoneNumber: data.phoneNumber,
      course: courseSelected,
      deposit: parseInt(data.deposit),
      userRole: `STUDENT`,
      // not in the design
      paymentMethod: `transfer`,
    }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await signupStudent(formData).unwrap()
      if (res.success) {
        cancelBtn.current.click()
        modal.show()
        getAllStudents().unwrap()
        reset()
      }
    } catch (err) {
      dispatch({
        type: `app/setErrorMessage`,
        payload: err.data.message,
      })
      setErrorMessage(err.data.message)
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
      {/* =========================================== */}
      <NewToast errorText={errorText} />
      {/* =========================================== */}
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
                id='s-firstName'
                {...register('firstName')}
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
                required
                placeholder='Last name'
                type='text'
                className='form-control form-control-lg fs-sm text-dark'
                id='s-lastName'
                {...register('lastName')}
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
                required
                placeholder='Email Address'
                type='text'
                className='form-control form-control-lg fs-sm text-dark'
                id='s-email'
                {...register('email')}
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
                required
                type='tel'
                pattern='[0-9]{11}'
                placeholder='08012345678'
                className='form-control form-control-lg fs-sm text-dark'
                id='s-phoneNumber'
                {...register('phoneNumber')}
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
                required
                placeholder='Select a course'
                onChange={getClasses}
                className='form-select fs-sm text-dark'
                aria-label='Default select example'
                // {...register(`courses`)}
              >
                <option value='' hidden>
                  Select a Course
                </option>
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
                required
                {...register(`schedule`)}
                className='form-select fs-sm text-dark'
                aria-label='Default select example'
              >
                <option value='' hidden>
                  Select A Class
                </option>
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
                required
                placeholder='300,000'
                type='number'
                className='form-control form-control-lg fs-sm text-dark'
                id='payment'
                {...register('deposit')}
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

        {/* password input
        required*/}
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
                id='s-password'
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
                  id='choosePassword-student'
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
                  id='manualPassword-student'
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
