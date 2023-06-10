import React from 'react'
import style from './ContactSection3.module.scss'
// import contactModalIcon from '../../../../../assets/images/ContactModalImage.png'

const ContactUsFeedback = () => {
  return (
    <div className={style.ContactSection3}>
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id='contactUsfeedback'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className={`modal-dialog modal-dialog-centered`}>
          <div className={`modal-content ${style.modalContent}`}>
            <div
              className={`modal-header d-flex justify-content-center ${style.modalHeader}`}
            >
              <img
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218519/techstudio-web-app/assets/images/ContactModalImage_e6jwqj.png`}
                alt=''
              />
            </div>
            <div className={`modal-body text-center ${style.modalBody}`}>
              <h5 className={style.innerHeader}>Message Sent Successfully!</h5>
              <p className={style.innerText}>
                Thank you for contacting us! Our team is reviewing your message
                and will respond promptly. Feel free to explore our website for
                more information in the meantime. We appreciate your patience!
              </p>
            </div>
            <div
              className={`modal-footer d-flex justify-content-center ${style.modalFooter}`}
            >
              <button
                type='button'
                className={`btn btn-secondary ${style.btnClose}`}
                data-bs-dismiss='modal'
              >
                Close this window
              </button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsFeedback
