import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const StartAClass = ({ children }) => {
  return (
    <section>
      <div type='button' data-bs-toggle='modal' data-bs-target='#exampleModal'>
        <p className='d-flex align-items-center gap-2 text-primary fs-sm fw-semibold'>
          <AiOutlinePlusCircle size={`1rem`} /> Add New Class
        </p>
      </div>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-fullscreen-md-down'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title fs-5' id='exampleModalLabel'>
                Schedule A class
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
}

export default StartAClass
