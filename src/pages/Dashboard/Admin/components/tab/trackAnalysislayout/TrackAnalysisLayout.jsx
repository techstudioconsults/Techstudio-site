import React from 'react'
import {
  AddAFile,
  ClassDetails,
  DashboardResource,
  FeedbackCard,
  GraphCard,
  Portal,
} from '../../../../../../components'
import style from './trackAnalysis.module.scss'

const TrackAnalysisLayout = () => {
  return (
    <section className={[style.tracklayout].join(' ')}>
      <div className={[style.col1, `bg-white p-5`].join(' ')}>
        <div className='d-flex align-items-center justify-content-between mb-5'>
          <h5 className={[style.title, `mb-0`].join(' ')}>Resources</h5>
          <div
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#start-a-class'
          >
            <p className='text-primary fs-sm fw-semibold'>Upload New file</p>
          </div>
          <Portal wrapperId='react-portal-modal-container'>
            <AddAFile /> {/** portal */}
          </Portal>
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
        <ClassDetails isADB />
      </div>
    </section>
  )
}

export default TrackAnalysisLayout
