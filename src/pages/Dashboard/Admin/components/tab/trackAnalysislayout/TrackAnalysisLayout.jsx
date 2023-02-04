import React from 'react'
import {
  ClassDetails,
  DashboardResource,
  FeedbackCard,
  GraphCard,
} from '../../../../../../components'
import style from './trackAnalysis.module.scss'

const TrackAnalysisLayout = () => {
  return (
    <section className={[style.tracklayout].join(' ')}>
      <div className={[style.col1, `bg-white p-5`].join(' ')}>
        <div className='d-flex align-items-center justify-content-between mb-5'>
          <h5 className={[style.title, `mb-0`].join(' ')}>Resources</h5>
          <span className={['text-primary fs-sm'].join(' ')}>
            Upload New file
          </span>
        </div>
        <DashboardResource isTDB />
      </div>
      <div className={[style.col2].join(' ')}>
        <GraphCard />
        <FeedbackCard
          title={`Your inbox`}
          message={`I am having issues uploading assignment On XD sir, can I have it sent as…`}
        />
      </div>
      <div className={[style.col3, `bg-white p-5`].join(' ')}>
        <ClassDetails />
      </div>
    </section>
  )
}

export default TrackAnalysisLayout
