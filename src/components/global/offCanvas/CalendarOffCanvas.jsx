import React from 'react'
import PropTypes from 'prop-types'
import { MdClose, MdMenu } from 'react-icons/md'

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

CalendarOffCanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default CalendarOffCanvas
