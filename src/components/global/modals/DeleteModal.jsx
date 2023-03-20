import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDeleteCourseMutation } from '../../../pages/Dashboard/Admin/courses/api/coursesApiSlice'

const DeleteModal = ({ content }) => {
  const [isDeleted, setDeleted] = useState(false)
  const [deleteCourse, { isLoading }] = useDeleteCourseMutation()
  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  const handleDeleteCourse = async () => {
    setDeleted(false)
    const res = await deleteCourse(content.courseID).unwrap()
    if (res.success) {
      setDeleted(true)
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={stopPropagation}
      className='modal fade'
      id={content.courseID}
      tabIndex='-1'
      aria-labelledby='delete-modal'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
    >
      <div className='modal-dialog modal-fullscreen-md-down modal-md'>
        <div className='modal-content'>
          <div
            className={[
              'modal-body d-flex flex-column align-items-center text-center py-20',
            ].join(' ')}
          >
            <div className=''>
              <h4 className='fw-bold text-blue pt-5 px-10'>
                {!isDeleted ? content.title : `Course Deleted Successfully`}
              </h4>
              <p hidden={!isDeleted} className='px-10'>
                {content.desc}
              </p>
            </div>
            <div
              className={`d-flex flex-column align-items-center gap-5 w-100 mt-10`}
            >
              <button
                disabled={isLoading}
                hidden={isDeleted}
                onClick={handleDeleteCourse}
                className={`btn btn-primary w-50`}
              >
                <div
                  hidden={!isLoading}
                  className='spinner-border spinner-border-sm me-5 text-white'
                  role='status'
                />
                {isLoading ? `Please wait...` : `Yes`}
              </button>
              <button
                onClick={stopPropagation}
                hidden={isDeleted}
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-outline-danger w-50 dont-delete-btn`}
              >
                No
              </button>
              <button
                onClick={stopPropagation}
                hidden={!isDeleted}
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-primary w-50`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

DeleteModal.propTypes = {
  ref: PropTypes.any,
  content: PropTypes.object.isRequired,
}

export default DeleteModal
