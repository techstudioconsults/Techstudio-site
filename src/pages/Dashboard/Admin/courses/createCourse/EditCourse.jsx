/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import {
  AvatarDropdown,
  CancelModal,
  Portal,
  Save,
  ToastComponent,
} from '../../../../../components'
import style from './createCourse.module.scss'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import { useGetTutorsMutation } from '../api/coursesApiSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useCallback, useEffect, useState } from 'react'
import useToast from '../../../../../hooks/useToast'
import { useLocation } from 'react-router-dom'
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

const durationInWeeks = [
  { value: '10', label: '10 week' },
  { value: '12', label: '12 weeks' },
  { value: '16', label: '16 weeks' },
  { value: '24', label: '24 weeks' },
]

const schema = yup.object().shape({
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  onlineClass: yup.object().required('duration is required'),
  weekdayClass: yup.object().required('duration is required'),
  weekendClass: yup.object().required('duration is required'),
  onlineTutors: yup
    .array()
    .min(1, 'Please select at least one tutor')
    .required('at least one tutor is required'),
  weekdayTutors: yup
    .array()
    .min(1, 'Please select at least one tutor')
    .required('at least one tutor is required'),
  weekendTutors: yup
    .array()
    .min(1, 'Please select at least one tutor')
    .required('at least one tutor is required'),
})

