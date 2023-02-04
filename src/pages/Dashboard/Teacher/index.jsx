import React from 'react'
import { DashboardBanner, DashboardNavbar } from '../../../components'
import { DashboardRightDrawer } from '../../../layout'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import StudentDashboardSectionThree from './components/StudentDashboardSectionThree'
import StudentDashboardSectionTwo from './components/StudentDashboardSectionTwo'
import style from './teacherDashboard.module.scss'

const index = () => {
  const { teacherDashboard } = DASHBOARD_CONTENT

  return (
    <section className={style.studentDashboard}>
      <div className={style.dashboardDisplay}>
        <DashboardNavbar isTDB />
        <DashboardBanner content={teacherDashboard.banner} />
        <StudentDashboardSectionTwo content={teacherDashboard.taskSummary} />
        <StudentDashboardSectionThree isTDB />
      </div>
      <div className={style.calendarDetails}>
        <DashboardRightDrawer isTDB />
      </div>
    </section>
  )
}

export default index
