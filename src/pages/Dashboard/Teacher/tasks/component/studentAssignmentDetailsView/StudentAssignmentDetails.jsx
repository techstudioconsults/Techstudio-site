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
        <h6 className={[style.title, `text-black`].join(' ')}>
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
        </div>
      </div>
    </div>
  )
}

export default StudentAssignmentDetails