const CreateCourse = () => {
  const [tutors, setTutors] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isSave, setSave] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()
  const {
    state: { course },
  } = useLocation()
  const [getTutors] = useGetTutorsMutation()
  const token = useSelector(selectCurrentToken)

  const defaultValues = {
    title: course.title,
    description: course.description,
    onlineClass: {
      value: course.duration.online,
      label: `${course.duration.online} weeks`,
    },
    weekdayClass: {
      value: course.duration.weekday,
      label: `${course.duration.weekday} weeks`,
    },
    weekendClass: {
      value: course.duration.weekend,
      label: `${course.duration.weekend} weeks`,
    },
    onlineTutors: course.tutors.online.map((tutor) => {
      return {
        value: tutor.tutorId,
        label: `${tutor.firstName} ${tutor.lastName}`,
      }
    }),
    weekdayTutors: course.tutors.weekday.map((tutor) => {
      return {
        value: tutor.tutorId,
        label: `${tutor.firstName} ${tutor.lastName}`,
      }
    }),
    weekendTutors: course.tutors.weekend.map((tutor) => {
      return {
        value: tutor.tutorId,
        label: `${tutor.firstName} ${tutor.lastName}`,
      }
    }),
  }

  const {
    reset,
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

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  console.log(course)

  const findTutors = useCallback(async () => {
    const res = await getTutors().unwrap()
    const tutors = res?.data?.map((tutor) => {
      return { value: tutor.id, label: `${tutor.firstName} ${tutor.lastName}` }
    })
    setTutors(tutors)
  }, [getTutors])

  useEffect(() => {
    findTutors()
  }, [findTutors])

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()
    let onlineTutors
    let weekdayTutors
    let weekendTutors

    // ===== data structure =============
    const duration = {
      online: data.onlineClass?.value,
      weekday: data.weekdayClass?.value,
      weekend: data.weekendClass?.value,
    }

    onlineTutors = data.onlineTutors?.map((obj) => obj.value)
    weekdayTutors = data.weekdayTutors?.map((obj) => obj.value)
    weekendTutors = data.weekendTutors?.map((obj) => obj.value)

    const tutors = {
      online: [...onlineTutors],
      weekday: [...weekdayTutors],
      weekend: [...weekendTutors],
    }
    const files = [...data.files]
    // =====end of data structure =============

    // ================= form data structure ======================
    formData.append(`title`, data.title)
    formData.append(`description`, data.description)

    Object.keys(duration).forEach((key) => {
      if (typeof duration[key] !== 'object')
        formData.append(`duration[${key}]`, duration[key])
      else formData.append(key, JSON.stringify(duration[key]))
    })

    files.forEach((item) => formData.append('files', item))

    Object.keys(tutors).forEach((key) => {
      if (typeof tutors[key] === 'object')
        tutors[key].forEach((tutor, index) => {
          formData.append(`tutors[${key}][${index}]`, tutor)
        })
    })

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-modal')
      )
      setSave(false)
      const res = await axios.patch(
        `${baseUrl}/course/${course.id}`,
        formData,
        credentials
      )
      if (res.status === 200) {
        setLoading(false)
        setSave(true)
        modal.show()
      }
    } catch (err) {
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }

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
            action: `course`,
          }}
          saveCourse={handleSubmit(onSubmit)}
          isSave={isSave}
        />

        <CancelModal content={{ action: `edit`, routeAction: `course` }} />
      </Portal>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Edit Course</h4>
          <p className={style.subTitle}>
            Fill in the fields below to edit the {course.title} course
          </p>
        </div>
        <div className='my-10'>
          <form onSubmit={handleSaveModal} encType='multipart/form-data'>
            {/* title */}
            <div className='mb-8 d-flex align-items-center '>
              <label
                htmlFor='title'
                className={`col-form-label fs-lg ${style.labels}`}
              >
                Course
              </label>
              <div className={style.inputs}>
                <input
                  placeholder='Placeholder Text'
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
            {/* about course */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='description'
                className={`col-form-label fs-lg ${style.labels}`}
              >
                About Course
              </label>
              <div className={style.inputs}>
                <textarea
                  maxLength={`500`}
                  placeholder='Placeholder Text'
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
            {/* duration */}
            <div className='mb-8 d-flex'>
              <p
                // htmlFor='duration'
                className={`col-form-label fs-lg ${style.labels}`}
              >
                Duration
              </p>
              <div
                className={(style.inputs, `d-flex align-items-center gap-8`)}
              >
                <div className='d-flex gap-8'>
                  {/* online */}
                  <div>
                    <label className='mb-3' htmlFor='online'>
                      online
                    </label>
                    <Controller
                      name='onlineClass'
                      control={control}
                      render={({ field }) => {
                        return (
                          <Select
                            // defaultValue={prevOnlineDuration}
                            styles={durationSelectInput}
                            name='onlineClass'
                            options={durationInWeeks}
                            {...field}
                          />
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='onlineClass'
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
                  {/* weekday */}
                  <div>
                    <label className='mb-3' htmlFor='weekday'>
                      weekday
                    </label>
                    <Controller
                      name='weekdayClass'
                      control={control}
                      render={({ field }) => {
                        return (
                          <Select
                            // defaultValue={prevWeekdayDuration}
                            styles={durationSelectInput}
                            name='weekdayClass'
                            options={durationInWeeks}
                            {...field}
                          />
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='weekdayClass'
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
                  {/* weekend */}
                  <div>
                    <label className='mb-3' htmlFor='weekend'>
                      weekend
                    </label>
                    <Controller
                      name='weekendClass'
                      control={control}
                      render={({ field }) => {
                        return (
                          <Select
                            // defaultValue={prevWeekendDuration}
                            styles={durationSelectInput}
                            name='weekendClass'
                            options={durationInWeeks}
                            {...field}
                          />
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='weekendClass'
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
            <div className='mb-8 d-flex'>
              <label
                htmlFor='title'
                className={`col-form-label fs-lg ${style.labels}`}
              >
                Tutors
              </label>
              <div className={style.inputs}>
                <div>
                  <label htmlFor='online'>online</label>
                  <Controller
                    name='onlineTutors'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            styles={colorStyles}
                            name='onlineTutors'
                            options={tutors}
                            className='reactSelect my-2'
                            placeholder='Select Tutors'
                            // defaultValue={prevOnlineTutors}
                            isMulti
                            {...field}
                          />
                        </>
                      )
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name='onlineTutors'
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
                  <label htmlFor='weekday'>weekday</label>
                  <Controller
                    name='weekdayTutors'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            styles={colorStyles}
                            // defaultValue={prevWeekdayTutors}
                            className='reactSelect my-2'
                            name='weekdayTutors'
                            placeholder='Select Tutors'
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
                    name='weekdayTutors'
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
                  <label htmlFor='weekend'>weekend</label>
                  <Controller
                    name='weekendTutors'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            styles={colorStyles}
                            // defaultValue={prevWeekendTutors}
                            className='reactSelect mt-2'
                            name='weekendTutors'
                            placeholder='Select Tutors'
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
                    name='weekendTutors'
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
            {/* file chooser */}
            <section>
              <div className='d-flex gap-20 '>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels}`}
                >
                  Resources
                </label>
                <div
                  className={
                    (style.inputs,
                    `d-flex align-items-center w-100 border border-1 p-5`)
                  }
                >
                  <input type='file' multiple {...register('files')} />
                </div>
              </div>
            </section>
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8'>
              <button type='submit' className='btn btn-primary w-25'>
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
          </form>
        </div>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
      </div>
    </section>
  )
}

export default CreateCourse
