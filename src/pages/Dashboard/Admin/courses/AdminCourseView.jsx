/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AvatarDropdown, SkeletonLoader } from '../../../../components'
import style from './adminCourse.module.scss'
import { useViewAllCoursesMutation } from './api/coursesApiSlice'
import { selectCourseDetails, selectCourses } from './api/coursesSlice'
import CourseDetails from './courseDetails/CourseDetails'
import CourseList from './courseList/CourseList'
import 'react-loading-skeleton/dist/skeleton.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const AdminCourseView = () => {
  const [viewAllCourses, { isLoading }] = useViewAllCoursesMutation()
  const [isShowDetails, setShowDetails] = useState(false)
  const courses = useSelector(selectCourses)
  const courseDetails = useSelector(selectCourseDetails)

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const showDetailsBox = () => {
    setShowDetails(true)
  }

  // map the courses data to the courseslist component
  const courseList = courses?.map((course) => {
    return (
      <CourseList
        showDetailsBox={showDetailsBox}
        key={course.id}
        course={course}
      />
    )
  })

  return (
    <section className={style.courseView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Courses</h4>
          <div className='d-flex align-items-center gap-3'>
            {/* make this search input a stand alone component */}
            <div className={`input-group border rounded ${style.searchInput}`}>
              <input
                type={`search`}
                className='form-control border border-0 text-secondary h-100'
                aria-describedby='search'
                placeholder='Search for courses, classes, students and more'
              />
              <div
                className={`input-group-text bg-white border border-0 text-secondary h-100`}
                id='passwordHelpBlock'
              >
                <Icon width={`1.2rem`} icon={`ri:search-line`} />
              </div>
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
            {isLoading ? <SkeletonLoader /> : courseList}
          </div>
        </div>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
        <CourseDetails show={isShowDetails} courseDetails={courseDetails} />
      </div>
    </section>
  )
}

export default AdminCourseView
