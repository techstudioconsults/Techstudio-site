import React from 'react'

const PaymentRecordAddedModal = () => {
  return (
    <div
      style={{
        // width: '90%',
        // maxWidth: '1000px',
        left: '0',
        right: '0',
        top: '15vh',
        zIndex: 1,
      }}
      className='position-absolute bg-white p-5 mx-auto rounded-3 shadow h-75 w-75'
    >
      <div>
        <div className='text-center'>
          <div className=' d-flex flex-column gap-3 mt-5 px-2 py-5'>
            <h4 className='text-black fs-2 fw-bold m-0'>
              New Payment Record
              <br />
              Added!
            </h4>
            <p className='m-0 text-black'>
              New payment record has been added for JOHN DOE. Kindly click
              continue to exit.
            </p>
            <button className='w-100 btn bg-primary text-white mx-auto'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentRecordAddedModal
