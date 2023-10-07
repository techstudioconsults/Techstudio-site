import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const AddAClassOffCanvas = ({ children }) => {
  return (
    <div>
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='addclass-offcanvas'
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

AddAClassOffCanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default AddAClassOffCanvas
