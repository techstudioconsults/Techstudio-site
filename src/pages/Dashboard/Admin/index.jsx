import React from 'react'
import {
  AvatarDropdown,
  CalendarApp,
  DashboardNavbar,
} from '../../../components'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import StudentDashboardSectionTwo from '../Student/components/StudentDashboardSectionTwo'
import style from './adminDashboard.module.scss'
import AdminDashboardTab from './components/tab/AdminDashboardTab'

const index = () => {
  const { adminDashboard } = DASHBOARD_CONTENT

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
        <div>
          <AdminDashboardTab />
        </div>
      </div>
    </section>
  )
}

export default index
