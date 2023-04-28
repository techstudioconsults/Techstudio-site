import React from 'react'

const DownloadSuccessfulModal = () => {
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
            <h4 className='text-black fs-2 fw-bold m-0'>File Downloaded!</h4>
            <p className='m-0 text-black'>
              John Doe - Payment history has been downloaded successfully, check
              your download folder to view file.
            </p>
            <button
              //   onClick={() => props.setModalShow(false)}
              className='w-100 btn bg-primary text-white mx-auto'
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadSuccessfulModal
