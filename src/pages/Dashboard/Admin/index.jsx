import React from 'react'
import { DashboardNavbar } from '../../../components'
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
        <StudentDashboardSectionTwo content={adminDashboard.taskSummary} />
        <div>
          <AdminDashboardTab />
        </div>
      </div>
    </section>
  )
}

export default index
