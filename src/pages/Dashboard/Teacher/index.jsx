import React from 'react'
import { Button, DashboardBanner, DashboardNavbar } from '../../../components'
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
        <div className='my-5 w-25 d-md-none'>
          <Button
            linkHref={`/`}
            linkText='Create Class'
            solidBtn
            navBtn
            width={`9`}
            height={`36`}
          />
        </div>
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
