import React, { useState } from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import style from './usersTab.module.scss'
// import Feedback from '../../../global/feedbacks/Feedback'
import UsersCourseTab from './UsersCourseTab'
import { useDownloadAllTutorsMutation } from '../api/usersApiSlice'
import download from 'downloadjs'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { useLocation, useParams } from 'react-router-dom'
const baseUrl = process.env.REACT_APP_BASE_URL

const UserTab = ({ courses }) => {
  const [isTutorTab, setTutorTab] = useState(true)
  const [isLoading, setLoading] = useState()
  const token = useSelector(selectCurrentToken)
  const { courseID } = useParams()
  console.log(courseID)
  const dispatch = useDispatch()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/csv',
    },
  }

  const downloadAllTutors = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/users/tutors/download`,
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

  const downloadAllStudents = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/users/students/download`,
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
  const downloadStudentsByID = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/users/students/courses/${courseID}/download`,
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

  const handleTutorDownload = () => {
    courseID !== `all` ? downloadTutorsByID() : downloadAllTutors()
  }
  const handleStudentDownload = () => {
    courseID !== `all` ? downloadStudentsByID() : downloadAllStudents()
  }

  const handleTutorTab = () => {
    setTutorTab(true)
    dispatch({ type: `app/setUserType`, payload: `tutor` })
  }
  const handleStudentTab = () => {
    setTutorTab(false)
    dispatch({ type: `app/setUserType`, payload: `student` })
  }

  return (
    <section className={style.tab}>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
        <div className={['nav', style.tabList].join(' ')}>
          <div id={`classTab`} className={`${style.tablistGroup}`}>
            <li className={['nav-item', style.link].join(' ')}>
              <a
                className={['nav-link active', style.a].join(' ')}
                id='ongoing-tab'
                data-bs-toggle='tab'
                href='#ongoing'
                onClick={handleTutorTab}
              >
                Tutors
              </a>
            </li>
            <li className={['nav-item', style.link].join(' ')}>
              <a
                className={['nav-link', style.a].join(' ')}
                id='previous-tab'
                data-bs-toggle='tab'
                href='#previous'
                onClick={handleStudentTab}
              >
                Students
              </a>
            </li>
          </div>
          {/* <li className={['nav-item ', style.link, style.lessonLink].join(' ')}> */}
          <div className={`d-flex align-items-center gap-10`}>
            <div>
              <select
                disabled
                className='form-select'
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
                hidden={!isTutorTab}
                disabled={isLoading}
                className='btn btn-outline btn-outline-primary'
                onClick={handleTutorDownload}
                id='download-list'
              >
                <div
                  hidden={!isLoading}
                  className='spinner-border spinner-border-sm me-5 text-primary'
                  role='status'
                />
                {isLoading ? `Downloading...` : `Download List`}
              </button>
              <button
                hidden={isTutorTab}
                disabled={isLoading}
                className='btn btn-outline btn-outline-primary'
                onClick={handleStudentDownload}
                id='download-list'
              >
                <div
                  hidden={!isLoading}
                  className='spinner-border spinner-border-sm me-5 text-primary'
                  role='status'
                />
                {isLoading ? `Downloading...` : `Download List`}
              </button>
            </div>
          </div>
          {/* </li> */}
        </div>
      </div>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='ongoing'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className={style.listWrapper}>
            <UsersCourseTab type={`tutors`} courses={courses} />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='previous'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>
            <UsersCourseTab type={`students`} courses={courses} />
          </div>
        </div>
        {/* <div
          className='tab-pane fade'
          id='lesson'
          role='tabpanel'
          aria-labelledby='lesson-tab'
        >
          <div className={style.listWrapper}>
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
          </div>
        </div> */}
      </div>
    </section>
  )
}

UserTab.propTypes = {
  isTDB: PropTypes.bool,
  courses: PropTypes.array,
}

export default UserTab
