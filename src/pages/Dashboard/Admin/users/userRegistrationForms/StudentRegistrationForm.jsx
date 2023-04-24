import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useToast from '../../../../../hooks/useToast'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useViewAllCoursesMutation } from '../../courses/api/coursesApiSlice'
import { useGetClassByCourseIDMutation } from '../../classes/api/classApiSlice'
import { useSignupStudentMutation } from '../../../../Auth/api/authApiSlice'
import { Feedback, Portal, ToastComponent } from '../../../../../components'

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters',
  },
}

const StudentRegistrationForm = () => {
  const [signupStudent, { isLoading }] = useSignupStudentMutation()
  const [viewAllCourse] = useViewAllCoursesMutation()
  const [getClassesByCourseID] = useGetClassByCourseIDMutation()
  const [courses, setCourses] = useState([])
  const [courseSelected, setCourseSelected] = useState()
  const [classes, setClasses] = useState([])
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
      phoneNumber: parseInt(data.phoneNumber),
      course: courseSelected,
      deposit: ``,
      userRole: `STUDENT`,
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
                {...register('firstName', validation)}
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
                {...register('lastName', validation)}
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
                {...register('email', validation)}
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
                className='form-control form-control-lg'
                id='phoneNumber'
                {...register('phoneNumber', validation)}
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
                onChange={getClasses}
                className='form-select'
                aria-label='Default select example'
                // {...register(`courses`, validation)}
              >
                {coursesOption}
              </select>
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
                {...register(`schedule`, validation)}
                className='form-select'
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
                className='form-control form-control-lg'
                id='payment'
              />
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
