import React from 'react'

import { JobRequirementForm } from '../../..'

import style from './job.module.scss'

const JobRequirementModal = () => {
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch demo modal
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div
          className={[
            'modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-md-down',
            style.body,
          ].join(' ')}
        >
          <div className={['modal-content px-lg-12', style.content].join(' ')}>
            <div className='modal-header py-10 align-items-center justify-content-center text-center'>
              <h3 className='modal-title fs-3xl' id='exampleModalLabel'>
                Job Requirement
              </h3>
              {/* <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button> */}
            </div>
            <div className='modal-body hide_scrollbar'>
              <JobRequirementForm />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobRequirementModal
