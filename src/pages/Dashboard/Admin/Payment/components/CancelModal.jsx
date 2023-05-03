import React from 'react'

const CancelModal = () => {
  return (
    <div
      style={{
        left: '0',
        right: '0',
        top: '15vh',
        zIndex: 1,
      }}
      className='position-absolute  bg-white p-5 mx-auto w-100 h-75 d-flex justify-content-center align-items-center rounded-5 shadow'
    >
      <div>
        <div className='text-center'>
          <div className='d-flex flex-column gap-5 mx-auto px-2 py-5'>
            <h4
              style={{
                fontWeight: '700',
                fontSize: '29.8071px',
                lineHeight: '154.38%',
              }}
              className='text-black fs-2 fw-bold m-0'
            >
              Are you sure you want to
              <br />
              exit this page?
            </h4>

            <button
              style={{ width: '260.98px' }}
              className=' btn bg-primary text-white mx-auto'
            >
              Continue
            </button>
            <button
              style={{ width: '260.98px' }}
              className=' btn bg-white text-danger border border-danger mx-auto'
            >
              Discard Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelModal
