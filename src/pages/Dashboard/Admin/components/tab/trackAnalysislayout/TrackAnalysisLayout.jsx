import React from 'react'
import {
  AddAFile,
  DashboardResource,
  FeedbackCard,
  GraphCard,
  Portal,
  TutorList,
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
            {/* <p className='text-primary fs-sm fw-semibold'>Upload New file</p> */}
          </div>
          <Portal wrapperId='react-portal-modal-container'>
            <AddAFile /> {/** portal */}
          </Portal>
        </div>
        <DashboardResource />
      </div>
      <div className={[style.col2].join(' ')}>
        <GraphCard />
        <FeedbackCard
          title={`Classes`}
          message={`Javascript Fullstack January 2023`}
        />
      </div>
      <div className={[style.col3, `bg-white p-5`].join(' ')}>
        <TutorList />
      </div>
    </section>
  )
}

export default TrackAnalysisLayout
