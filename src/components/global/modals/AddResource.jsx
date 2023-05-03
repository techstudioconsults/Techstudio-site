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
import Portal from '../POTAL/Portal'
import { SaveSuccess } from '../..'
import { useParams } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL

// eslint-disable-next-line react/prop-types
const AddAFile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const cancelButtonRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const courses = useSelector(selectCourses)
  const token = useSelector(selectCurrentToken)
  const { toast } = useToast()
  const { resource } = useParams()
  console.log(resource)
  const [selectValue, setSelectValue] = useState(null)
  const [fileValue, setFileValue] = useState(null)

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const coursesTitle = courses.map((course) => {
    return (
      <option key={course.id} value={course.id}>
        {course.title}
      </option>
    )
  })

  const handleFileChange = (event) => {
    setFileValue(event.target.files)
  }

  const handleCourseChange = (event) => {
    setSelectValue(event.target.value)
  }

  useEffect(() => {
    if (fileValue && selectValue) {
      setIsFilled(true)
    }
  }, [fileValue, selectValue])

  const submitResource = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData()
    const files = [...fileValue]
    files.forEach((file) => formData.append(`files`, file))
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )
      const res = await axios.patch(
        `${baseUrl}/resources/${selectValue}`,
        formData,
        credentials
      )
      console.log(res)
      if (res.data.success) {
        setIsLoading(false)
        cancelButtonRef.current.click()
        modal.show()
        // setFileValue(null)
        // setSelectValue(null)
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
      <Portal wrapperId='react-portal-modal-container'>
        <SaveSuccess
          content={{
            title: `New Resources Added Successfully!`,
            desc: `This resource has successfully being added. Kindly click continue to exit this page.`,
            courseID: selectValue,
            action: `resource`,
          }}
        />
      </Portal>

      <div
        className='modal fade'
        id='add-resource'
        tabIndex='-1'
        aria-labelledby='add-resource'
      >
        <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg '>
          <div className='modal-content'>
            <form
              onSubmit={submitResource}
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
                    <div className={`${style.inputs} w-100`}>
                      <select
                        onChange={handleCourseChange}
                        className='form-select'
                        aria-label='Default select example'
                        defaultValue={`Open this select menu`}
                      >
                        <option value='' disabled selected>
                          Select an option
                        </option>
                        {coursesTitle}
                      </select>
                    </div>
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
                          <input
                            onChange={handleFileChange}
                            id='resource'
                            type='file'
                            multiple
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
                      disabled={isLoading || !isFilled}
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
