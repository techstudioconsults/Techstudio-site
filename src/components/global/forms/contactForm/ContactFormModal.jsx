import React from 'react'
import contactModalIcon from '../../../../assets/images/ContactModalImage.png'

const ContactFormModal = () => {
  return (
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <img src={contactModalIcon} alt="" />
            </div>
            <div class="modal-body">
              <h2>Message Sent Successfully!</h2>
              <p>Thank you for contacting us! Our team is reviewing your message and will respond promptly. Feel free to explore our website for more information in the meantime. We appreciate your patience!
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close this window</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactFormModal