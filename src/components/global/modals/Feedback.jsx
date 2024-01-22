import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
// import feedback from '../../../assets/images/feedback.webp'

const Feedback = ({ content }) => {
  return (
    <div className='modal fade' id='feedback' tabIndex='-1' aria-labelledby='feedback'>
      <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg px-lg-20'>
        <div className='modal-content'>
          <div className='modal-header d-flex justify-content-end'>
            <Icon icon={`material-symbols:close`} width={`1.5rem`} data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className={['modal-body d-flex flex-column align-items-center text-center py-20'].join(' ')}>
            <div>
              <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699878977/techstudio/images/feedback_gt11fy_qnndsw.webp`} alt='feedback' />
            </div>
            <div className=''>
              <h4 className='fw-bold text-blue pt-5'>{content.title}</h4>
              <p className='px-8'>{content.desc}</p>
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
