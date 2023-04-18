import React from 'react'

const SpinnerComponent = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-5 text-primary p-10'>
      <div className='spinner-grow' role='status'></div>
      <strong>Loading...</strong>
    </div>
  )
}

export default SpinnerComponent
