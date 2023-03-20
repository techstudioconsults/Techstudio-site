/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import {
  AvatarDropdown,
  Portal,
  SaveSuccess,
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
  const [errorMessage, setErrorMessage] = useState(null)
  const { toast } = useToast()

  const [getTutors] = useGetTutorsMutation()
  const token = useSelector(selectCurrentToken)
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
  //     await CreateCourse(formData).unwrap()
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
      </Portal>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Create Courses</h4>
          <p className={style.subTitle}>
            Fill in the fields below to create a new course.
          </p>
        </div>
        <div className='my-10'>
          <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
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
                  placeholder='course title'
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
                  placeholder='course description'
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
                className={
                  (style.inputs,
                  `d-flex align-items-center justify-content-between gap-8`)
                }
              >
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
                            className='reactSelect my-2'
                            name='onlineTutors'
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
                  <label htmlFor='weekday'>weekday</label>
                  <Controller
                    name='weekdayTutors'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            styles={colorStyles}
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
                    `d-flex align-items-center w-100 border border-1 p-5 rounded-2`)
                  }
                >
                  <input type='file' multiple {...register('files')} />
                </div>
              </div>
            </section>
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8'>
              <button
                disabled={isLoading}
                type='submit'
                className='btn btn-primary w-25'
              >
                <div
                  hidden={!isLoading}
                  className='spinner-border spinner-border-sm me-5 text-white'
                  role='status'
                />
                {isLoading ? `Please wait...` : `Save Change`}
              </button>
              <button className='btn btn-outline-danger w-25'>Cancel</button>
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
