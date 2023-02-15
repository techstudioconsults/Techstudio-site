import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'
import feedback from '../../../assets/images/feedback.webp'

const Feedback = () => {
  return (
    <div
      className='modal fade'
      id='feedback'
      tabIndex='-1'
      aria-labelledby='feedback'
    >
      <div className='modal-dialog modal-fullscreen-md-down modal-lg px-lg-20'>
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
            <div className=''>
              <h4 className='fw-bold text-blue pt-5'>
                Registration Successful!!!
              </h4>
              <p className='px-8'>
                Your details have been received and our Customer Care
                Representative will contact you shortly.
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
}

export default Feedback
