import React from 'react'
import { AvatarStack } from '../../../../../components'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'

const CourseList = () => {
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
        <p className='fw-bold fs-sm'>Javascript Fullstack Web Developement</p>
      </div>
      <div className={style.tableHead}>
        <ul className='d-flex flex-column justify-content-between'>
          <li>
            <span className='fw-bold'>4 Months</span>{' '}
            <span className='text-primary'>(weekend)</span>
          </li>
          <li>
            <span className='fw-bold'>4 Months</span>{' '}
            <span className='text-primary'>(weekend)</span>
          </li>
          <li>
            <span className='fw-bold'>6 Months</span>{' '}
            <span className='text-primary'>(weekend)</span>
          </li>
        </ul>
      </div>
      <div className={style.tableHead}>
        <ul className='d-flex flex-column justify-content-between'>
          <li>
            <span className='fw-bold'>4</span>{' '}
            <span className='text-primary'>(weekend)</span>
          </li>
          <li>
            <span className='fw-bold'>2</span>{' '}
            <span className='text-primary'>(weekend)</span>
          </li>
          <li>
            <span className='fw-bold'>2</span>{' '}
            <span className='text-primary'>(weekend)</span>
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

export default CourseList
