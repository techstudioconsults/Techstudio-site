import React from 'react'
import { AvatarStack } from '../../../../../components'
import { Icon } from '@iconify/react'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCourseDetailsLoading } from '../../../../../app/api/appSlice'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'

const CourseDetails = ({ courseDetails, show }) => {
  // const { title, description, tutors, duration } = courseDetails
  const { imageList } = DASHBOARD_CONTENT
  const courseDetailsLoading = useSelector(selectCourseDetailsLoading)

  return (
    <div className={`${style.courseDetails} ${show ? style.show : null}`}>
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
            <table className='table table-borderless table-lg align-middle'>
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
              <tbody>
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
                    <div className='text-white'>N/A</div>
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
                    <div className='text-white'>N/A</div>
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
                    <div className='text-white'>N/A</div>
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
