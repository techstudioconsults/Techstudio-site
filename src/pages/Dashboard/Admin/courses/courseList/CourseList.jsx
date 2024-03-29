/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useState } from 'react'
// import { useGetClassByCourseIDMutation } from '../../classes/api/classApiSlice'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import PropTypes from 'prop-types'

import { AvatarStack, DeleteModal, Portal } from '../../../../../components'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import { useViewCoursesDetailsMutation } from '../api/coursesApiSlice'

import style from '../adminCourse.module.scss'

const CourseList = ({ course }) => {
  const navigate = useNavigate()
  const [showStatus, setShowStatus] = useState(true)
  const [active, setActive] = useState(false)
  const { id, title, duration, tutors, classCount } = course
  const { imageList } = DASHBOARD_CONTENT
  const dispatch = useDispatch()
  const location = useLocation()
  const [viewCoursesDetails] = useViewCoursesDetailsMutation()

  const setActiveCourse = useCallback(() => {
    location.search.includes(id) ? setActive(true) : setActive(false)
  }, [id, location.search])

  const handleClick = async () => {
    const queryParams = new URLSearchParams(location.search)
    queryParams.set('', id)
    const newSearch = queryParams.toString()
    navigate(`?${newSearch}`)
    dispatch({
      type: `app/setcourseDetailsLoading`,
      payload: true,
    })
    dispatch({
      type: `app/setCourseDetailOpen`,
      payload: false,
    })

    const res = await viewCoursesDetails(id).unwrap()
    if (res.success) {
      dispatch({
        type: `app/setcourseDetailsLoading`,
        payload: false,
      })
    }
  }

  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`del-${id}-modal`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  const handleMouseEnter = () => {
    setShowStatus(false)
  }
  const handleMouseLeave = () => {
    setShowStatus(true)
  }

  useEffect(() => {
    setActiveCourse()
  }, [setActiveCourse])

  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            title: `${`Are you sure you want to delete this course?`}`,
            desc: `${title} Course has successfully being deleted. Kindly click continue to exit this page.`,
            courseID: id,
            action: `delete-course`,
          }}
        />
      </Portal>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`btn btn-lg h-100 d-flex justify-content-between align-items-start text-dark border p-0 py-5 ps-2 rounded-0 ${
          active ? style.courseList : null
        }`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <div className={style.tableHeadTitle}>
                <p className='fw-bold fs-sm text-start'>{title}</p>
                {/* <p className='fs-xs text-start text-danger'>{id}</p> */}
              </div>
            </div>
            <div className='col-2'>
              <div className={`${style.tableHead} h-100`}>
                <ul className='d-flex flex-column align-items-start justify-content-between text-muted'>
                  <li>
                    <span className='fw-bold'>{duration?.online} weeks</span>{' '}
                    <span hidden={showStatus} className='text-danger'>
                      (online)
                    </span>
                  </li>
                  <li>
                    <span className='fw-bold'>{duration?.weekday} weeks</span>{' '}
                    <span hidden={showStatus} className='text-danger'>
                      (weekday)
                    </span>
                  </li>
                  <li>
                    <span className='fw-bold'>{duration?.weekend} weeks</span>{' '}
                    <span hidden={showStatus} className='text-danger'>
                      (weekend)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-2'>
              <div className={`${style.tableHead} h-100`}>
                <ul className='d-flex flex-column align-items-start justify-content-between text-muted'>
                  <li>
                    <span className='fw-bold'>{classCount?.onlineCount}</span>{' '}
                    <span hidden={showStatus} className='text-danger'>
                      (online)
                    </span>
                  </li>
                  <li>
                    <span className='fw-bold'>{classCount?.weekdayCount}</span>{' '}
                    <span hidden={showStatus} className='text-danger'>
                      (weekday)
                    </span>
                  </li>
                  <li>
                    <span className='fw-bold'>{classCount?.weekendCount}</span>{' '}
                    <span hidden={showStatus} className='text-danger'>
                      (weekend)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-2'>
              <div className={style.tableHead}>
                <ul className='d-flex flex-column align-items-start justify-content-between gap-1'>
                  <li>
                    <AvatarStack
                      tutors={tutors?.online}
                      dontShowMore
                      imageList={imageList}
                    />
                  </li>
                  <li>
                    <AvatarStack
                      tutors={tutors?.weekday}
                      dontShowMore
                      imageList={imageList}
                    />
                  </li>
                  <li>
                    <AvatarStack
                      tutors={tutors?.weekend}
                      dontShowMore
                      imageList={imageList}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-1'>
              <div
                hidden={showStatus}
                className='dropdown'
                onClick={(event) => event.stopPropagation()}
              >
                <div
                  className='dropdown-toggle p-0 mt-9'
                  data-bs-toggle='dropdown'
                  data-bs-offset='-270,10'
                  aria-expanded='false'
                >
                  <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
                </div>
                <ul className={`dropdown-menu`}>
                  <div className='d-flex align-items-center px-3'>
                    <Link to={`/admin/courses/${id}/edit`} state={{ course }}>
                      <Icon
                        width={`1.1rem`}
                        icon={`material-symbols:edit`}
                        className='me-3'
                      />
                      <span>Edit course</span>
                    </Link>
                  </div>
                  <hr className='my-2' />
                  <div
                    onClick={handleDeleteModal}
                    className='d-flex align-items-center text-danger px-3'
                  >
                    <Icon
                      width={`1.1rem`}
                      icon={`material-symbols:delete-outline-rounded`}
                      className='me-3'
                    />
                    <span>Delete course</span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

CourseList.propTypes = {
  course: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
}

export default CourseList
