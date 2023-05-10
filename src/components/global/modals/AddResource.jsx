import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { selectCurrentToken } from '../../../pages/Auth/api/authSlice'
import { selectCourses } from '../../../pages/Dashboard/Admin/courses/api/coursesSlice'
// import PropTypes from 'prop-types'
import style from './upload.module.scss'
import useToast from '../../../hooks/useToast'
import ToastComponent from '../toast/ToastComponent'
import { SaveSuccess } from '../..'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const baseUrl = process.env.REACT_APP_BASE_URL

const durationSelectInput = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    // fontSize: `14px`,
  }),
}

const schema = yup.object().shape({
  course: yup.object().required('Course is required'),
  // file: yup.object().required('A file is required'),
  // file: yup
  //   .mixed()
  //   .required('A file is required')
  //   .test('fileFormat', 'Unsupported file format', (value) => {
  //     console.log(value)
  //     let files = [...value]
  //     files.forEach((file) => {
  //       console.log(file.type)
  //       if (!value) return false // return false if value is undefined or null
  //       return (
  //         // file &&
  //         ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)
  //       )
  //     })
  //   }),
})

// eslint-disable-next-line react/prop-types
const AddAFile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const cancelButtonRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const courses = useSelector(selectCourses)
  const token = useSelector(selectCurrentToken)
  const { toast } = useToast()
  const [courseID, setCourseID] = useState(null)

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
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
  })

  const coursesTitle = courses.map((course) => {
    return { value: course.id, label: course.title }
  })

  const submitResource = async (data) => {
    setCourseID(data.course.value)
    setIsLoading(true)
    const formData = new FormData()
    const files = [...data.file]
    files.forEach((file) => formData.append(`files`, file))
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )
      const res = await axios.patch(
        `${baseUrl}/resources/${data.course.value}`,
        formData,
        credentials
      )

      if (res.data.success) {
        reset({
          course: '',
          file: '',
        })
        setIsLoading(false)
        cancelButtonRef.current.click()
        modal.show()
      }
    } catch (err) {
      setIsLoading(false)
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }

  return (
    <>
      <ToastComponent errorMessage={errorMessage} />
      <SaveSuccess
        content={{
          title: `New Resources Added Successfully!`,
          desc: `This resource has successfully being added. Kindly click continue to exit this page.`,
          courseID: courseID,
          action: `resource`,
        }}
      />
      <div
        className='modal fade'
        id='add-resource'
        tabIndex='-1'
        aria-labelledby='add-resource'
      >
        <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg '>
          <div className='modal-content'>
            <form
              onSubmit={handleSubmit(submitResource)}
              className={['modal-body p-16'].join(' ')}
            >
              <h4 className='text-blue text-center fs-3xl fw-bold'>
                A New Resource
              </h4>
              <div className='my-10 container'>
                {/* topic */}
                <div className='mb-8 d-flex row'>
                  <div className='col-4'>
                    <label
                      htmlFor='courseTitle'
                      className={`col-form-label fs-lg text-blue fw-semibold ${style.labels} w-100`}
                    >
                      Course
                    </label>
                  </div>
                  <div className='col-8'>
                    <Controller
                      name='course'
                      rules={{ required: true }}
                      control={control}
                      render={({ field }) => {
                        return (
                          <Select
                            placeholder={`Select A Course`}
                            isClearable
                            styles={durationSelectInput}
                            options={coursesTitle}
                            {...field}
                          />
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='course'
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

                {/* file chooser */}
                <section>
                  <div className='mb-8 align-items-center row'>
                    <div className='col-4'>
                      <label
                        htmlFor='resource'
                        className={`col-form-label fs-lg text-blue fw-semibold ${style.labels}`}
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
                          {/* <Controller
                            name='file'
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              return (
                                <input
                                  accept=''
                                  id='resource'
                                  type='file'
                                  multiple
                                  onChange={(selectedOption) => {
                                    console.log(selectedOption)
                                  }}
                                  value={value}
                                />
                              )
                            }}
                          /> */}
                          <input
                            required
                            id='resource'
                            type='file'
                            multiple
                            {...register('file')}
                          />
                        </div>
                        <ErrorMessage
                          errors={errors}
                          name='file'
                          render={({ messages }) => {
                            return messages
                              ? Object.entries(messages).map(
                                  ([type, message]) => (
                                    <p className='fs-xs text-danger' key={type}>
                                      {message}
                                    </p>
                                  )
                                )
                              : null
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                {/* CTA */}
                <div className='d-flex gap-10 justify-content-end my-8 row'>
                  <div className={`w-100 text-end`}>
                    <button
                      // disabled={isLoading || !isFilled}
                      type='submit'
                      className='btn btn-primary w-25 me-10'
                    >
                      <div
                        hidden={!isLoading}
                        className='spinner-border spinner-border-sm me-5 text-white'
                        role='status'
                      />
                      {isLoading ? `Please wait...` : `Save Resources`}
                    </button>
                    <button
                      type='button'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                      className='btn btn-outline-danger w-25 dont-delete-btn'
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

// StartAClass.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]).isRequired,
//   title: PropTypes.string,
// }

export default AddAFile
