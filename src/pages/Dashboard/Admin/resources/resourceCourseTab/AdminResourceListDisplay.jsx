import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import React from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { DeleteModal, Portal } from '../../../../../components'
import Feedback from '../../../../../components/global/feedbacks/Feedback'

const AdminResourceListDisplay = ({ file, course }) => {
  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(file?.id)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {file ? (
        <>
          <Portal wrapperId='react-portal-modal-container'>
            <DeleteModal
              content={{
                action: `delete-resource`,
                title: `${`Are you sure you want to delete this Resource?`}`,
                desc: `This Resource has successfully being deleted. Kindly click continue to exit this page.`,
                resourceID: file?.id,
              }}
            />
          </Portal>
          <section className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-10'>
              <div
                className={
                  file.color === `red` ? `text-danger` : `text-primary`
                }
              >
                <Icon width={`2rem`} icon={file?.icon} />
              </div>
              <div>
                <p className='fw-semibold text-blue'>{file?.name}</p>
                <p className='fs-sm text-secondary'>
                  {new Date(file?.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div>
              <p className='fs-sm text-secondary'>
                File Size: {file?.fileSize}
              </p>
            </div>
            <div>
              <p className='fs-sm text-secondary'>{course}</p>
            </div>
            <div className='text-danger' style={{ cursor: `pointer` }}>
              <Icon
                onClick={handleDeleteModal}
                width={`1.5rem`}
                icon={`mingcute:delete-2-line`}
              />
            </div>
          </section>
        </>
      ) : (
        <Feedback />
      )}
    </>
  )
}

AdminResourceListDisplay.propTypes = {
  file: PropTypes.object,
  course: PropTypes.string,
}

export default AdminResourceListDisplay
