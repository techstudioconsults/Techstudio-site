/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AvatarDropdown, SearchComponent } from '../../../../components'
import style from './adminCourse.module.scss'
import { useViewAllCoursesMutation } from './api/coursesApiSlice'
import { selectCourseDetails, selectCourses } from './api/coursesSlice'
import CourseDetails from './courseDetails/CourseDetails'
import CourseList from './courseList/CourseList'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import Feedback from '../../../../components/global/feedbacks/Feedback'
import SpinnerComponent from '../../../../components/global/skeletonLoader/SpinnerComponent'
import { selectClassDetailOpen } from '../../../../app/api/appSlice'

const AdminCourseView = () => {
  const [viewAllCourses, { isLoading }] = useViewAllCoursesMutation()
  const courses = useSelector(selectCourses)
  const courseDetails = useSelector(selectCourseDetails)
  const courseDetailOpen = useSelector(selectClassDetailOpen)
  const dispatch = useDispatch()

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const courseList = courses.length ? ( // map the courses data to the courseslist component
    courses?.map((course) => {
      return <CourseList key={course.id} course={course} />
    })
  ) : (
    <Feedback
      route={`/admin/courses/create`}
      btnName={`Create Course`}
      message={`No Course Found`}
    />
  )

  useEffect(() => {
    dispatch({ type: 'app/setCourseDetailOpen', payload: true })
  }, [dispatch])

  return (
    <section className={`${style.courseView} h-100`}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Courses</h4>
          <div className='d-flex align-items-center gap-3'>
            {/* make this search input a stand alone component */}
            <div
              className={`input-group border rounded overflow-hidden ${style.searchInput}`}
            >
              <SearchComponent />
            </div>
            <div>
              <Link to={`/admin/courses/create`}>
                <button
                  style={{ height: `2.25rem`, width: `9.938rem` }}
                  className='btn btn-primary fs-sm'
                >
                  Create Course
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <div className='container'>
            <div className='row'>
              <div className='col-5'>
                <p className='text-secondary'>Course Title</p>
              </div>
              <div className='col-2'>
                <p className='text-secondary'>Duration</p>
              </div>
              <div className='col-2'>
                <p className='text-secondary'>Classes</p>
              </div>
              <div className='col-2'>
                <p className='text-secondary'>Tutors</p>
              </div>
              <div className='col-1'></div>
            </div>
          </div>
          <div className='mt-5 d-flex flex-column gap-5'>
            {isLoading ? <SpinnerComponent /> : courseList}
          </div>
        </div>
      </div>
      <div hidden={courseDetailOpen} className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
        <CourseDetails courseDetails={courseDetails} />
      </div>
    </section>
  )
}

export default AdminCourseView
