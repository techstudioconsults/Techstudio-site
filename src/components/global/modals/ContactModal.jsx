import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types'

import feedback from '../../../assets/images/feedback.webp'

const Feedback = () => {
  return (
    <div
      className='modal fade'
      id='ContactFeedback'
      tabIndex='-1'
      aria-labelledby='feedback'
    >
      <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg px-lg-20'>
        <div className='modal-content'>
          <div className='modal-header d-flex justify-content-end'>
            <MdClose
              size={`1.5rem`}
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div
            className={[
              'modal-body d-flex flex-column align-items-center text-center py-20',
            ].join(' ')}
          >
            <div>
              <img src={feedback} alt='feedback' />
            </div>
            <div className='modal-body'>
              <h2>Message Sent Successfully!</h2>
              <p>
                Thank you for contacting us! Our team is reviewing your message
                and will respond promptly. Feel free to explore our website for
                more information in the meantime. We appreciate your patience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Feedback.propTypes = {
  ref: PropTypes.any,
  content: PropTypes.object.isRequired,
}

export default Feedback
