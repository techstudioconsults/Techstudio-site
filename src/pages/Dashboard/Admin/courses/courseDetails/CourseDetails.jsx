import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { selectCourseDetailsLoading } from '../../../../../app/api/appSlice'
import { AvatarStack } from '../../../../../components'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'

import style from '../adminCourse.module.scss'

const CourseDetails = ({ courseDetails, show }) => {
  // const { title, description, tutors, duration } = courseDetails
  const { imageList } = DASHBOARD_CONTENT
  const courseDetailsLoading = useSelector(selectCourseDetailsLoading)
  // ${show ? style.show : null}
  return (
    <div className={`${style.courseDetails} `}>
      {courseDetailsLoading ? (
        <div className='h-100 d-flex align-items-center justify-content-center'>
          <SpinnerComponent color={`white`} />
        </div>
      ) : (
        <>
          <div className={`${style.courseBanner} hide_scrollbar`}>
            <p className={`${style.title} fw-bold mb-3`}>
              {courseDetails?.title}
            </p>
            <p className={style.text}>{courseDetails?.description}</p>
          </div>
          <div>
            <table className={` table table-borderless table-lg align-middle`}>
              <thead className='text-white'>
                <tr>
                  <th scope='col'></th>
                  <th scope='col' className='fw-light text-info'>
                    <span className='me-1'>
                      <Icon
                        width={`1.2rem`}
                        icon='mdi:clock-time-five-outline'
                      />
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
              <tbody className='bg-transparent'>
                <tr>
                  <th scope='row' className='fw-light text-info'>
                    Online:
                  </th>
                  <td>
                    <div className='text-white'>
                      {courseDetails?.duration?.online} weeks
                    </div>
                  </td>
                  <td>
                    <div className='text-white'>
                      {courseDetails?.classCount?.onlineCount}
                    </div>
                  </td>
                  <td>
                    <AvatarStack
                      tutors={courseDetails?.tutors?.online}
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
                    <div className='text-white'>
                      {courseDetails?.duration?.weekday} weeks
                    </div>
                  </td>
                  <td>
                    <div className='text-white'>
                      {courseDetails?.classCount?.weekdayCount}
                    </div>
                  </td>
                  <td>
                    <AvatarStack
                      tutors={courseDetails?.tutors?.weekday}
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
                    <div className='text-white'>
                      {courseDetails?.duration?.weekend} weeks
                    </div>
                  </td>
                  <td>
                    <div className='text-white'>
                      {courseDetails?.classCount?.weekendCount}
                    </div>
                  </td>
                  <td>
                    <AvatarStack
                      tutors={courseDetails?.tutors?.weekend}
                      dontShowMore
                      imageList={imageList}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

CourseDetails.propTypes = {
  courseDetails: PropTypes.object,
  courseID: PropTypes.string,
  show: PropTypes.bool,
}

export default CourseDetails
