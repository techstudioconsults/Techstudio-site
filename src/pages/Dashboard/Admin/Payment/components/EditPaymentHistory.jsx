import React, { useState } from 'react'
import style from '../style/paymentClasses.module.scss'
import { MdOutlineEditNote } from 'react-icons/md'
import { AiOutlineFolderAdd } from 'react-icons/ai'
import EditPaymentRecord from './EditPaymentRecord'
const EditPaymentHistory = () => {
  const data = [
    {
      id: 1,
      paymentMethod: 'Bank Transfer',
      amountPaid: {
        price: 'N300,000',
        date: '08/03/2023',
      },
      balance: 'N20000',
      comments: 'Payment was received on 11/03/2023',
    },
    {
      id: 2,
      paymentMethod: 'POS Transaction',
      amountPaid: {
        price: 'N100,000',
        date: '10/05/2023',
      },
      balance: 'N10000',
      comments: 'No comment...',
    },
    {
      id: 3,
      paymentMethod: 'Bank Transfer',
      amountPaid: {
        price: 'N50,000',
        date: '30/05/2023',
      },
      balance: 'N50,000',
      comments: 'Payment was received on 11/03/2023',
    },
    {
      id: 4,
      paymentMethod: 'Cash Payment',
      amountPaid: {
        price: 'N50,000',
        date: '08/06/2023',
      },
      balance: '-',
      comments: 'Cash payment received by Busola',
    },
  ]
  const [show, setShow] = useState(false)
  return (
    <div
      style={{
        // width: '90%',
        // maxWidth: '1000px',
        left: '0',
        right: '0',
        top: '20vh',
      }}
      className='position-absolute bg-white p-5 mx-auto rounded-5 shadow w-75 h-75'
    >
      {show && <EditPaymentRecord />}
      <div className='px-5 pt-5 pb-2 flex-column gap-2'>
        <div className='d-flex justify-content-between align-items-center pb-3 w-100'>
          <h4 className='fw-bold'>Edit Payment History</h4>

          <button className={[style.editbtn, 'btn btn-primary'].join(' ')}>
            {' '}
            <MdOutlineEditNote /> Proceed to Edit
          </button>
        </div>
        <div className='d-flex gap-2'>
          <h5 className='text-muted fs-4'>
            Click on the Payment you will like to edit
          </h5>
        </div>
      </div>
      <div className='px-5 py-3'>
        {data.map((t) => {
          return (
            <div
              key={t.id}
              className={[style.editbox, 'row my-4 px-3 '].join(' ')}
            >
              <div className='col-3'>
                <h6>{t.paymentMethod}</h6>
                <div className='d-flex align-items-center gap-3'>
                  <AiOutlineFolderAdd
                    style={{ color: '#0385FF', width: '20px' }}
                  />
                  <p>Transfer Reciept.pdf</p>
                </div>
              </div>
              <div className='col-3'>
                <h6 className={[style.text]}>{t.amountPaid.price} </h6>
                <p className='fw-semibold text-muted'>
                  Date: {t.amountPaid.date}{' '}
                </p>
              </div>
              <div className='col-3'>
                <h6 className='text-danger'>{t.balance}</h6>
              </div>
              <div className='col-3'>
                <p className='text-muted'>{t.comments}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditPaymentHistory
