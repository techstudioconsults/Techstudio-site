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
  }),
}

const durationInWeeks = [
  { value: '1', label: '1 week' },
  { value: '2', label: '2 weeks' },
  { value: '3', label: '3 weeks' },
  { value: '4', label: '4 weeks' },
  { value: '5', label: '5 weeks' },
]

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

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const findTutors = useCallback(async () => {
    const res = await getTutors().unwrap()
    const tutors = res.data.tutors.map((tutor) => {
      return { value: tutor.id, label: `${tutor.firstName} ${tutor.lastName}` }
    })
    setTutors(tutors)
  }, [getTutors])

  useEffect(() => {
    findTutors()
  }, [findTutors])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const prevOnlineDuration = [
    { value: course.duration.online, label: `${course.duration.online} weeks` },
  ]
  const prevWeekdayDuration = [
    {
      value: course.duration.weekday,
      label: `${course.duration.weekday} weeks`,
    },
  ]
  const prevWeekendDuration = [
    {
      value: course.duration.weekend,
      label: `${course.duration.weekend} weeks`,
    },
  ]

  const prevOnlineTutors = course.tutors.online.map((tutor) => {
    return {
      value: tutor.tutorId,
      label: `${tutor.firstName} ${tutor.lastName}`,
    }
  })
  const prevWeekdayTutors = course.tutors.weekday.map((tutor) => {
    return {
      value: tutor.tutorId,
      label: `${tutor.firstName} ${tutor.lastName}`,
    }
  })
  const prevWeekendTutors = course.tutors.weekend.map((tutor) => {
    return {
      value: tutor.tutorId,
      label: `${tutor.firstName} ${tutor.lastName}`,
    }
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()
    let onlineTutors
    let weekdayTutors
    let weekendTutors

    // ===== data structure =============
    const duration = {
      online: data.onlineClass?.value || prevOnlineDuration[0].value,
      weekday: data.weekdayClass?.value || prevWeekdayDuration[0].value,
      weekend: data.weekendClass?.value || prevWeekendDuration[0].value,
    }

    data.onlineTutors
      ? (onlineTutors = data.onlineTutors?.map((obj) => obj.value))
      : (onlineTutors = prevOnlineTutors?.map((obj) => obj.value))
    data.weekdayTutors
      ? (weekdayTutors = data.weekdayTutors?.map((obj) => obj.value))
      : (weekdayTutors = prevWeekdayTutors?.map((obj) => obj.value))
    data.weekendTutors
      ? (weekendTutors = data.weekendTutors?.map((obj) => obj.value))
      : (weekendTutors = prevWeekendTutors?.map((obj) => obj.value))

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
      <Portal wrapperId='react-portal-modal-container'>
        <ToastComponent errorMessage={errorMessage} />
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
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Title
              </label>
              <div className={style.inputs}>
                <input
                  defaultValue={course.title}
                  placeholder='Placeholder Text'
                  type='text'
                  className='form-control form-control-lg'
                  id='title'
                  {...register('title')}
                />
              </div>
            </div>
            {/* about course */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='description'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                About Courses
              </label>
              <div className={style.inputs}>
                <textarea
                  defaultValue={course.description}
                  placeholder='Placeholder Text'
                  type='text'
                  className='form-control form-control-lg'
                  id='description'
                  {...register('description')}
                />
              </div>
            </div>
            {/* duration */}
            <div className='mb-8 d-flex'>
              <p
                // htmlFor='duration'
                className={`col-form-label fs-2xl ${style.labels}`}
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
                            defaultValue={prevOnlineDuration}
                            styles={durationSelectInput}
                            name='onlineClass'
                            options={durationInWeeks}
                            {...field}
                          />
                        )
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
                            defaultValue={prevWeekdayDuration}
                            styles={durationSelectInput}
                            name='weekdayClass'
                            options={durationInWeeks}
                            {...field}
                          />
                        )
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
                            defaultValue={prevWeekendDuration}
                            styles={durationSelectInput}
                            name='weekendClass'
                            options={durationInWeeks}
                            {...field}
                          />
                        )
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
                className={`col-form-label fs-2xl ${style.labels}`}
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
                            defaultValue={prevOnlineTutors}
                            isMulti
                            {...field}
                          />
                        </>
                      )
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
                            defaultValue={prevWeekdayTutors}
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
                            defaultValue={prevWeekendTutors}
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
                </div>
              </div>
            </div>
            {/* file chooser */}
            <section>
              <div className='d-flex gap-20 '>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-2xl ${style.labels}`}
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
