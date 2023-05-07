/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const CancelModal = ({ content }) => {
  const { courseID } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const checkAction = (action) => {
    switch (action) {
      case `create`:
        return `Continue Creating`
      case `edit`:
        return `Continue Editing`
      case `add-payment`:
        return `Continue Adding`
      default:
        return `Continue`
    }
  }

  const routeAction = (action) => {
    switch (action) {
      case `class`:
        navigate(`/admin/classes/${content.courseID}`)
        break

      case `course`:
        navigate(`/admin/courses`)
        break

      case `lesson`:
        navigate(`/admin/classes/${content.courseID}`, {
          state: { from: `lesson` },
        })
        break
      case `payment`:
        content.close.current.click()
        break
      default:
        return `Continue`
    }
  }

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
      <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-md'>
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
                {checkAction(content?.action)}
              </button>
              <button
                onClick={() => routeAction(content?.routeAction)}
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-outline-danger w-50 cancel-btn`}
              >
                {/* <Link className='text-danger' to={`/admin/courses`}> */}
                {content?.action === `create` ? `Go Back` : `Discard Changes`}
                {/* </Link> */}
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
