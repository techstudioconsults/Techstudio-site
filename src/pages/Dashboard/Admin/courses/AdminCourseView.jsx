import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  AvatarDropdown,
  Button,
  CalendarOffCanvas,
} from '../../../../components'
import style from './adminCourse.module.scss'
import { useViewAllCoursesMutation } from './api/coursesApiSlice'
import { selectCourseDetails, selectCourses } from './api/coursesSlice'
import CourseDetails from './courseDetails/CourseDetails'
import CourseList from './courseList/CourseList'

const AdminCourseView = () => {
  const [viewAllCourses, { isLoading }] = useViewAllCoursesMutation()
  const courses = useSelector(selectCourses)
  const courseDetails = useSelector(selectCourseDetails)

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  // map the courses data to the courseslist component
  const courseList = courses?.map((course, index) => {
    return <CourseList key={index} course={course} />
    // return <p key={index}>courses</p>
  })

  return (
    <section className={style.courseView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Courses</h4>
          <div className='d-flex align-items-center gap-10'>
            <div className={style.input}>
              <input type='text' placeholder='Search for courses and more' />
            </div>
            <div className={[`d-none d-md-flex gap-3`].join(' ')}>
              <Button
                linkHref={`/admin/courses/create`}
                linkText='Create Course'
                solidBtn
                navBtn
                height={`40`}
              />
            </div>
          </div>
          <div className='d-xl-none'>
            <CalendarOffCanvas>
              <CourseDetails courseDetails={courseDetails} />
            </CalendarOffCanvas>
          </div>
        </div>
        <div className='my-10'>
          <div className={`d-flex justify-content-between`}>
            <div className={style.tableHeadTitle}>
              <p>Course Title</p>
            </div>
            <div className={style.tableHead}>
              <p>Duration</p>
            </div>
            <div className={style.tableHead}>
              <p>Classes</p>
            </div>
            <div className={style.tableHead}>
              <p>Tutors</p>
            </div>
          </div>
          <div className='mt-5 d-flex flex-column gap-5'>{courseList}</div>
        </div>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
        <CourseDetails courseDetails={courseDetails} />
      </div>
    </section>
  )
}

export default AdminCourseView
