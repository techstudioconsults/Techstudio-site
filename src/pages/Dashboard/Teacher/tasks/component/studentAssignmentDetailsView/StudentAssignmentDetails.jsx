import React from 'react'

import ResourceListDisplay from '../../../../../../components/dashboard/resources/ResourceListDisplay'
import { DASHBOARD_CONTENT } from '../../../../../../layout/Layout/dashboardLayout/content'

import style from './studentAssignment.module.scss'

const StudentAssignmentDetails = () => {
  const { studentBoard } = DASHBOARD_CONTENT

  const fileDisplay = studentBoard.resources.PDF.slice(0, 4).map((file) => {
    return <ResourceListDisplay key={file.id} file={file} />
  })
  return (
    <div>
      <div className={[style.Modalbody].join(' ')}>
        <h6 className={[style.title, `text-black fw-semibold`].join(' ')}>
          Fundamentals of Design
        </h6>
        <div className={style.desc}>
          <p className={[style.subTitle, `fs-sm my-3`].join(' ')}>
            Description
          </p>
          <div className={[`border border-1 p-2`]}>
            <p className={[`fs-sm`]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              laboriosam enim nemo laborum voluptatibus explicabo omnis vitae
              modi magnam velit a repellat vel, eius harum neque nostrum.
              Eveniet omnis fuga explicabo quasi deleniti illum aut minima
              repellat, consequatur natus corrupti voluptatibus delectus harum
              hic quis deserunt ipsa neque velit accusamus.
            </p>
          </div>
        </div>
        <div className='d-flex mt-5 gap-3 fs-sm'>
          <div className='group-63'>
            <div className='url fw-semibold'>URL:</div>
          </div>
          <div className='text-lightBlue fw-semibold'>
            www.figma/gtbsfsbnjks/.com
          </div>
        </div>
        <div className='my-10'>
          <h5 className='fs-sm'>Attachments</h5>
          {fileDisplay}
        </div>
        <div>
          <h5 className='fs-sm'>Feedback</h5>
          <div className={style.search}>
            <input
              type='text'
              id='fullName'
              className='form-control'
              aria-describedby='passwordHelpBlock'
              placeholder='Type your comment here'
            />
          </div>
          <div className='d-flex justify-content-end gap-10 align-items-center'>
            <button className='btn btn-primary fs-sm px-5'>Save Changes</button>
            <button className='btn btn-outline border fs-sm px-5'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentAssignmentDetails
