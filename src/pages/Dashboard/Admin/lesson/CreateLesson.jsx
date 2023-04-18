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
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'

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
  tutor: yup.object().required('at least one tutor is required'),
  date: yup.string().required('date field is required?'),
  time: yup.string().required('what time does the lesson start?'),
})

const CreateLesson = () => {
  const [tutors, setTutors] = useState([])
  const [resources, setResources] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const location = useLocation()
  const { toast } = useToast()
  const classID = location.pathname.split(`/`)[3]

  const token = useSelector(selectCurrentToken)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const getTutors = useCallback(() => {
    location?.state?.tutors?.map((tutor) => {
      setTutors((prevState) => {
        return [
          ...prevState,
          {
            value: tutor.id,
            label: tutor.name,
          },
        ]
      })
    })
  }, [location?.state])

  useEffect(() => {
    getTutors()
  }, [getTutors])

  const allResources = useCallback(async () => {
    let resources = location?.state?.resources
    Object.keys(resources).forEach((key) => {
      resources[key].map((res) => {
        setResources((prevState) => {
          return [
            ...prevState,
            {
              value: res,
              label: res,
            },
          ]
        })
      })
    })
  }, [location?.state?.resources])

  useEffect(() => {
    allResources()
  }, [allResources])

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

    console.log(data)
    const files = [...data.files]

    formData.append(`topic`, data.topic)
    formData.append(`tutor`, data.tutor.value)
    formData.append(`date`, new Date(data.date).toISOString())
    formData.append(`time`, data.time)
    if (resources.length) {
      data.resources.forEach((item) =>
        formData.append('resources[]', item.value)
      )
    }
    files.forEach((item) => formData.append('files', item))

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )

      const res = await axios.post(
        `${baseUrl}/lesson/${classID}`,
        formData,
        credentials
      )
      console.log(res)
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
            title: `Changes Saved Successfully!`,
            desc: `Your changes have been saved successfully. Kindly click continue to exit this page.`,
          }}
        />
        <CancelModal />
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
