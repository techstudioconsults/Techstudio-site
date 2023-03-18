/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import {
  AvatarDropdown,
  Feedback,
  Portal,
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

const CreateCourse = () => {
  const [tutors, setTutors] = useState([])
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
    reset,
    register,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

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
    const formData = new FormData()
    const duration = {
      online: data.onlineClass,
      weekday: data.weekdayClass,
      weekend: data.weekendClass,
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
        document.getElementById('feedback')
      )

      const res = await axios.post(`${baseUrl}/course`, formData, credentials)
      res.status === 201 ? modal.show() : null
    } catch (err) {
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }

  return (
    <section className={style.courseView}>
      <Portal wrapperId='react-portal-modal-container'>
        <ToastComponent errorMessage={errorMessage} />
        <Feedback
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
                    <label htmlFor='online'>online</label>
                    <select
                      id='online'
                      className='form-select form-select-lg mt-2'
                      aria-label='.form-select-lg example'
                      {...register('onlineClass')}
                    >
                      <option value='1'>1 week</option>
                      <option value='2'>2 weeks</option>
                      <option value='3'>3 weeks</option>
                      <option value='4'>4 weeks</option>
                    </select>
                  </div>
                  {/* weekday */}
                  <div>
                    <label htmlFor='weekday'>weekday</label>
                    <select
                      id='weekday'
                      className='form-select form-select-lg mt-2'
                      aria-label='.form-select-lg example'
                      {...register('weekdayClass')}
                    >
                      <option value='1'>1 week</option>
                      <option value='2'>2 weeks</option>
                      <option value='3'>3 weeks</option>
                      <option value='4'>4 weeks</option>
                    </select>
                  </div>
                  {/* weekend */}
                  <div>
                    <label htmlFor='weekend'>weekend</label>
                    <select
                      id='weekend'
                      className='form-select form-select-lg mt-2'
                      aria-label='.form-select-lg example'
                      {...register('weekendClass')}
                    >
                      <option value='1'>1 week</option>
                      <option value='2'>2 weeks</option>
                      <option value='3'>3 weeks</option>
                      <option value='4'>4 weeks</option>
                    </select>
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
                  {/* <section className='w-100'>
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <p>Drag drop some files here, or click to select files</p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{files}</ul>
                    </aside>
                  </section> */}
                </div>
              </div>
            </section>
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8'>
              <button type='submit' className='btn btn-primary w-25'>
                Save Change
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

{
  /* <Multiselect
                            style={{
                              chips: {
                                gap: `1rem`,
                                background: `#0266F41A`,
                                padding: `0.7rem 1rem`,
                                color: `#0266F4`,
                                border: `1px solid #0266F4`,
                                borderRadius: 5,
                              },
                              inputField: {
                                marginInline: `1rem`,
                              },
                              multiselectContainer: {
                                borderRadius: 5,
                              },
                            }}
                            showArrow
                            name='tutors'
                            placeholder='select tutor'
                            options={options}
                            displayValue={`name`}
                            customCloseIcon={
                              <Icon
                                width={`1.3rem`}
                                icon={`mdi:close-circle-outline`}
                              />
                            }
                          /> */
}
