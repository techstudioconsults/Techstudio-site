import React from 'react'
import { AvatarStack } from '../../../../../components'
import { Icon } from '@iconify/react'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'
import PropTypes from 'prop-types'

const CourseDetails = ({ courseDetails, show }) => {
  const { title, description, tutors, duration } = courseDetails
  const { imageList } = DASHBOARD_CONTENT

  // id === courseID ? setActive(true) : setActive(false)
  // id === courseDetails.id ? console.log(true) : console.log(false)

  return (
    <div className={`${style.courseDetails} ${show ? style.show : null}`}>
      <div className={style.courseBanner}>
        <p className={`${style.title} fw-bold mb-3`}>{title}</p>
        <p className={style.text}>{description}</p>
      </div>
      <div>
        <table className='table'>
          <thead className='text-white'>
            <tr>
              <th scope='col'>
                <span className='me-1'>
                  <Icon
                    width={`1.5rem`}
                    height={`1.5rem`}
                    icon='mdi:clock-time-five-outline'
                  />
                </span>
                Duration
              </th>
              <th scope='col'>
                <span className='me-1'>
                  <Icon
                    width={`1.5rem`}
                    height={`1.5rem`}
                    icon='la:chalkboard-teacher'
                  />
                </span>
                Tutor
              </th>
              <th scope='col'>
                <span className='me-1'>
                  <Icon
                    width={`1.5rem`}
                    height={`1.5rem`}
                    icon='ic:baseline-laptop-mac'
                  />
                </span>
                Classes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='text-white'>{duration?.online} weeks</div>
                <div>(online)</div>
              </td>
              <td>
                <AvatarStack
                  tutors={tutors?.online}
                  dontShowMore
                  imageList={imageList}
                />
                {/* <span>(online)</span> */}
              </td>
              <td>
                <div className='text-white'>N/A</div>
                <div>(online)</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='text-white'>{duration?.weekday} weeks</div>
                <div>(weekday)</div>
              </td>
              <td>
                <AvatarStack
                  tutors={tutors?.weekday}
                  dontShowMore
                  imageList={imageList}
                />
                {/* <span>(online)</span> */}
              </td>
              <td>
                <div className='text-white'>N/A</div>
                <div>(weekday)</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='text-white'>{duration?.weekend} weeks</div>
                <div>(weekend)</div>
              </td>
              <td>
                <AvatarStack
                  tutors={tutors?.weekend}
                  dontShowMore
                  imageList={imageList}
                />
                {/* <span>(online)</span> */}
              </td>
              <td>
                <div className='text-white'>N/A</div>
                <div>(weekend)</div>
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
