import React from 'react'

const CancelModal = () => {
  return (
    <div
      style={{
        width: '90%',
        maxWidth: '1000px',
        left: '0',
        right: '0',
        top: '20vh',
      }}
      className='position-absolute bg-white p-5 mx-auto rounded-3 shadow'
    >
      <div>
        <div className='text-center'>
          <div className='w-50 d-flex flex-column gap-3 mx-auto px-2 py-5'>
            <h4 className='text-black fs-2 fw-bold m-0'>
              Are you sure you want to exit this page?
            </h4>

            <button className='w-100 btn bg-primary text-white mx-auto'>
              Continue
            </button>
            <button className='w-100 btn bg-white text-danger border border-danger mx-auto'>
              Discard Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelModal
