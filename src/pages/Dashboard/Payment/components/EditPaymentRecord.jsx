import React from 'react'
import PaymentRecordUpdatedModal from './PaymentRecordUpdatedModal'

const EditPaymentRecord = () => {
  const [showRecordUpdatedModal, setShowRecordUpdatedModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  return (
    <div
      style={{
        width: '90%',
        maxWidth: '1000px',
        left: '0',
        right: '0',
        top: '20vh',
      }}
      className=' position-absolute bg-white p-5 mx-auto rounded-3 shadow'
    >
      {showRecordUpdatedModal && <PaymentRecordUpdatedModal />}
      {showCancelModal && <CancelModal />}
      <h4 className='fw-bold fs-5 text-center pb-5 m-0'>Add Payment Record</h4>
      <form className='d-flex flex-column gap-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <label className=' fw-semibold' htmlFor='payment-method'>
            Payment Method
          </label>
          <select className='w-75 form-control' id='payment-method'>
            <option>Placeholder Text</option>
            <option>option2</option>
          </select>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className=' fw-semibold' htmlFor='reciept'>
            Reciept
          </label>
          <input className='w-75 form-control' id='receipt' type='file' />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className=' fw-semibold' htmlFor='amount-paid'>
            Amount Paid
          </label>
          <input className='w-75 form-control' id='amount-paid' type='text' />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className=' fw-semibold' htmlFor='balance'>
            Balance
          </label>
          <input
            disabled
            className='w-75 form-control'
            id='balance'
            type='text'
            placeholder='100,000'
          />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className=' fw-semibold' htmlFor='data'>
            Date
          </label>
          <input
            className='w-75 form-control'
            id='date'
            type='date'
            placeholder='MM/DD/YYYY'
          />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className=' fw-semibold' htmlFor='comments'>
            Comments
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
        <div className='d-flex justify-content-end gap-3'>
          <button
            onClick={() => setShowRecordUpdatedModal(true)}
            className='btn btn-primary px-4 text-white'
          >
            Save Record
          </button>
          <button
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

export default EditPaymentRecord
