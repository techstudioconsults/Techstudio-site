import React from 'react'

import { DashboardBanner, DashboardNavbar } from '../../../components'
import { DashboardRightDrawer } from '../../../layout'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'

import StudentDashboardSectionThree from './components/StudentDashboardSectionThree'
import StudentDashboardSectionTwo from './components/StudentDashboardSectionTwo'

import style from './studentDashboard.module.scss'

const index = () => {
  const { studentBoard } = DASHBOARD_CONTENT

  return (
    <section className={style.studentDashboard}>
      <div className={style.dashboardDisplay}>
        <DashboardNavbar isTDB={false} />
        <DashboardBanner content={studentBoard.banner} />
        <StudentDashboardSectionTwo content={studentBoard.taskSummary} />
        <StudentDashboardSectionThree />
      </div>
      <div className={style.calendarDetails}>
        <DashboardRightDrawer />
      </div>
    </section>
  )
}

export default index
