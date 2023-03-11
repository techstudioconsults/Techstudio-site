import React from 'react'
import { CalendarApp, DashboardNavbar } from '../../../components'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import StudentDashboardSectionTwo from '../Student/components/StudentDashboardSectionTwo'
import style from './adminDashboard.module.scss'
import AdminDashboardTab from './components/tab/AdminDashboardTab'

const index = () => {
  const { adminDashboard } = DASHBOARD_CONTENT

  return (
    <section className={style.adminDashboard}>
      <div className={style.dashboardDisplay}>
        <DashboardNavbar isTDB />
        {/* component was created first in the student dashboard */}
        <div className={style.sectionTwoLayout}>
          <div className={style.spanCol2}>
            <StudentDashboardSectionTwo content={adminDashboard.taskSummary} />
          </div>
          <div className={style.calendar}>
            <CalendarApp />
          </div>
        </div>
        <div>
          <AdminDashboardTab />
        </div>
      </div>
    </section>
  )
}

export default index
