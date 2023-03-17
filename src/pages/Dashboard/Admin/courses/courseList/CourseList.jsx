import PropTypes from 'prop-types'
import React from 'react'
import { AvatarStack } from '../../../../../components'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'

const CourseList = ({ course }) => {
  const { courseTitle, courseDuration, tutors } = course
  const { imageList } = DASHBOARD_CONTENT

  const handleClick = (event) => {
    console.log(event.currentTarget)
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={handleClick}
      className={`d-flex justify-content-between border p-3`}
    >
      <div className={style.tableHeadTitle}>
        <p className='fw-bold fs-sm'>{courseTitle}</p>
      </div>
      <div className={style.tableHead}>
        <ul className='d-flex flex-column justify-content-between'>
          <li>
            <span className='fw-bold'>{courseDuration.online} weeks</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>{courseDuration.weekday} weeks</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>{courseDuration.weekend} weeks</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
        </ul>
      </div>
      <div className={style.tableHead}>
        <ul className='d-flex flex-column justify-content-between'>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
        </ul>
      </div>
      <div className={style.tableHead}>
        <ul>
          <li>
            <AvatarStack dontShowMore imageList={imageList} />
          </li>
          <li>
            <AvatarStack dontShowMore imageList={imageList} />
          </li>
          <li>
            <AvatarStack dontShowMore imageList={imageList} />
          </li>
        </ul>
      </div>
    </div>
  )
}

CourseList.propTypes = {
  course: PropTypes.object.isRequired,
}

export default CourseList
