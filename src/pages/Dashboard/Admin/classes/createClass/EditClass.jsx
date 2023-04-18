/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import {
  AvatarDropdown,
  CancelModal,
  Portal,
  Save,
  SaveSuccess,
  ToastComponent,
} from '../../../../../components'
import style from '../../courses/createCourse/createCourse.module.scss'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
// import { useGetTutorsMutation } from '../api/coursesApiSlice'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useCallback, useEffect, useState } from 'react'
import useToast from '../../../../../hooks/useToast'
import { useLocation } from 'react-router-dom'
import {
  useEditClassMutation,
  useViewCoursesDetailsMutation,
} from '../../courses/api/coursesApiSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { selectCourseDetails } from '../../courses/api/coursesSlice'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'

const baseUrl = process.env.REACT_APP_BASE_URL

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: `#0266F41A`,
      color: '#A7A7A7',
      padding: `5px`,
      border: `1px solid #0266F4`,
      borderRadius: `5px`,
      marginRight: `10px`,
    }
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      color: '#0266F4',
      cursor: 'pointer',
      ':hover': {
        color: '#0266F41',
      },
    }
  },
}

const durationSelectInput = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    width: `168px`,
    fontSize: `14px`,
  }),
}

const schema = yup.object().shape({
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  tutors: yup.array().required('at least one tutor is required'),
  startDate: yup.string().required('when does the class start?'),
  endDate: yup.string().required('when does the class end?'),
  preference: yup.string().required('class preference requirerd'),
})

