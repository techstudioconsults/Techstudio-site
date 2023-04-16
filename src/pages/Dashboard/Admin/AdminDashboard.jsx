import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  AvatarDropdown,
  CalendarApp,
  DashboardNavbar,
} from '../../../components'
import Feedback from '../../../components/global/feedbacks/Feedback'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import StudentDashboardSectionTwo from '../Student/components/StudentDashboardSectionTwo'
import style from './adminDashboard.module.scss'
import AdminDashboardTab from './components/tab/AdminDashboardTab'
import { useViewAllCoursesMutation } from './courses/api/coursesApiSlice'
import { selectCourses } from './courses/api/coursesSlice'

const AdminDashboard = () => {
  const { adminDashboard } = DASHBOARD_CONTENT

  const [viewAllCourses] = useViewAllCoursesMutation()
  const courses = useSelector(selectCourses)

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const feedback = courses?.length ? (
    <AdminDashboardTab courses={courses} />
  ) : (
    <Feedback message={`Create a course in order to create a class`} />
  )

  return (
    <section className={style.adminDashboard}>
      <div className={style.dashboardDisplay}>
        {/* component was created first in the student dashboard */}
        <div className={style.sectionTwoLayout}>
          <div className={style.spanCol2}>
            <div>
              <DashboardNavbar isTDB />
            </div>
            <div>
              <StudentDashboardSectionTwo
                content={adminDashboard.taskSummary}
              />
            </div>
          </div>

          <div className={style.calendar}>
            <div className='d-flex justify-content-end'>
              <AvatarDropdown />
            </div>

            <CalendarApp />
          </div>
        </div>
        <div>{feedback}</div>
      </div>
    </section>
  )
}

export default AdminDashboard
