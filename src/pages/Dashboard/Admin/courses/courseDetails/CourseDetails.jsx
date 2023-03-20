import React from 'react'
import { AvatarStack } from '../../../../../components'
import { Icon } from '@iconify/react'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'
import PropTypes from 'prop-types'

const CourseDetails = ({ courseDetails, show }) => {
  const { title, description, tutors, duration } = courseDetails
  const { imageList } = DASHBOARD_CONTENT

  return (
    <div className={`${style.courseDetails} ${show ? style.show : null}`}>
      <div className={style.courseBanner}>
        <p className={`${style.title} fw-bold mb-3`}>{title}</p>
        <p className={style.text}>{description}</p>
      </div>
      <div>
        <table className='table table-borderless table-lg align-middle'>
          <thead className='text-white'>
            <tr>
              <th scope='col'></th>
              <th scope='col' className='fw-light text-info'>
                <span className='me-1'>
                  <Icon width={`1.2rem`} icon='mdi:clock-time-five-outline' />
                </span>
                Duration:
              </th>
              <th scope='col' className='fw-light text-info'>
                <span className='me-1'>
                  <Icon width={`1.2rem`} icon='ic:baseline-laptop-mac' />
                </span>
                Classes:
              </th>
              <th scope='col' className='fw-light text-info'>
                <span className='me-1'>
                  <Icon width={`1.2rem`} icon='la:chalkboard-teacher' />
                </span>
                Tutor:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row' className='fw-light text-info'>
                Online:
              </th>
              <td>
                <div className='text-white'>{duration?.online} weeks</div>
              </td>
              <td>
                <div className='text-white'>N/A</div>
              </td>
              <td>
                <AvatarStack
                  tutors={tutors?.online}
                  dontShowMore
                  imageList={imageList}
                />
              </td>
            </tr>
            <tr>
              <th scope='row' className='fw-light text-info'>
                Weekday:
              </th>
              <td>
                <div className='text-white'>{duration?.weekday} weeks</div>
              </td>
              <td>
                <div className='text-white'>N/A</div>
              </td>
              <td>
                <AvatarStack
                  tutors={tutors?.weekday}
                  dontShowMore
                  imageList={imageList}
                />
              </td>
            </tr>
            <tr>
              <th scope='row' className='fw-light text-info'>
                Weekend:
              </th>
              <td>
                <div className='text-white'>{duration?.weekend} weeks</div>
              </td>
              <td>
                <div className='text-white'>N/A</div>
              </td>
              <td>
                <AvatarStack
                  tutors={tutors?.weekend}
                  dontShowMore
                  imageList={imageList}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

CourseDetails.propTypes = {
  courseDetails: PropTypes.object,
  courseID: PropTypes.string,
  show: PropTypes.bool,
}

export default CourseDetails
