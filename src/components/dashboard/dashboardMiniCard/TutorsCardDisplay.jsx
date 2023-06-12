import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
import axios from 'axios'
import download from 'downloadjs'

import { selectCurrentToken } from '../../../pages/Auth/api/authSlice'
import { selectCourses } from '../../../pages/Dashboard/Admin/courses/api/coursesSlice'
import {
  useGetAllTutorsMutation,
  useGetTutorsByCourseIDMutation,
} from '../../../pages/Dashboard/Admin/users/api/usersApiSlice'
import Feedback from '../../global/feedbacks/Feedback'
import SpinnerComponent from '../../global/skeletonLoader/SpinnerComponent'

const baseUrl = process.env.REACT_APP_BASE_URL

const TutorsCardDisplay = () => {
  const [isLoading, setLoading] = useState(false)
  const [isAll, setAll] = useState(true)
  const [courseID, setCourseID] = useState(`all`)
  const [tutors, setTutors] = useState([])
  const courses = useSelector(selectCourses)
  const token = useSelector(selectCurrentToken)
  const [getAllTutors, tutorsArgs] = useGetAllTutorsMutation()
  const [getTutorsByCourseID, tutorByCourseIDArgs] =
    useGetTutorsByCourseIDMutation()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/csv',
    },
  }

  const getTutors = useCallback(async () => {
    setAll(true)
    const res = await getAllTutors().unwrap()
    setTutors(res.data)
  }, [getAllTutors])

  const filterTutors = async (e) => {
    setCourseID(e.target.value)
    if (e.target.value === `all`) {
      getTutors()
    } else {
      setAll(false)
      const res = await getTutorsByCourseID(e.target.value).unwrap()
      setTutors(res.data)
    }
  }

  const downloadAllTutors = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/users/tutors/download`,
        credentials
      )
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
        const blob = new Blob([res.data], { type: 'text/csv' })
        download(blob, 'certificate.csv')
      }
    } catch (err) {
      // setLoading(false)
      // setErrorMessage(err.response.data.message)
      // toast.show()
    }
  }
  const downloadTutorsByID = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/users/tutors/courses/${courseID}/download`,
        credentials
      )
      console.log(res.data)
      if (res.status === 200) {
        setLoading(false)
        const blob = new Blob([res.data], { type: 'text/csv' })
        download(blob, 'certificate.csv')
      }
    } catch (err) {
      // setLoading(false)
      // setErrorMessage(err.response.data.message)
      // toast.show()
    }
  }

  useEffect(() => {
    // getCourses()
    getTutors()
  }, [getTutors])

  const courseOption = courses.map((course) => {
    return (
      <option key={course.id} value={course.id}>
        {course.title}
      </option>
    )
  })

  return (
    <>
      <section>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
          <p className='fs-2xl text-blue fw-bold'>{`Tutors`}</p>
          <div>
            <div className={`d-flex align-items-center gap-3`}>
              <div>
                <select
                  onChange={filterTutors}
                  className='form-select fs-sm'
                  aria-label='Default select example'
                  defaultValue={`Class Month/ Year`}
                >
                  <option hidden value='1'>
                    Courses
                  </option>
                  <option value='all'>All</option>
                  {courseOption}
                </select>
              </div>
              <div>
                <button
                  hidden={!isAll}
                  disabled={isLoading}
                  className='btn btn-primary'
                  onClick={downloadAllTutors}
                  id='download-list'
                >
                  <div
                    hidden={!isLoading}
                    className='spinner-border spinner-border-sm me-5 text-white'
                    role='status'
                  />
                  {isLoading ? `Downloading...` : `Download List`}
                </button>
                <button
                  hidden={isAll}
                  disabled={isLoading}
                  className='btn  btn-primary'
                  onClick={downloadTutorsByID}
                  id='download-list'
                >
                  <div
                    hidden={!isLoading}
                    className='spinner-border spinner-border-sm me-5 text-white'
                    role='status'
                  />
                  {isLoading ? `Downloading...` : `Download List`}
                </button>
              </div>
            </div>
            {/* </li> */}
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <section>
          <div className='row align-items-center px-5'>
            <section className='col col-3'>
              <div className='d-flex gap-3'>
                <div>
                  <p className=' text-secondary'>{`Name`}</p>
                </div>
              </div>
            </section>
            <section className='col col-3'>
              <div>
                <p className='  text-secondary'>{`Course`}</p>
              </div>
            </section>
            <section className='col col-3'>
              <div>
                <p className=' text-secondary'>{`Email`}</p>
              </div>
            </section>
            <section className='col col-2'>
              <div>
                <p className=' text-secondary'>{`Phone Number`}</p>
              </div>
            </section>
            <section className='col col-1'>
              <div>
                <p className=' text-secondary'>{`Status`}</p>
              </div>
            </section>
          </div>
          <section
            style={{ height: `30rem`, overflow: `auto` }}
            className='container d-flex flex-column gap-5 mt-5'
          >
            {tutorsArgs.isLoading || tutorByCourseIDArgs.isLoading ? (
              <SpinnerComponent />
            ) : tutors?.length ? (
              tutors?.map((tutor, index) => {
                return (
                  <div
                    key={index}
                    className='row align-items-center border border-1 px-2 py-1'
                  >
                    <section className='col col-3'>
                      <div className='d-flex gap-3'>
                        <div>
                          <p className='fw-bold text-blue'>{tutor?.fullName}</p>
                        </div>
                      </div>
                    </section>
                    <section className='col col-3'>
                      <div>
                        <p className='fs-sm text-secondary'>
                          {tutor?.course[0]}
                        </p>
                      </div>
                    </section>
                    <section className='col col-3'>
                      <div>
                        <p className='fs-sm text-primary '>{tutor?.email}</p>
                      </div>
                    </section>
                    <section className='col col-2'>
                      <div>
                        <p className='fs-sm text-primary '>
                          {tutor?.phoneNumber}
                        </p>
                      </div>
                    </section>
                    <section className='col col-1'>
                      <div
                        className='text-danger'
                        style={{ cursor: `pointer` }}
                      >
                        <button
                          className={`text-danger btn btn-outline btn-sm  fs-sm`}
                        >
                          {tutor?.status}
                        </button>
                      </div>
                    </section>
                  </div>
                )
              })
            ) : (
              <Feedback message={`No Tutor Registered For This Course`} />
            )}
          </section>
        </section>
      </section>
    </>
  )
}

export default TutorsCardDisplay
