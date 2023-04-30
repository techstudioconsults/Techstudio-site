import React from 'react'

const PaymentRecordUpdatedModal = () => {
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
              Payment Record Updated!
            </h4>
            <p className='m-0 text-black'>
              Payment record has been updated for JOHN DOE. Kindly click
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

export default PaymentRecordUpdatedModal
