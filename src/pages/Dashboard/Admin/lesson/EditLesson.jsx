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
import { AvatarDropdown } from '../../../../components'
import { selectCurrentToken } from '../../../Auth/api/authSlice'
import useToast from '../../../../hooks/useToast'

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
      height: `32px`,
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

const durationInWeeks = [
  { value: '10', label: '10 week' },
  { value: '12', label: '12 weeks' },
  { value: '16', label: '16 weeks' },
  { value: '24', label: '24 weeks' },
]

const CreateLesson = () => {
  const [tutors, setTutors] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()

  //   const [getTutors] = useGetTutorsMutation()
  const token = useSelector(selectCurrentToken)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  //   const findTutors = useCallback(async () => {
  //     const res = await getTutors().unwrap()
  //     const tutors = res.data.tutors.map((tutor) => {
  //       return { value: tutor.id, label: `${tutor.firstName} ${tutor.lastName}` }
  //     })
  //     setTutors(tutors)
  //   }, [getTutors])

  //   useEffect(() => {
  //     findTutors()
  //   }, [findTutors])

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

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [isSubmitSuccessful, reset])

  // =============================================================================
  // this code block works with RTK Query --- kept getting error from frile upload
  // =============================================================================

  // const onSubmit = async (data) => {
  //   const formData = new FormData()
  //   const duration = {
  //     online: data.onlineClass,
  //     weekday: data.weekdayClass,
  //     weekend: data.weekendClass,
  //   }
  //   const tutors = data.tutors.map((obj) => obj.value)
  //   const files = [...data.files]

  //   formData.append(`title`, data.title)
  //   formData.append(`description`, data.description)

  //   Object.keys(duration).forEach((key) => {
  //     if (typeof duration[key] !== 'object')
  //       formData.append(`duration[${key}]`, duration[key])
  //     else formData.append(key, JSON.stringify(duration[key]))
  //   })

  //   files.forEach((item) => formData.append('files', item))
  //   tutors.forEach((item) => formData.append('tutors[]', item))

  //   try {
  //     await CreateLesson(formData).unwrap()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // ================================================================================

  // due to the error gotten from the response above...we went with the axios alternative
  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()
    const duration = {
      online: data.onlineClass.value,
      weekday: data.weekdayClass.value,
      weekend: data.weekendClass.value,
    }

    const onlineTutors = data.onlineTutors.map((obj) => obj.value)
    const weekdayTutors = data.weekdayTutors.map((obj) => obj.value)
    const weekendTutors = data.weekendTutors.map((obj) => obj.value)

    const tutors = {
      online: [...onlineTutors],
      weekday: [...weekdayTutors],
      weekend: [...weekendTutors],
    }
    const files = [...data.files]

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
        document.getElementById('save-success')
      )

      const res = await axios.post(`${baseUrl}/course`, formData, credentials)
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
      {/* <Portal wrapperId='react-portal-modal-container'>
        <ToastComponent errorMessage={errorMessage} />
        <SaveSuccess
          content={{
            title: `Changes Saved Successfully!`,
            desc: `Your changes have been saved successfully. Kindly click continue to exit this page.`,
          }}
        />
        <CancelModal />
      </Portal> */}

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
                </div>
              </div>
            </div>
            {/* class */}
            <div className='mb-8 d-flex row'>
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
                      name='onlineTutors'
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
                      type='time'
                      className='form-control form-control-lg'
                      id='start-date'
                      {...register('date')}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* course */}
            <div className='mb-8 d-flex row'>
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
            </div>

            {/* file chooser */}
            <section>
              <div className='mb-8 align-items-center row'>
                <div className='col-4'>
                  <label
                    htmlFor='title'
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

export default CreateLesson
