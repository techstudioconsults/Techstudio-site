/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import {
  AddAFile,
  DashboardBanner,
  DashboardNavbar,
  DashboardResource,
  Portal,
} from '../../../components'
import { DashboardRightDrawer } from '../../../layout'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import { selectCurrentToken } from '../../Auth/api/authSlice'

import { RecentTask } from './components/recentTask/RecentTask'
import StudentDashboardSectionTwo from './components/StudentDashboardSectionTwo'

import style from './teacherDashboard.module.scss'

const baseUrl = import.meta.env.VITE_BASE_URL

const TutorDashboard = () => {
  const { teacherDashboard } = DASHBOARD_CONTENT
  const [profile, setProfile] = useState({})
  const token = useSelector(selectCurrentToken)

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getProfile = useCallback(async () => {
    const res = await axios.get(`${baseUrl}/tutors/profile`, credentials)
    setProfile(res?.data?.data)
  }, [credentials])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProfile()
  }, [])

  return (
    <section className={style.studentDashboard}>
      <div className={style.dashboardDisplay}>
        <DashboardNavbar isTDB />
        <DashboardBanner profile={profile} content={teacherDashboard?.banner} />
        <StudentDashboardSectionTwo
          profile={profile}
          content={teacherDashboard?.taskSummary}
        />
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

export default TutorDashboard