const EditClass = () => {
  const [tutors, setTutors] = useState([])
  const [isSave, setSave] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const token = useSelector(selectCurrentToken)
  const { state } = useLocation()
  const { toast } = useToast()
  const classID = location.pathname.split(`/`)[3]
  const [viewCoursesDetails] = useViewCoursesDetailsMutation()
  const courseDetails = useSelector(selectCourseDetails)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const defaultValues = {
    title: state.title,
    description: state.description,
    startDate: new Date(state.startDate).toLocaleDateString('en-CA'),
    endDate: new Date(state.endDate).toLocaleDateString('en-CA'),
    preference: state.preference,
    tutors: state.tutors.map((tutor) => {
      return {
        value: tutor.id,
        label: tutor.name,
      }
    }),
  }

  const findTutors = (status) => {
    const tutors = courseDetails.tutors[status].map((tutor) => {
      return {
        value: tutor.tutorId,
        label: `${tutor.firstName} ${tutor.lastName}`,
      }
    })
    setTutors(tutors)
  }

  const getCourseByCourseID = useCallback(async () => {
    const res = await viewCoursesDetails(state.courseId).unwrap()
    console.log(res)
  }, [state.courseId, viewCoursesDetails])

  useEffect(() => {
    getCourseByCourseID()
  }, [getCourseByCourseID])

  const {
    // reset,
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  })

  // due to the error gotten from the response above...we went with the axios alternative
  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()

    console.log(data)
    console.log(new Date(data.endDate).toISOString())
    const files = [...data.files]

    formData.append(`title`, data.title)
    formData.append(`description`, data.description)
    formData.append(`preference`, data.preference)
    formData.append(`startDate`, new Date(data.startDate).toISOString())
    formData.append(`endDate`, new Date(data.endDate).toISOString())
    data.tutors.forEach((item) => formData.append('tutors[]', item.value))
    files.forEach((item) => formData.append('files', item))

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-modal')
      )
      setSave(false)
      const res = await axios.patch(
        `${baseUrl}/class/${classID}`,
        formData,
        credentials
      )
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
        setSave(true)
        modal.show()
      }
    } catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }
  // ==============================================================

  const handleSaveModal = (event) => {
    event.preventDefault()
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-modal')
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  const handleCancelAction = (event) => {
    event.stopPropagation()
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('cancel-modal')
    )
    modal.show()
  }

  return (
    <section className={style.courseView}>
      <ToastComponent errorMessage={errorMessage} />
      <Portal wrapperId='react-portal-modal-container'>
        <Save
          content={{
            title: `${
              isSave
                ? `Changes Saved Successfully!`
                : `Are you sure you want to save changes?`
            }`,
            desc: `Your changes have been saved successfully. Kindly click continue to exit this page.`,
          }}
          saveCourse={handleSubmit(onSubmit)}
          isSave={isSave}
        />

        <CancelModal />
      </Portal>

      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Edit Class</h4>
          <p className={style.subTitle}>
            Fill in the fields below to create a new class under a course.
          </p>
        </div>
        <form onSubmit={handleSaveModal} encType='multipart/form-data'>
          <div className='my-10 container'>
            {/* title */}
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Class Title
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <input
                    placeholder='class title'
                    type='text'
                    className='form-control form-control-lg'
                    id='title'
                    {...register('title')}
                  />
                  <ErrorMessage
                    errors={errors}
                    name='title'
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
            {/* about course */}
            <div className='mb-8 row'>
              <div className='col-4'>
                <label
                  htmlFor='description'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Description
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <textarea
                    placeholder='class description'
                    type='text'
                    className='form-control form-control-lg'
                    id='description'
                    {...register('description')}
                  />
                  <ErrorMessage
                    errors={errors}
                    name='description'
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
            {/* duration (start-date and end-date) */}
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>
                    Start Date
                  </p>
                </div>
                <div className='col-8'>
                  <div
                    className={`${style.inputs} d-flex flex-column justify-content-between w-100`}
                  >
                    <input
                      type='date'
                      className='form-control form-control-lg'
                      id='start-date'
                      {...register('startDate')}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='startDate'
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
            </div>
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>
                    End Date
                  </p>
                </div>
                <div className='col-8'>
                  <div
                    className={`${style.inputs} d-flex flex-column justify-content-between w-100`}
                  >
                    <input
                      type='date'
                      className='form-control form-control-lg'
                      id='start-date'
                      {...register('endDate')}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='endDate'
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
            </div>
            {/* preferences */}
            <div className='mb-8 d-flex  row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100 p-0`}
                >
                  Preference
                </label>
              </div>
              <div className='col-8'>
                <div
                  className={`${style.inputs} w-100 d-flex justify-content-between`}
                >
                  <div className='form-check form-check-inline'>
                    <input
                      // defaultChecked={state.preference === `online`}
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='online'
                      value='online'
                      onClick={() => findTutors(`online`)}
                      {...register('preference')}
                    />
                    <label htmlFor='online' className='form-check-label'>
                      online
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      // defaultChecked={state.preference === `weekday`}
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='weekday'
                      value='weekday'
                      onClick={() => findTutors(`weekday`)}
                      {...register('preference')}
                    />
                    <label htmlFor='weekday' className='form-check-label'>
                      weekday
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      // defaultChecked={state.preference === `weekend`}
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='weekend'
                      value='weekend'
                      onClick={() => findTutors(`weekend`)}
                      {...register('preference')}
                    />
                    <label htmlFor='weekend' className='form-check-label'>
                      weekend
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  errors={errors}
                  name='preference'
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

            {/* tutors */}
            <div className='mb-8 row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels}`}
                >
                  Tutors
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='tutors'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='tutors'
                              placeholder='select tutors'
                              options={tutors}
                              isMulti
                              {...field}
                            />
                          </>
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='tutors'
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
            </div>
            {/* file chooser */}
            <section>
              <div className='mb-8 align-items-center row'>
                <div className='col-4'>
                  <label
                    htmlFor='resource'
                    className={`col-form-label fs-lg ${style.labels}`}
                  >
                    Resources
                  </label>
                </div>
                <div className='col-8'>
                  <div className={`${style.inputs} w-100`}>
                    <div
                      className={
                        (style.inputs,
                        `d-flex align-items-center w-100 border border-1 p-5 rounded-2`)
                      }
                    >
                      <input
                        id='resource'
                        type='file'
                        multiple
                        {...register('files')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* CTA */}

            <div>
              <div className='d-flex gap-10 justify-content-end my-8 row'>
                <div className={`w-100 text-end`}>
                  <button
                    disabled={isLoading}
                    type='submit'
                    className='btn btn-primary w-25 me-10'
                  >
                    <div
                      hidden={!isLoading}
                      className='spinner-border spinner-border-sm me-5 text-white'
                      role='status'
                    />
                    {isLoading ? `Please wait...` : `Save Change`}
                  </button>
                  <button
                    type='button'
                    onClick={handleCancelAction}
                    className='btn btn-outline-danger w-25 dont-delete-btn'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
      </div>
    </section>
  )
}

export default EditClass
