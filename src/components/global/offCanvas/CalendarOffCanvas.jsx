import React from 'react'
import PropTypes from 'prop-types'
import { MdMenu } from 'react-icons/md'

const CalendarOffCanvas = ({ children }) => {
  return (
    <div>
      <MdMenu
        size={`2.3rem`}
        className='p-2 d-xl-none'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight'
        aria-controls='offcanvasRight'
      />

      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='offcanvas-header'>
          <button
            type='button'
            className='btn-close ms-auto me-8 mt-1'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>{children}</div>
      </div>
    </div>
  )
}

CalendarOffCanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default CalendarOffCanvas
