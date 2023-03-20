/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AvatarStack, DeleteModal, Portal } from '../../../../../components'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useViewCoursesDetailsMutation } from '../api/coursesApiSlice'
import { useState } from 'react'

const CourseList = ({ course, showDetailsBox }) => {
  const [showStatus, setShowStatus] = useState(true)
  const { id, title, duration, tutors } = course
  const { imageList } = DASHBOARD_CONTENT

  const [viewCoursesDetails] = useViewCoursesDetailsMutation()

  const handleClick = async () => {
    showDetailsBox()
    await viewCoursesDetails(id).unwrap()
  }

  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`${id}`)
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

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`btn btn-lg h-100 d-flex justify-content-between align-items-start text-dark p-3 border ${style.courseList}`}
    >
      <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            title: `${`Are you sure you want to delete this course?`}`,
            desc: `${title} Course has successfully being deleted. Kindly click continue to exit this page.`,
            courseID: id,
          }}
        />
      </Portal>
      <div className={style.tableHeadTitle}>
        <p className='fw-bold fs-sm text-start'>{title}</p>
        {/* <p className='fs-xs text-start text-danger'>{id}</p> */}
      </div>
      <div className={`${style.tableHead} h-100`}>
        <ul className='d-flex flex-column align-items-start justify-content-between gap-5 text-muted'>
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
      <div className={style.tableHead}>
        <ul className='d-flex flex-column align-items-start justify-content-between gap-5 text-muted'>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            <span hidden={showStatus} className='text-danger'>
              (online)
            </span>
          </li>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            <span hidden={showStatus} className='text-danger'>
              (weekday)
            </span>
          </li>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            <span hidden={showStatus} className='text-danger'>
              (weekend)
            </span>
          </li>
        </ul>
      </div>
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
      <div className='dropdown' onClick={(event) => event.stopPropagation()}>
        <div
          className='dropdown-toggle p-0 mt-9'
          data-bs-toggle='dropdown'
          data-bs-offset='-140,10'
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
    </button>
  )
}

CourseList.propTypes = {
  course: PropTypes.object.isRequired,
  showDetailsBox: PropTypes.func,
  isActive: PropTypes.bool,
}

export default CourseList
