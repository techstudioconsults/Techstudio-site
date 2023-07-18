import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  AvatarDropdown,
  CalendarApp,
  DashboardNavbar,
} from '../../../components'
import Feedback from '../../../components/global/feedbacks/Feedback'
import SpinnerComponent from '../../../components/global/skeletonLoader/SpinnerComponent'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import StudentDashboardSectionTwo from '../Student/components/StudentDashboardSectionTwo'

import { useGetCardInfoMutation } from './api/dashboardApiSlice'
import { selectCards } from './api/dashboardSlice'
import AdminDashboardTab from './components/tab/AdminDashboardTab'
import { useViewAllCoursesMutation } from './courses/api/coursesApiSlice'
import { selectCourses } from './courses/api/coursesSlice'

import style from './adminDashboard.module.scss'

const AdminDashboard = () => {
  const { adminDashboard } = DASHBOARD_CONTENT

  const [viewAllCourses, coursesArg] = useViewAllCoursesMutation()
  const [getCardInfo] = useGetCardInfoMutation()

  const courses = useSelector(selectCourses)
  const cards = useSelector(selectCards)

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])
  const getCards = useCallback(async () => {
    await getCardInfo().unwrap()
  }, [getCardInfo])

  useEffect(() => {
    getCourses()
    getCards()
  }, [getCards, getCourses])

  const feedback = courses?.length ? (
    <AdminDashboardTab courses={courses} />
  ) : (
    <Feedback
      route={`/admin/courses/create`}
      btnName={`Create A Course`}
      message={`No Course Found`}
    />
  )

  return (
    <section className={style.adminDashboard}>
      <div className={style.dashboardDisplay}>
        {/* component was created first in the student dashboard */}
        <div className={style.sectionTwoLayout}>
          <div className={style.spanCol2}>
            <div>
              <DashboardNavbar isADB />
            </div>
            <div>
              <StudentDashboardSectionTwo
                content={adminDashboard.taskSummary}
                cardsAPI={cards}
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
        <div>{coursesArg.isLoading ? <SpinnerComponent /> : feedback}</div>
      </div>
    </section>
  )
}

export default AdminDashboard
