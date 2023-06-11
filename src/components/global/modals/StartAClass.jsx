import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'

const StartAClass = ({ children, title }) => {
  return (
    <section>
      <div type='button' data-bs-toggle='modal' data-bs-target='#start-a-class'>
        <p className='d-flex align-items-center gap-2 text-primary fs-sm fw-semibold'>
          <Icon icon={`mdi:plus-circle-outline`} width={`1rem`} /> Add New Class
        </p>
      </div>
      <div
        className='modal fade'
        id='start-a-class'
        tabIndex='-1'
        aria-labelledby='start-a-class'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title fs-5' id='start-a-class'>
                {title}
              </h4>
              <button
                type='button'
                className='btn-close btn-blue'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className={['modal-body'].join(' ')}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

StartAClass.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  title: PropTypes.string,
}

export default StartAClass
