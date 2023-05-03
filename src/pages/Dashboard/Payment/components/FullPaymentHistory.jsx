/** @format */

import React, { useState } from 'react'
import DownloadSuccessfulModal from './DownloadSuccessfulModal'
// import DownloadModal from './DownloadModal'
import downloadIcon from '../../../../assets/images/downloadIcon.png'
import shareIcon from '../../../../assets/images/shareIcon.png'
import style from '../style/paymentClasses.module.scss'

const FullPaymentHistory = (props) => {
  const [modalShow, setModalShow] = useState(false)

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

  return (
    <div
      style={{
        // width: '90%',
        // maxWidth: '1000px',
        left: '0',
        right: '0',
        top: '15vh',
      }}
      className='position-absolute bg-white p-5 mx-auto rounded-5 w-75 h-100 shadow'
    >
      {modalShow && <DownloadSuccessfulModal />}
      <div className='px-5 pt-5 pb-2 flex-column gap-2'>
        <div className='d-flex justify-content-between align-items-center w-100 '>
          <h4 className='fw-bold'>Payment History</h4>
          <div className='d-flex gap-2'>
            <button
              onClick={() => setModalShow(true)}
              className='btn btn-primary px-4 d-flex gap-2'
            >
              <img src={downloadIcon} alt='' />
              Download As PDF
            </button>
            <button className='btn btn-primary bg-white text-primary px-4 d-flex gap-2'>
              <img src={shareIcon} alt='' />
              Share
            </button>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#F3F9FF' }}
          className='row d-flex justify-content-between align-items-center p-3 mt-2 w-100'
        >
          <div className='col-4'>
            <h5 className='fw-semibold m-0 fs-5'>John Doe</h5>
            <p className='text-secondary mt-1'>Javascript Fullstack Jan 2023</p>
          </div>
          <div className='col-4 text-end'>
            <p className='text-secondary m-0'>Course Fee</p>
            <h4 className='fw-bold fs-3 mt-1'>NGN 500,000</h4>
          </div>
          <div className='col-4 text-end'>
            <p className='text-secondary m-0'>Payment Status</p>
            <h4 className={[style.text, 'fw-bold  mt-1'].join(' ')}>Full</h4>
          </div>
        </div>
      </div>
      <div className='px-5 py-3'>
        <table
          style={{
            borderCollapse: 'separate',
            // border: '8px solid black',
            borderSpacing: '0 20px',
          }}
          className='table'
        >
          <tr className='mb-4'>
            <th className='px-2 py-3 fw-semibold text-black'>Payment Method</th>
            <th className='px-2 py-3 fw-semibold text-black'>Amount Paid</th>
            <th className='px-2 py-3 fw-semibold text-black'>Balance</th>
            <th className='px-2 py-3 fw-semibold text-black'>Comments</th>
          </tr>
          <tbody className=''>
            {data.map((datum) => {
              return (
                <tr key={datum.id} className='text-start'>
                  <td className='px-2 py-3 fw-semibold text-primary'>
                    {datum.paymentMethod}
                  </td>
                  <td className='d-flex flex-column px-2 py-3'>
                    <p className='m-0 text-success fw-semibold'>
                      {datum.amountPaid.price}
                    </p>
                    <p className='m-0'>{datum.amountPaid.date}</p>
                  </td>
                  <td className='p-0 px-2 py-3 text-danger fw-semibold'>
                    {datum.balance}
                  </td>
                  <td className='p-0 px-2 py-3 text-secondary fst-italic'>
                    {datum.comments}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FullPaymentHistory
