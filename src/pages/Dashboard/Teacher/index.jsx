import React from 'react'

import {
  AddAFile,
  DashboardBanner,
  DashboardNavbar,
  DashboardResource,
  Portal,
} from '../../../components'
import { DashboardRightDrawer } from '../../../layout'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'

import { RecentTask } from './components/recentTask/RecentTask'
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
        <section className='d-flex justify-content-between gap-5'>
          <div className='w-50 bg-white p-5 rounded rounded-xl'>
            <div className={style.resource}>
              <div className='d-flex align-items-center justify-content-between mb-5'>
                <h5 className={[style.title, `mb-0`].join(' ')}>Resources</h5>
                <p className={`fs-sm text-primary fw-semibold`}>View All</p>
                <Portal wrapperId='react-portal-modal-container'>
                  <AddAFile /> {/** portal */}
                </Portal>
              </div>
              <DashboardResource />
            </div>
          </div>
          <div className='w-50 bg-white'>
            <RecentTask />
          </div>
        </section>
      </div>
      <div className={style.calendarDetails}>
        <DashboardRightDrawer isTDB />
      </div>
    </section>
  )
}

export default index
