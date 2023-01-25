import React from 'react'
import { DashboardResource } from '../../../../components'
import style from './studentdashboardSections.module.scss'

const StudentDashboardSectionThree = () => {
  return (
    <section className={style.sectionThree}>
      <div className={style.resource}>
        <h5 className={style.title}>Resources</h5>
        <DashboardResource />
      </div>
      <div className={style.feedback_stats}></div>
    </section>
  )
}

export default StudentDashboardSectionThree
