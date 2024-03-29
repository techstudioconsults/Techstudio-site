/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
// import { useGetTutorsMutation } from '../api/coursesApiSlice'
import axios from 'axios'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import * as yup from 'yup'

import {
  AvatarDropdown,
  CancelModal,
  Portal,
  SaveSuccess,
  ToastComponent,
} from '../../../../components'
import useToast from '../../../../hooks/useToast'
import { selectCurrentToken } from '../../../Auth/api/authSlice'
import { useGetClassByCourseIDMutation } from '../classes/api/classApiSlice'
import { useViewCoursesDetailsMutation } from '../courses/api/coursesApiSlice'
import { useGetResourcesByCourseIDMutation } from '../resources/api/resourceApiSlice'

import style from '../courses/createCourse/createCourse.module.scss'

const baseUrl = import.meta.env.VITE_BASE_URL

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    // height: `41px`,
  }),
  input: (styles) => {
    return {
      ...styles,
      // height: `32px`,
      fontSize: `14px`,
    }
  },
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
  topic: yup.string().required('title is required'),
  tutor: yup.object().required('at least one tutor is required'),
  date: yup.string().required('date field is required?'),
  time: yup.string().required('what time does the lesson start?'),
})

const EditLesson = () => {
  const { state } = useLocation()
  const [classes, setClasses] = useState([])
  const [tutors, setTutors] = useState([])
  // const [resources] = useState([])
  const [resources, setResources] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()
  const navigate = useNavigate()
  const lessonID = location.pathname.split(`/`)[3]
  const [getClassesByCourseID] = useGetClassByCourseIDMutation()
  const [viewCoursesDetails] = useViewCoursesDetailsMutation()
  const [getResourcesByCourseID] = useGetResourcesByCourseIDMutation()

  const token = useSelector(selectCurrentToken)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const defaultValues = {
    topic: state.topic,
    date: new Date(state.date).toLocaleDateString('en-CA'),
    time: state.time,
    class: { label: state.classTitle, value: state.classId },
    // tutor: tutors,
    tutor: {
      value: state.tutorId,
      label: state.tutorName,
    },
    resources: [
      ...state.resources.audio,
      ...state.resources.video,
      ...state.resources.document,
    ].map((resource) => {
      return {
        value: resource.id,
        label: `${resource.name}`,
      }
    }),
  }

  const getClasses = useCallback(async () => {
    const res = await getClassesByCourseID(state.courseId).unwrap()
    if (res.success) {
      let tutorsList = res.data.ongoing?.map((singleClass) => {
        if (singleClass.id === state.classId) {
          return singleClass.tutors.map((tutor) => {
            return {
              value: tutor.id,
              label: tutor.name,
            }
          })
        }
      })
      setTutors(...tutorsList)
    }
  }, [getClassesByCourseID, state.classId, state.courseId])

  const getResources = useCallback(async () => {
    const res = await getResourcesByCourseID(state.courseId).unwrap()
    if (res.success) {
      Object?.keys(res.data.resources)?.forEach((key) => {
        res.data.resources[key]?.map((resource) => {
          setResources((prevState) => {
            return [
              ...prevState,
              {
                value: resource.id,
                label: resource.name,
              },
            ]
          })
        })
      })
    }
  }, [getResourcesByCourseID, state.courseId])

  const classOption = classes?.map((classItem) => {
    return {
      value: classItem.id,
      label: classItem.title,
    }
  })

  useEffect(() => {
    getClasses()
    getResources()
  }, [getClasses, getResources])

  const {
    // reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  })

  // =============================================================================

  // due to the error gotten from the RTK Query on files...we went with the axios alternative
  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()

    const files = [...data.files]

    formData.append(`topic`, data.topic)
    formData.append(`tutor`, data.tutor.value)
    formData.append(`date`, new Date(data.date).toISOString())
    formData.append(`time`, data.time)
    if (resources?.length) {
      data?.resources?.forEach((item) =>
        formData.append('resources[]', item.value)
      )
    }
    files?.forEach((item) => formData.append('files', item))

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )
      const res = await axios.patch(
        `${baseUrl}/lessons/${lessonID}`,
        formData,
        credentials
      )
      if (res.status === 200) {
        setLoading(false)
        modal.show()
      }
    } catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }
  // ==============================================================

  function compareObjects(obj1, obj2) {
    // Remove the 'files' property from both objects
    const obj1WithoutFiles = { ...obj1 }
    delete obj1WithoutFiles.files

    const obj2WithoutFiles = { ...obj2 }
    delete obj2WithoutFiles.files

    // Compare the two objects without the 'files' property
    return JSON.stringify(obj1WithoutFiles) === JSON.stringify(obj2WithoutFiles)
  }

  const handleCancelAction = (data) => {
    if (compareObjects(data, defaultValues)) {
      navigate(`/admin/classes/${state.courseId}`, {
        state: { from: `lesson` },
      })
    } else {
      // event.stopPropagation()
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('cancel-modal')
      )
      modal.show()
    }
  }

  return (
    <section className={style.courseView}>
      <ToastComponent errorMessage={errorMessage} />
      <Portal wrapperId='react-portal-modal-container'>
        <SaveSuccess
          content={{
            title: `Changes Saved Successfully!`,
            desc: `Your changes have been saved successfully. Kindly click continue to exit this page.`,
            action: `lesson`,
            courseID: state.courseId,
          }}
        />
        <CancelModal
          content={{
            action: `edit`,
            routeAction: `lesson`,
            courseID: state.courseId,
          }}
        />
      </Portal>

      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Reschedule Lesson</h4>
          <p className={style.subTitle}>
            Set new time and date for the scheduled Lesson.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='my-10 container'>
            {/* topic */}
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Topic
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <input
                    placeholder='topic title'
                    type='text'
                    className='form-control form-control-lg'
                    id='title'
                    {...register('topic')}
                  />
                  <ErrorMessage
                    errors={errors}
                    name='topic'
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
            <div className='mb-8 row'>
              <div className='col-4'>
                <label
                  htmlFor='class'
                  className={`col-form-label fs-lg ${style.labels}`}
                >
                  Class
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='class'
                      control={control}
                      render={({ field }) => {
                        // render={({ field: { onChange, value } }) => {
                        return (
                          <>
                            <Select
                              isDisabled={true}
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='class'
                              placeholder='select a class'
                              options={classOption}
                              // onChange={(selectedOption) => {
                              //   onChange(selectedOption)
                              //   getTutors(selectedOption.value)
                              // }}
                              // value={value}
                              {...field}
                            />
                          </>
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='class'
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
                      name='tutor'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='tutor'
                              placeholder='select tutor'
                              options={tutors}
                              {...field}
                            />
                          </>
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='tutor'
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
            {/* duration (date) */}
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>
                    Date
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
                      {...register('date')}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='date'
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
            {/* duration (time) */}
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>
                    Time
                  </p>
                </div>
                <div className='col-8'>
                  <div
                    className={`${style.inputs} d-flex flex-column justify-content-between w-100`}
                  >
                    <input
                      type='time'
                      className='form-control form-control-lg'
                      id='start-time'
                      {...register('time')}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='time'
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

            {/* Resource */}
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Resources
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='resources'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='resources'
                              placeholder=''
                              options={resources}
                              isMulti
                              {...field}
                            />
                          </>
                        )
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
                    htmlFor='title'
                    className={`col-form-label fs-lg ${style.labels}`}
                  >
                    External Resources
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
                      <input type='file' multiple {...register('files')} />
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
                    onClick={handleSubmit(handleCancelAction)}
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

export default EditLesson
