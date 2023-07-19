import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const offCanvas = ({ children, text, styles }) => {
  return (
    <div>
      <p
        className={`fs-sm ${styles}`}
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight'
        aria-controls='offcanvasRight'
      >
        {text}
      </p>

      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='p-3'>
          <div className='d-flex align-items-center justify-content-end'>
            <Icon
              icon={`material-symbols:close`}
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

offCanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  text: PropTypes.string.isRequired,
}

export default offCanvas
