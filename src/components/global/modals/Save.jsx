import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { MdClose } from 'react-icons/md'

const Save = ({ content, saveCourse, isSave }) => {
  const navigate = useNavigate()
  const checkAction = (action) => {
    switch (action) {
      case `class`:
        navigate(`/admin/classes/${content.courseID}`)
        break

      case `course`:
        navigate(`/admin/courses`)
        break
      default:
        return `Continue`
    }
  }

  const stopPropagation = (event) => {
    event.stopPropagation()
    checkAction(content.action)
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      // onClick={stopPropagation}
      className='modal fade'
      id='save-modal'
      tabIndex='-1'
      aria-labelledby='save-modal'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
    >
      <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-md'>
        <div className='modal-content'>
          {/* <div className='modal-header d-flex justify-content-end'>
            <MdClose
              size={`1.5rem`}
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div> */}
          <div
            className={[
              'modal-body d-flex flex-column align-items-center text-center py-20',
            ].join(' ')}
          >
            <div className=''>
              <h4 className='fw-bold text-blue pt-5 px-10'>{content.title}</h4>
              <p hidden={!isSave} className='px-10'>
                {content.desc}
              </p>
            </div>
            <div
              className={`d-flex flex-column align-items-center gap-5 w-100 mt-10`}
            >
              <button
                hidden={isSave}
                onClick={() => {
                  stopPropagation
                  saveCourse()
                }}
                className={`btn btn-primary w-50`}
              >
                Proceed to Save
              </button>
              <button
                // onClick={stopPropagation}
                hidden={isSave}
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-outline-primary w-50`}
              >
                Continue Editing
              </button>
              <button
                onClick={stopPropagation}
                hidden={!isSave}
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

Save.propTypes = {
  ref: PropTypes.any,
  content: PropTypes.object.isRequired,
  saveCourse: PropTypes.func,
  isSave: PropTypes.bool,
}

export default Save
