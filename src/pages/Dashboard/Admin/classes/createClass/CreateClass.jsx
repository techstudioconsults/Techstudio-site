/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import {
  AvatarDropdown,
  CancelModal,
  Portal,
  SaveSuccess,
  ToastComponent,
} from '../../../../../components'
import style from '../../courses/createCourse/createCourse.module.scss'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
// import { useGetTutorsMutation } from '../api/coursesApiSlice'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useCallback, useEffect, useState } from 'react'
import useToast from '../../../../../hooks/useToast'
import { useLocation } from 'react-router-dom'
import { useCreateClassMutation } from '../../courses/api/coursesApiSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'

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

const CreateClass = () => {
  const [tutors, setTutors] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const token = useSelector(selectCurrentToken)
  const location = useLocation()
  const { toast } = useToast()
  const courseID = location.pathname.split(`/`)[3]

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const findTutors = (status) => {
    const tutors = location?.state?.tutors[status].map((tutor) => {
      return {
        value: tutor.tutorId,
        label: `${tutor.firstName} ${tutor.lastName}`,
      }
    })
    setTutors(tutors)
  }

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

  // due to the error gotten from the response above...we went with the axios alternative
  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()

    console.log(data)
    console.log(new Date(data.endDate).toISOString())
    const files = [...data.files]

    formData.append(`title`, data.title)
    formData.append(`description`, data.description)
    formData.append(`preference`, data.preference)
    formData.append(`startDate`, new Date(data.startDate).toISOString())
    formData.append(`endDate`, new Date(data.endDate).toISOString())
    data.tutors.forEach((item) => formData.append('tutors[]', item.value))
    files.forEach((item) => formData.append('files', item))

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )

      const res = await axios.post(
        `${baseUrl}/class/${courseID}`,
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
      <Portal wrapperId='react-portal-modal-container'>
        <ToastComponent errorMessage={errorMessage} />
        <SaveSuccess
          content={{
            title: `Changes Saved Successfully!`,
            desc: `Your changes have been saved successfully. Kindly click continue to exit this page.`,
            courseID: courseID,
          }}
        />
        <CancelModal />
      </Portal>

      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Create Class</h4>
          <p className={style.subTitle}>
            Fill in the fields below to create a new class under a course.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='my-10 container'>
            {/* title */}
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Class Title
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <input
                    placeholder='class title'
                    type='text'
                    className='form-control form-control-lg'
                    id='title'
                    {...register('title')}
                  />
                </div>
              </div>
            </div>
            {/* about course */}
            <div className='mb-8 row'>
              <div className='col-4'>
                <label
                  htmlFor='description'
                  className={`col-form-label fs-lg ${style.labels} w-100`}
                >
                  Description
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <textarea
                    placeholder='class description'
                    type='text'
                    className='form-control form-control-lg'
                    id='description'
                    {...register('description')}
                  />
                </div>
              </div>
            </div>
            {/* duration (start-date and end-date) */}
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>
                    Start Date
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
                      {...register('startDate')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>
                    End Date
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
                      {...register('endDate')}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* preferences */}
            <div className='mb-8 d-flex  row'>
              <div className='col-4'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-lg ${style.labels} w-100 p-0`}
                >
                  Preference
                </label>
              </div>
              <div className='col-8'>
                <div
                  className={`${style.inputs} w-100 d-flex justify-content-between`}
                >
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='online'
                      value='online'
                      onClick={() => findTutors(`online`)}
                      {...register('preference')}
                    />
                    <label htmlFor='online' className='form-check-label'>
                      online
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='weekday'
                      value='weekday'
                      onClick={() => findTutors(`weekday`)}
                      {...register('preference')}
                    />
                    <label htmlFor='weekday' className='form-check-label'>
                      weekday
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='weekend'
                      value='weekend'
                      onClick={() => findTutors(`weekend`)}
                      {...register('preference')}
                    />
                    <label htmlFor='weekend' className='form-check-label'>
                      weekend
                    </label>
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
                              placeholder='select course'
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
                      name='tutors'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='tutors'
                              placeholder='select tutors'
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
                    htmlFor='resource'
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
                      <input
                        id='resource'
                        type='file'
                        multiple
                        {...register('files')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* CTA */}
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
                  onClick={handleCancelAction}
                  className='btn btn-outline-danger w-25 dont-delete-btn'
                >
                  Cancel
                </button>
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

export default CreateClass
