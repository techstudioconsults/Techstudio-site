/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'

const NewToast = ({ errorText }) => {
  const dispatch = useDispatch()

  if (errorText) {
    setTimeout(() => {
      dispatch({
        type: `app/setErrorMessage`,
        payload: ``,
      })
    }, 5000)
  }

  return (
    <div>
      <p className='fs-sm text-danger'>{errorText}</p>
    </div>
  )
}

export default NewToast
