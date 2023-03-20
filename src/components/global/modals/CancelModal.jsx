import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CancelModal = () => {
  const stopPropagation = (event) => {
    event.stopPropagation()
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={stopPropagation}
      className='modal fade'
      id='cancel-modal'
      tabIndex='-1'
      aria-labelledby='cancel-modal'
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
                Are you sure you want to exit this page?
              </h4>
            </div>
            <div
              className={`d-flex flex-column align-items-center gap-5 w-100 mt-10`}
            >
              <button
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-primary w-50`}
              >
                Continue Editing
              </button>
              <button
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-outline-primary w-50 cancel-btn`}
              >
                <Link to={`/admin/courses`}>Discard Changes</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CancelModal.propTypes = {
  ref: PropTypes.any,
}

export default CancelModal
