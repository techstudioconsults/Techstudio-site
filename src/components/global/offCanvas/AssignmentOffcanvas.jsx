import React from 'react'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'

const AssignmentOffcanvas = ({ children }) => {
  return (
    <div>
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='assignment-offcanvas'
      >
        <div className='p-3'>
          <div className='d-flex align-items-center justify-content-end'>
            <MdClose
              color='black'
              className='fw-bolder fs-2xl'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            />
          </div>
        </div>
        <div className='offcanvas-body'>{children}</div>
      </div>
    </div>
  )
}

AssignmentOffcanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default AssignmentOffcanvas
