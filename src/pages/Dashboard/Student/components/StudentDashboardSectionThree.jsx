import React from 'react'
import {
  DashboardResource,
  FeedbackCard,
  GraphCard,
} from '../../../../components'
import style from './studentdashboardSections.module.scss'

const StudentDashboardSectionThree = () => {
  return (
    <section className={style.sectionThree}>
      <div className={style.resource}>
        <h5 className={style.title}>Resources</h5>
        <DashboardResource />
      </div>
      <div className={style.feedback_stats}>
        <GraphCard />
        <FeedbackCard />
      </div>
    </section>
  )
}

export default StudentDashboardSectionThree
