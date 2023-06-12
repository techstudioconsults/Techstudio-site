import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
import axios from 'axios'
import download from 'downloadjs'

import { selectCurrentToken } from '../../../pages/Auth/api/authSlice'
import { selectCourses } from '../../../pages/Dashboard/Admin/courses/api/coursesSlice'
import { useGetStudentsByCourseIDMutation } from '../../../pages/Dashboard/Admin/users/api/usersApiSlice'
import Feedback from '../../global/feedbacks/Feedback'
import SpinnerComponent from '../../global/skeletonLoader/SpinnerComponent'
const baseUrl = process.env.REACT_APP_BASE_URL

const StudentCardDisplay = () => {
  const courses = useSelector(selectCourses)
  const [isLoading, setLoading] = useState(false)
  const [ID, setID] = useState(false)
  const [activeTab, setActiveTab] = useState(null)
  const [tab, setTab] = useState([])
  const [students, setStudents] = useState([])
  const token = useSelector(selectCurrentToken)
  const [getStudentsByCourseID, studentsrByCourseIDArgs] =
    useGetStudentsByCourseIDMutation()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/csv',
    },
  }

  const filterStudents = useCallback(
    async (courseID) => {
      setID(courseID)
      const res = await getStudentsByCourseID(courseID).unwrap()
      setStudents(res.data)
    },
    [getStudentsByCourseID]
  )

  const downloadStudentsByID = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/users/students/courses/${ID}/download`,
        credentials
      )
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

  const init = useCallback(() => {
    if (!activeTab && courses[0]?.id) {
      setActiveTab(courses[0]?.id)
      filterStudents(courses[0]?.id)
    }
  }, [activeTab, courses, filterStudents])

  useEffect(() => {
    init()
    setTab(
      courses.map((course) => {
        return (
          <button
            onClick={() => {
              filterStudents(course.id)
              setActiveTab(course.id)
            }}
            className={`fs-lg px-4 text-secondary bg-transparent ${
              activeTab === course.id
                ? 'border border-top-0 border-start-0 border-end-0 border-2 border-primary'
                : 'bg-transparent'
            }`}
            key={course.id}
            value={course.id}
          >
            <p style={{ width: `15rem` }}>{course.title}</p>
          </button>
        )
      })
    )
  }, [courses, filterStudents, activeTab, init])

  return (
    <>
      <section>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
          <p className='fs-2xl text-blue fw-bold'>{`Enrolled Students`}</p>
          <div>
            <div className={`d-flex align-items-center gap-3`}>
              <div>
                <select
                  disabled
                  className='form-select fs-sm'
                  aria-label='Default select example'
                  defaultValue={`Class Month/ Year`}
                >
                  <option value='1'>Class Month/ Year</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div>
                <button
                  disabled={isLoading}
                  className='btn  btn-primary'
                  onClick={downloadStudentsByID}
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
        <section
          style={{ borderBottom: `1px solid #B8B8B860`, overflow: `auto` }}
          className='course-tab d-flex align-item-center hide_scrollbar'
        >
          {tab}
        </section>
        <section className='container d-flex flex-column gap-5 mt-5'>
          <div className='row align-items-center  p-3'>
            <section className='col col-4'>
              <div className='d-flex gap-3'>
                <div>
                  <p className='fw-semibold text-dark'>{`Name`}</p>
                </div>
              </div>
            </section>
            <section className='col col-3'>
              <div>
                <p className=' fw-semibold text-dark'>{`Class`}</p>
              </div>
            </section>
            <section className='col col-3'>
              <div>
                <p className='fw-semibold text-dark'>{`Email`}</p>
              </div>
            </section>
            <section className='col col-2'>
              <div>
                <p className='fw-semibold text-dark'>{`Phone Number`}</p>
              </div>
            </section>
          </div>
          <section
            style={{ height: `25rem`, overflow: `auto` }}
            className='container d-flex flex-column gap-5'
          >
            {studentsrByCourseIDArgs?.isLoading ? (
              <SpinnerComponent />
            ) : students?.length ? (
              students?.map((student, index) => {
                return (
                  <div
                    key={index}
                    className='row align-items-center border border-1 p-3'
                  >
                    <section className='col col-4'>
                      <div className='d-flex gap-3'>
                        <div>
                          <p className='fw-bold text-blue'>
                            {student?.fullName}
                          </p>
                        </div>
                      </div>
                    </section>
                    <section className='col col-3'>
                      <div>
                        <p className='fs-sm fw-semibold text-secondary'>
                          {student?.schedule}
                        </p>
                      </div>
                    </section>
                    <section className='col col-3'>
                      <div>
                        <p className='fs-sm fw-semibold text-primary '>
                          {student?.email}
                        </p>
                      </div>
                    </section>
                    <section className='col col-2'>
                      <div>
                        <p className='fs-sm text-danger fw-semibold'>
                          {student?.phoneNumber}
                        </p>
                      </div>
                    </section>
                  </div>
                )
              })
            ) : (
              <Feedback message={`No Students Registered For This Course`} />
            )}
          </section>
        </section>
      </section>
    </>
  )
}

export default StudentCardDisplay
