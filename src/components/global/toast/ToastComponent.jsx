import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const ToastComponent = ({ bgColor = `#800000`, errorMessage = 'something went wrong' }) => {
  return (
    <div style={{ zIndex: 999 }} className='toast-container position-fixed top-0 end-0 p-3'>
      <div
        style={{ background: bgColor, width: `fit-content` }}
        className='toast align-items-center border-0'
        id='feedback-toast'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div className='d-flex'>
          <div className='toast-body text-white'>
            <span className='me-5'>
              <Icon icon={`material-symbols:error-outline`} width={`1.5rem`} className='text-white' />
            </span>
            <span className='text-white'>{errorMessage}</span>
          </div>
          <div className='me-2 m-auto' data-bs-dismiss='toast' aria-label='Close'>
            <Icon icon={`material-symbols:close`} width={`1.5rem`} className='text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

ToastComponent.propTypes = {
  errorMessage: PropTypes.string,
  bgColor: PropTypes.string,
}

export default ToastComponent
