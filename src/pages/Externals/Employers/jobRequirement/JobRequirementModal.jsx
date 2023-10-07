import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { JobRequirementForm } from '../../../../components'

import style from './job.module.scss'

const JobRequirementModal = () => {
  return (
    <div>
      <div
        className={[
          'container modal-fullscreen-md-down py-20',
          style.body,
        ].join(' ')}
      >
        <header className='d-flex flex-column flex-lg-row align-items-center mb-lg-10 gap-lg-60'>
          <Link to={`/employers`}>
            <button className='px-5'>
              <Icon width={`2rem`} icon={`ic:round-chevron-left`} /> CANCEL & GO
              BACK
            </button>
          </Link>

          <h3
            className='modal-title text-center fw-bold fs-3xl my-5 my-lg-0'
            id='exampleModalLabel'
          >
            Job Requirement
          </h3>
          <div></div>
        </header>
        <div className={['modal-content px-lg-12', style.content].join(' ')}>
          <div className='modal-header py-10 align-items-center justify-content-center text-center'>
            {/* <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button> */}
          </div>
          <div className='modal-body hide_scrollbar px-5'>
            <JobRequirementForm />
          </div>
          <div className='modal-footer mb-10 px-5'>
            <button type='button' className='btn btn-primary px-10'>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobRequirementModal
