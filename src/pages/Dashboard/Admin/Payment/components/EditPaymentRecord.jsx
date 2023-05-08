/* eslint-disable react/prop-types */
/** @format */

import React, { useState } from 'react'
import style from '../style/paymentClasses.module.scss'
import { useForm } from 'react-hook-form'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import axios from 'axios'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import SaveSuccessPayment from '../../../../../components/global/modals/SaveSuccessPayment'
import { CancelModal, Portal } from '../../../../../components'
import NewToast from '../../../../../components/global/toast/NewToast'
import { selectErrorMessage } from '../../../../../app/api/appSlice'
import useCurrency from '../../../../../hooks/useCurrency'

const baseUrl = process.env.REACT_APP_BASE_URL

const EditPaymentModal = ({ studentPayment, deposit }) => {
  const currency = useCurrency()
  const closeRef = useRef(null)
  // const [errorMessage, setErrorMessage] = useState(``)
  const [isLoading, setLoading] = useState(false)
  const token = useSelector(selectCurrentToken)
  const { courseID } = useParams()
  const dispatch = useDispatch()
  const errorText = useSelector(selectErrorMessage)

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const defaultValues = {
    paymentMethod: deposit.paymentMethod,
    paymentDate: new Date(deposit.dateOfPayment).toLocaleDateString('en-CA'),
    amount: deposit.amount,
    comments: deposit.comments,
  }
  // console.log(defaultValues)

  const {
    // reset,
    register,
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    // resolver: yupResolver(schema),
    defaultValues,
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()
    const files = [...data.files]

    formData.append(`paymentMethod`, data.paymentMethod)
    formData.append(`paymentDate`, data.paymentDate)
    formData.append(`amount`, parseInt(data.amount))
    formData.append(`comments`, data.comments)
    files.forEach((item) => formData.append('receipt', item))

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`${studentPayment?.id}-save-success`)
      )

      const res = await axios.patch(
        `${baseUrl}/payments/students/${studentPayment.id}/deposits/${deposit.depositId}`,
        formData,
        credentials
      )
      if (res.status === 200) {
        setLoading(false)
        modal.show()
        closeRef.current.click()
      }
    } catch (err) {
      console.log(err.response.data.message)
      setLoading(false)
      dispatch({
        type: `app/setErrorMessage`,
        payload: err.response.data.message,
      })
      // setErrorMessage(err.response.data.message)
      // toast.show()
    }
  }

  const handleCancelAction = (event) => {
    event.stopPropagation()
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById(`${deposit.depositId}-cancel-modal`)
    )
    modal.show()
  }

  return (
    <>
      <Portal>
        <SaveSuccessPayment
          content={{
            title: `New Payment Record Added!`,
            desc: `New payment record has been added for ${studentPayment?.fullName}.
          Kindly click continue to exit.`,
            courseID: courseID,
            studentID: studentPayment?.id,
            action: `payment`,
          }}
        />
      </Portal>
      <Portal>
        <CancelModal
          content={{
            action: `edit`,
            routeAction: `payment`,
            paymentID: deposit.depositId,
            courseID: courseID,
            close: closeRef,
          }}
        />
      </Portal>
      <div
        className='modal fade'
        id={`edit-${deposit?.depositId}-modal`}
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content  p-10 rounded rounded-5'>
            <div className='modal-header d-flex flex-column align-items-center justify-content-center'>
              <h4 className='text-center fs-2xl  fw-bold'>
                Edit Payment Record
              </h4>
              <button
                type='button'
                className='btn-close'
                style={{ visibility: `collapse` }}
                ref={closeRef}
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
              <NewToast errorText={errorText} />
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
                    // required
                    {...register(`paymentMethod`)}
                    className='w-75 form-control text-dark'
                    id={`${studentPayment?.id}-payment-method`}
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
                          // required
                          id={`${studentPayment?.id}-resource`}
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
                    // required
                    className='w-75 form-control text-dark'
                    id={`${studentPayment?.id}-amount-paid`}
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
                    defaultValue={currency(studentPayment?.balance)}
                    className='w-75 form-control text-dar'
                    id={`${studentPayment?.id}-balance`}
                    type='text'
                    placeholder='100,000'
                  />
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <label className='fw-semibold' htmlFor='data'>
                    <h5 className={`fs-lg`}>Date</h5>
                  </label>
                  <input
                    // required
                    className='w-75 form-control text-dark'
                    id={`${studentPayment?.id}-date`}
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
                    className='w-75 form-control text-dark'
                    style={{ resize: 'none' }}
                    name=''
                    id={`${studentPayment?.id}-comment`}
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
                    onClick={handleCancelAction}
                    // data-bs-dismiss='modal'
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

export default EditPaymentModal
