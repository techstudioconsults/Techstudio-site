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
import { useLocation } from 'react-router-dom'

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

const EditLesson = () => {
  const [tutors, setTutors] = useState([])
  const [resources, setResources] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const location = useLocation()
  const { toast } = useToast()
  const lessonID = location.pathname.split(`/`)[3]

  console.log(location.state)

  const token = useSelector(selectCurrentToken)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const prevTutor = [
    {
      value: location.state.tutorId,
      label: location.state.tutorName,
    },
    {
      value: `3`,
      label: `another user`,
    },
  ]

  const prevResources = location.state.resources.map((resource) => {
    return {
      value: resource,
      label: resource,
    }
  })

  const getTutors = useCallback(() => {
    setTutors((prevState) => {
      return [
        ...prevState,
        {
          value: location.state.tutorId,
          label: location.state.tutorName,
        },
      ]
    })
  }, [location?.state])

  useEffect(() => {
    getTutors()
  }, [getTutors])

  const allResources = useCallback(async () => {
    let resources = location?.state?.resources
    if (resources) {
      resources.map((resource) => {
        setResources((prevState) => {
          return [
            ...prevState,
            {
              value: resource,
              label: resource,
            },
          ]
        })
      })
    }
  }, [location?.state?.resources])

  useEffect(() => {
    allResources()
  }, [allResources])

  console.log(tutors)

  const {
    // reset,
    register,
    handleSubmit,
    control,
    // formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  // =============================================================================

  // due to the error gotten from the RTK Query on files...we went with the axios alternative
  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()

    console.log(data)
    const files = [...data.files]

    formData.append(`topic`, data.topic)

    data?.tutor
      ? formData.append(`tutor`, data.tutor?.[0].value)
      : formData.append(`tutor`, prevTutor?.[0].value)

    formData.append(`date`, new Date(data.date).toISOString())
    formData.append(`time`, data.time)
    resources.length === 0
      ? data.resources.forEach((item) =>
          formData.append('resources[]', item.value)
        )
      : prevResources.forEach((item) =>
          formData.append('resources[]', item.value)
        )

    files.forEach((item) => formData.append('files', item))

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )

      const res = await axios.patch(
        `${baseUrl}/lesson/${lessonID}`,
        formData,
        credentials
      )
      console.log(res)
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
        <SaveSuccess
          content={{
            title: `Changes Saved Successfully!`,
            desc: `Your changes have been saved successfully. Kindly click continue to exit this page.`,
          }}
        />
        <CancelModal />
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
                    defaultValue={location.state.topic}
                    placeholder='topic title'
                    type='text'
                    className='form-control form-control-lg'
                    id='title'
                    {...register('topic')}
                  />
                </div>
              </div>
            </div>
            {/* class */}
            {/* <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Class
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='course'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='onlineTutors'
                              placeholder=''
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
            </div> */}
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
                              defaultValue={prevTutor[0]}
                              // isMulti
                              options={tutors}
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
                    className={`${style.inputs} d-flex justify-content-between w-100`}
                  >
                    <input
                      defaultValue={new Date(
                        location.state.date
                      ).toLocaleDateString('en-CA')}
                      type='date'
                      className='form-control form-control-lg'
                      id='start-date'
                      {...register('date')}
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
                    className={`${style.inputs} d-flex justify-content-between w-100`}
                  >
                    <input
                      defaultValue={location.state.time}
                      type='time'
                      className='form-control form-control-lg'
                      id='start-date'
                      {...register('time')}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* course */}
            {/* <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Course
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='course'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='onlineTutors'
                              placeholder=''
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
            </div> */}

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
                              defaultValue={prevResources}
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
              <div className='mb-8 align-items-center row'>
                <div className='col-4'></div>
                <div className='col-8'>
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
