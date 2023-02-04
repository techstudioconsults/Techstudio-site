import React from 'react'
import PropTypes from 'prop-types'

import {
  DashboardResource,
  FeedbackCard,
  GraphCard,
} from '../../../../components'
import style from './studentdashboardSections.module.scss'

const StudentDashboardSectionThree = ({ isTDB }) => {
  return (
    <section className={style.sectionThree}>
      <div className={style.resource}>
        <div className='d-flex align-items-center justify-content-between mb-5'>
          <h5 className={[style.title, `mb-0`].join(' ')}>Resources</h5>
          <span
            className={['text-primary fs-sm', isTDB ? `d-flex` : `d-none`].join(
              ' '
            )}
          >
            Upload New file
          </span>
        </div>
        <DashboardResource />
      </div>
      <div className={style.feedback_stats}>
        <GraphCard />
        <FeedbackCard
          title={`Your inbox`}
          message={`I am having issues uploading assignment On XD sir, can I have it sent as…`}
        />
      </div>
    </section>
  )
}

StudentDashboardSectionThree.propTypes = {
  isTDB: PropTypes.bool,
}

export default StudentDashboardSectionThree
