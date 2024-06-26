/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import * as yup from 'yup'

import { AvatarDropdown, CancelModal, Portal, SaveSuccess, ToastComponent } from '../../../../../components'
import useToast from '../../../../../hooks/useToast'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { useGetTutorsMutation } from '../api/coursesApiSlice'

import style from './createCourse.module.scss'

const baseUrl = import.meta.env.VITE_BASE_URL

// input validation

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
  { value: '2', label: '2 weeks' },
  { value: '4', label: '4 weeks' },
  { value: '6', label: '6 weeks' },
  { value: '8', label: '8 weeks' },
  { value: '10', label: '10 weeks' },
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
  onlineTutors: yup.array().min(1, 'Please select at least one tutor').required('at least one tutor is required'),
  weekdayTutors: yup.array().min(1, 'Please select at least one tutor').required('at least one tutor is required'),
  weekendTutors: yup.array().min(1, 'Please select at least one tutor').required('at least one tutor is required'),
})

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
    const tutors = res.data.map((tutor) => {
      return { value: tutor.id, label: `${tutor.fullName}` }
    })
    setTutors(tutors)
  }, [getTutors])

  useEffect(() => {
    findTutors()
  }, [findTutors])

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(schema),
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
      if (typeof duration[key] !== 'object') formData.append(`duration[${key}]`, duration[key])
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
      let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('save-success'))

      const res = await axios.post(`${baseUrl}/courses`, formData, credentials)
      if (res.status === 201) {
        reset()
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
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('cancel-modal'))
    modal.show()
  }

  return (
    <section className={style.courseView}>
      <ToastComponent errorMessage={errorMessage} />
      <Portal wrapperId='react-portal-modal-container'>
        <SaveSuccess
          content={{
            title: `Course Created Successfully!`,
            desc: `Kindly click continue to exit this page.`,
            action: `course`,
          }}
        />
        <CancelModal content={{ action: `create`, routeAction: `course` }} />
      </Portal>

      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Create Courses</h4>
          <p className={style.subTitle}>Fill in the fields below to create a new course.</p>
        </div>
        <div className='my-10'>
          <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            {/* title */}
            <div className='mb-8 d-flex align-items-center '>
              <label htmlFor='title' className={`col-form-label fs-lg ${style.labels}`}>
                Course
              </label>
              <div className={style.inputs}>
                <input placeholder='course title' type='text' className='form-control form-control-lg' id='title' {...register('title')} />
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
              <label htmlFor='description' className={`col-form-label fs-lg ${style.labels}`}>
                About Course
              </label>
              <div className={style.inputs}>
                <textarea
                  maxLength='500'
                  placeholder='course description'
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
              <div className={(style.inputs, `d-flex align-items-center justify-content-between gap-8`)}>
                {/* online */}
                <div>
                  <label className='mb-3' htmlFor='online'>
                    online
                  </label>
                  <Controller
                    name='onlineClass'
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => {
                      return <Select isClearable styles={durationSelectInput} options={durationInWeeks} {...field} />
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
                    rules={{ required: true }}
                    render={({ field }) => {
                      return <Select styles={durationSelectInput} name='weekdayClass' options={durationInWeeks} {...field} />
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
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => {
                      return <Select styles={durationSelectInput} name='weekendClass' options={durationInWeeks} {...field} />
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
            {/* tutors */}
            <div className='mb-8 d-flex'>
              <label htmlFor='title' className={`col-form-label fs-lg ${style.labels}`}>
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
                <label htmlFor='title' className={`col-form-label fs-lg ${style.labels}`}>
                  Resources
                </label>
                <div className={(style.inputs, `d-flex align-items-center w-100 border border-1 p-5 rounded-2`)}>
                  <input type='file' multiple {...register('files')} />
                </div>
              </div>
            </section>
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8'>
              <button disabled={isLoading} type='submit' className='btn btn-primary w-25'>
                <div hidden={!isLoading} className='spinner-border spinner-border-sm me-5 text-white' role='status' />
                {isLoading ? `Please wait...` : `Save Course`}
              </button>
              <button type='button' onClick={handleCancelAction} className='btn btn-outline-danger w-25 dont-delete-btn'>
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
