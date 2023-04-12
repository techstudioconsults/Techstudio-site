import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import React from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { DeleteModal, Portal } from '../../../../../components'

const AdminResourceListDisplay = ({ file }) => {
  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`delete-resource`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            action: `delete-resource`,
            title: `${`Are you sure you want to delete this resource?`}`,
            desc: `This resource has successfully being deleted. Kindly click continue to exit this page.`,
            // courseID: id,
          }}
        />
      </Portal>
      <section className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center gap-10'>
          <div
            className={file.color === `red` ? `text-danger` : `text-primary`}
          >
            <Icon width={`2rem`} icon={file?.icon} />
          </div>
          <div>
            <p className='fw-semibold text-blue'>{file?.title}</p>
            <p className='fs-sm text-secondary'>Added on 03/03/2023</p>
          </div>
        </div>
        <div>
          <p className='fs-sm text-secondary'>File Size: 1.05kb</p>
        </div>
        <div>
          <p className='fs-sm text-secondary'>Python Fullstack</p>
        </div>
        <div className='text-danger'>
          <Icon
            onClick={handleDeleteModal}
            width={`1.5rem`}
            icon={`mingcute:delete-2-line`}
          />
        </div>
      </section>
    </>
  )
}

AdminResourceListDisplay.propTypes = {
  file: PropTypes.object,
}

export default AdminResourceListDisplay
