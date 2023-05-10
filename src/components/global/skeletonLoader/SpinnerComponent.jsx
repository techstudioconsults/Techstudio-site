/* eslint-disable react/prop-types */
import React from 'react'

const SpinnerComponent = ({ color }) => {
  return (
    <div
      className={`d-flex text-${color} justify-content-center align-items-center gap-5 text-primary p-10`}
    >
      <div className='spinner-grow' role='status'></div>
      <strong>Loading...</strong>
    </div>
  )
}

export default SpinnerComponent
