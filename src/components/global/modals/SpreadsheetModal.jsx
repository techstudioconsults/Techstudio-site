import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import axios from 'axios'

import useToast from '../../../hooks/useToast'
import { selectCurrentToken } from '../../../pages/Auth/api/authSlice'
import ToastComponent from '../toast/ToastComponent'

const SpreadsheetModal = () => {
  const [isLoading, setLoading] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [successMessage, setSuccessMessage] = useState()
  const { toast } = useToast()
  const token = useSelector(selectCurrentToken)

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const { register, handleSubmit } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await axios.post('https://api.techstudioacademy.com/api/v1/dashboard/spreadsheet', data, credentials)
      // console.log(response)
      if (response.status === 201) {
        setLoading(false)
        setSuccessMessage(response?.data?.message)
      }
    } catch (error) {
      // console.log(error)
      setLoading(false)
      setErrorMessage(error?.response?.data?.message)
      toast.show()
    }
  }

  return (
    <div
      className='modal'
      id='spreadsheet-modal'
      tabIndex='-1'
      data-bs-backdrop='false'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
      style={{ marginTop: `11rem` }}
    >
      <ToastComponent errorMessage={errorMessage} />
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title fs-5 text-center mx-auto d-flex justify-content-center align-items-center' id='exampleModalLabel'>
              Create Spreadsheet
            </h3>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <input type='text' className='form-control' id='title' name='title' aria-describedby='createSheet' placeholder='Title' {...register('title')} />
              </div>
              <button type='submit' className='btn btn-primary' disabled={isLoading}>
                {isLoading ? 'Creating...' : 'Create'}
              </button>
            </form>
          </div>
          <div className='modal-footer text-success fs-sm d-flex justify-content-center'>{successMessage}</div>
        </div>
      </div>
    </div>
  )
}

export default SpreadsheetModal
