import React from 'react'
import { DashboardBanner, DashboardNavbar } from '../../../components'
import { DashboardLayout } from '../../../layout'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import StudentDashboardSectionThree from './components/StudentDashboardSectionThree'
import StudentDashboardSectionTwo from './components/StudentDashboardSectionTwo'

const index = () => {
  const { studentBoard } = DASHBOARD_CONTENT

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DashboardBanner content={studentBoard.banner} />
      <StudentDashboardSectionTwo content={studentBoard.taskSummary} />
      <StudentDashboardSectionThree />
    </DashboardLayout>
  )
}

export default index
