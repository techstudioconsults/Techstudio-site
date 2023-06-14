import React from 'react'

import contactModalIcon from '@/assets/images/ContactModalImage.png'

const ContactFormModal = () => {
  return (
    <div
      className='modal fade'
      id='exampleModalCenter'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <img src={contactModalIcon} alt='' />
          </div>
          <div className='modal-body'>
            <h2>Message Sent Successfully!</h2>
            <p>
              Thank you for contacting us! Our team is reviewing your message
              and will respond promptly. Feel free to explore our website for
              more information in the meantime. We appreciate your patience!
            </p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close this window
            </button>
            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFormModal
