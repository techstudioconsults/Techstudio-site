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
      className='position-absolute bg-white mx-auto rounded-5 d-flex justify-content-center align-items-center shadow h-75 w-100'
    >
      <div>
        <div className='text-center'>
          <div className=' d-flex flex-column gap-3 px-2'>
            <h4
              style={{
                fontWeight: '700',
                fontSize: '29.8071px',
                lineHeight: '154.38%',
              }}
              className='text-black fs-2 fw-bold m-0'
            >
              New Payment Record
              <br />
              Added!
            </h4>
            <p className='m-0 text-black text-center fs-1 mt-2'>
              New payment record has been added for JOHN <br /> DOE. Kindly
              click continue to exit.
            </p>
            <button
              style={{ width: '260.98px' }}
              className='btn bg-primary text-white mx-auto mt-3'
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentRecordAddedModal
