import PropTypes from 'prop-types'
import { MdClose, MdError } from 'react-icons/md'

const ToastComponent = ({ errorMessage = 'error' }) => {
  return (
    <div className='toast-container position-fixed top-0 end-0 p-3'>
      <div
        style={{ background: `#800000`, width: `fit-content` }}
        className='toast align-items-center border-0'
        id='feedback-toast'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div className='d-flex'>
          <div className='toast-body text-white'>
            <span className='me-5'>
              <MdError size={`1.5rem`} className='text-white' />
            </span>
            <span className='text-white'>{errorMessage}</span>
          </div>
          <div
            className='me-2 m-auto'
            data-bs-dismiss='toast'
            aria-label='Close'
          >
            <MdClose size={`1.5rem`} className='text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

ToastComponent.propTypes = {
  errorMessage: PropTypes.string,
}

export default ToastComponent
