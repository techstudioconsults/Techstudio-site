/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import style from '../courses/createCourse/createCourse.module.scss'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
// import { useGetTutorsMutation } from '../api/coursesApiSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useCallback, useEffect, useState } from 'react'
import {
  AvatarDropdown,
  CancelModal,
  Portal,
  SaveSuccess,
  ToastComponent,
} from '../../../../components'
import { selectCurrentToken } from '../../../Auth/api/authSlice'
import useToast from '../../../../hooks/useToast'
import { useLocation, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import { useGetClassByCourseIDMutation } from '../classes/api/classApiSlice'
import { useViewCoursesDetailsMutation } from '../courses/api/coursesApiSlice'
import { useGetResourcesByCourseIDMutation } from '../resources/api/resourceApiSlice'

const baseUrl = process.env.REACT_APP_BASE_URL

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
  class: yup.object().required('class is required'),
  tutor: yup.object().required('at least one tutor is required'),
  date: yup.string().required('date field is required?'),
  time: yup.string().required('what time does the lesson start?'),
})

const CreateLesson = () => {
  const [tutors, setTutors] = useState([])
  const [classes, setClasses] = useState([])
  const [classID, setClassID] = useState()

  const [crudeResources, setCrudeResources] = useState([])
  const [resources, setResources] = useState([])

  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [getClassesByCourseID] = useGetClassByCourseIDMutation()
  const [viewCoursesDetails] = useViewCoursesDetailsMutation()
  const [getResourcesByCourseID] = useGetResourcesByCourseIDMutation()
  const { toast } = useToast()
  const { courseID } = useParams()

  const token = useSelector(selectCurrentToken)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const getResourceForClass = useCallback(async () => {
    const res = await getResourcesByCourseID(courseID).unwrap()
    if (res.success) {
      setCrudeResources([
        ...res.data.resources.audio,
        ...res.data.resources.video,
        ...res.data.resources.document,
      ])
    }
  }, [courseID, getResourcesByCourseID])

  useEffect(() => {
    getResourceForClass()
  }, [getResourceForClass])

  useEffect(() => {
    const resource = crudeResources?.map((resource) => {
      return {
        value: resource.id,
        label: resource.name,
      }
    })
    setResources(resource)
  }, [crudeResources])

  const getClasses = useCallback(async () => {
    const res = await getClassesByCourseID(courseID).unwrap()
    if (res.success) {
      setClasses(res.data.ongoing)
    }
  }, [courseID, getClassesByCourseID])

  useEffect(() => {
    getClasses()
  }, [getClasses])

  const classOption = classes?.map((classItem) => {
    return {
      value: classItem.id,
      label: classItem.title,
    }
  })

  const getTutors = (value) => {
    setClassID(value)
    classes?.map((singleClass) => {
      if (singleClass.id === value) {
        const tutorsList = singleClass.tutors.map((tutor) => {
          return {
            value: tutor.id,
            label: tutor.name,
          }
        })
        setTutors(tutorsList)
      }
    })
  }

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
    if (resources.length) {
      data?.resources?.forEach((item) =>
        formData.append('resources[]', item.value)
      )
    }
    files.forEach((item) => formData.append('files', item))

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )

      const res = await axios.post(
        `${baseUrl}/lessons/${classID}`,
        formData,
        credentials
      )

      if (res.status === 201) {
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
        <SaveSuccess
          content={{
            title: `Lesson Created Successfully!`,
            desc: `Kindly click continue to exit this page.`,
            courseID: courseID,
            action: `lesson`,
          }}
        />
        <CancelModal
          content={{
            action: `create`,
            routeAction: `lesson`,
            courseID: courseID,
          }}
        />
      </Portal>

      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Schedule Lesson</h4>
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
                  htmlFor='topic'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Topic
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <input
                    placeholder='topic'
                    type='text'
                    className='form-control form-control-lg'
                    id='topic'
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
                      render={({ field: { onChange, value } }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='class'
                              placeholder='select a class'
                              options={classOption}
                              onChange={(selectedOption) => {
                                onChange(selectedOption)
                                getTutors(selectedOption.value)
                              }}
                              value={value}
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
                      id='start-date'
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
                    {isLoading ? `Please wait...` : `Save Lesson`}
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

export default CreateLesson
