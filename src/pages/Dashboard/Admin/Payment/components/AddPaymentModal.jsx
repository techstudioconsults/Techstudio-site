/* eslint-disable react/prop-types */
/** @format */

import React, { useState } from 'react'
import style from '../style/paymentClasses.module.scss'
import { useForm } from 'react-hook-form'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import axios from 'axios'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { SaveSuccess } from '../../../../../components'
import CancelModal from './CancelModal'
import { useRef } from 'react'

const baseUrl = process.env.REACT_APP_BASE_URL

const AddPaymentModal = ({ studentPayment }) => {
  const closeRef = useRef(null)
  const [isLoading, setLoading] = useState(false)
  const token = useSelector(selectCurrentToken)
  const { courseID } = useParams()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  console.log(studentPayment.fullName, studentPayment.id)

  const {
    // reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()
    const files = [...data.files]
    console.log(data)

    formData.append(`paymentMethod`, data.paymentMethod)
    formData.append(`paymentDate`, data.paymentDate)
    formData.append(`amount`, parseInt(data.amount))
    formData.append(`comments`, data.comments)
    files.forEach((item) => formData.append('receipt', item))

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('save-success')
      )

      const res = await axios.post(
        `${baseUrl}/payments/students/${studentPayment?.id}`,
        // `${baseUrl}/students/${studentID}}/deposit/${depositID}`,
        formData,
        credentials
      )
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
        modal.show()
        closeRef.current.click()
      }
    } catch (err) {
      setLoading(false)
      // setErrorMessage(err.response.data.message)
      // toast.show()
    }
  }
  return (
    <>
      <SaveSuccess
        content={{
          title: `New Payment Record Added!`,
          desc: `New payment record has been added for ${studentPayment?.fullName}.
          Kindly click continue to exit.`,
          courseID: courseID,
          action: `add-new-payment-detail`,
        }}
      />
      {/* <CancelModal
        content={{
          action: `create`,
          routeAction: `class`,
          courseID: courseID,
        }}
      /> */}
      <div
        className='modal fade'
        id={`${studentPayment?.id}-modal`}
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content  p-10 rounded rounded-5'>
            <div className='modal-header'>
              <h4 className='text-center fs-2xl ms-60 fw-bold'>
                Add Payment Record
              </h4>
              <button
                type='button'
                className='btn-close'
                // onClick={(e) => e.stopPropagation()}
                ref={closeRef}
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='d-flex flex-column justify-content-between gap-5'
              >
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className=' fw-semibold' htmlFor='payment-method'>
                    <h5 className={`fs-lg`}>Payment Method</h5>
                  </label>
                  <select
                    {...register(`paymentMethod`)}
                    className='w-75 form-control'
                    id='payment-method'
                  >
                    <option value={`cash`}>Cash</option>
                    <option value={`pos`}>POS</option>
                    <option value={`transfer`}>Transfer</option>
                  </select>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className=' fw-semibold' htmlFor='reciept'>
                    <h5 className={`fs-lg`}>Reciept</h5>
                  </label>

                  <div className='w-75'>
                    <div className={`${style.inputs} w-100`}>
                      <div
                        className={
                          (style.inputs,
                          `d-flex align-items-center w-100 border border-1 p-5 rounded-2`)
                        }
                      >
                        <input
                          id='resource'
                          type='file'
                          multiple
                          {...register('files')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className=' fw-semibold' htmlFor='amount-paid'>
                    <h5 className={`fs-lg`}>Amount Paid</h5>
                  </label>
                  <input
                    className='w-75 form-control'
                    id='amount-paid'
                    type='text'
                    {...register('amount')}
                  />
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className=' fw-semibold' htmlFor='balance'>
                    <h5 className={`fs-lg`}>Balance</h5>
                  </label>
                  <input
                    disabled
                    className='w-75 form-control'
                    id='balance'
                    type='text'
                    placeholder='100,000'
                  />
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className='fw-semibold' htmlFor='data'>
                    <h5 className={`fs-lg`}>Date</h5>
                  </label>
                  <input
                    className='w-75 form-control'
                    id='date'
                    type='date'
                    placeholder='MM/DD/YYYY'
                    {...register('paymentDate')}
                  />
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className=' fw-semibold' htmlFor='comments'>
                    <h5 className={`fs-lg`}>Comments</h5>
                  </label>
                  <textarea
                    className='w-75 form-control'
                    style={{ resize: 'none' }}
                    name=''
                    id='comments'
                    cols='30'
                    rows='3'
                    {...register('comments')}
                  ></textarea>
                </div>
                <div className='d-flex justify-content-end gap-3 '>
                  <button
                    disabled={isLoading}
                    type='submit'
                    className='btn btn-primary w-25 me-10'
                  >
                    <div
                      hidden={!isLoading}
                      className='spinner-border spinner-border-sm me-5 text-white'
                      role='status'
                    />
                    {isLoading ? `Please wait...` : `Save Record`}
                  </button>
                  <button
                    type='button'
                    data-bs-dismiss='modal'
                    style={{ width: '191px' }}
                    className='btn border border-danger px-5 text-danger'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPaymentModal
