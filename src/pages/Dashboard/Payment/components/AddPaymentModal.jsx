/** @format */

import React, { useState } from 'react'
import CancelModal from './CancelModal'
import PaymentRecordAddedModal from './PaymentRecordAddedModal'
import { AiOutlinePaperClip } from 'react-icons/ai'
import style from '../style/paymentClasses.module.scss'

const AddPaymentModal = () => {
  const [showRecordUpdatedModal, setShowRecordUpdatedModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)

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
      className=' position-absolute  bg-white p-5 mx-auto w-50 h-100 rounded-5 shadow'
    >
      {showRecordUpdatedModal && <PaymentRecordAddedModal />}
      {showCancelModal && <CancelModal />}
      <h4 className='fw-bold fs-5 text-center pb-5 mb-5'>Add Payment Record</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className='d-flex flex-column justify-content-between gap-5'
      >
        <div className='d-flex justify-content-between align-items-center mb-5'>
          <label className=' fw-semibold' htmlFor='payment-method'>
            <h5>Payment Method</h5>
          </label>
          <select className='w-75 form-control' id='payment-method'>
            <option>Placeholder Text</option>
            <option>option2</option>
          </select>
        </div>
        <div className='d-flex justify-content-between align-items-center mb-5'>
          <label className=' fw-semibold' htmlFor='reciept'>
            <h5>Reciept</h5>
          </label>

          <div
            className={[
              style.special,
              'position-relative w-75 d-flex justify-content-between align-items-center px-1',
            ].join(' ')}
          >
            <AiOutlinePaperClip
              style={{ color: '#0385FF' }}
              className='position-absolute top-0 start-0 mt-3 me-2 '
            />
            <input
              style={{ backgroundColor: '#F3F9FF' }}
              className='form-control border-0'
              id='receipt'
              placeholder='Browse files or drag and drop here'
            />
            <button
              style={{ width: '125px' }}
              className='btn btn-primary position-absolute top-0 end-0 px-5'
            >
              <p className='fw-light'>Add</p>
            </button>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center mb-5'>
          <label className=' fw-semibold' htmlFor='amount-paid'>
            <h5>Amount Paid</h5>
          </label>
          <input className='w-75 form-control' id='amount-paid' type='text' />
        </div>
        <div className='d-flex justify-content-between align-items-center mb-5'>
          <label className=' fw-semibold' htmlFor='balance'>
            <h5>Balance</h5>
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
            <h5>Date</h5>
          </label>
          <input
            className='w-75 form-control'
            id='date'
            type='date'
            placeholder='MM/DD/YYYY'
          />
        </div>
        <div className='d-flex justify-content-between align-items-center mb-5'>
          <label className=' fw-semibold' htmlFor='comments'>
            <h5>Comments</h5>
          </label>
          <textarea
            className='w-75 form-control'
            style={{ resize: 'none' }}
            name=''
            id='comments'
            cols='30'
            rows='3'
          ></textarea>
        </div>
        <div className='d-flex justify-content-end gap-3 '>
          <button
            style={{ width: '191px' }}
            onClick={() => setShowRecordUpdatedModal(true)}
            className='btn btn-primary px-4 text-white'
          >
            Save Record
          </button>
          <button
            style={{ width: '191px' }}
            onClick={() => setShowCancelModal(true)}
            className='btn border border-danger px-5 text-danger'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPaymentModal
