import React, { useState } from 'react'

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
  return (
    <div
      style={{
        width: '90%',
        maxWidth: '1000px',
        left: '0',
        right: '0',
        top: '20vh',
      }}
      className='position-absolute bg-white p-5 mx-auto rounded-3 shadow'
    >
      <div className='px-5 pt-5 pb-2 flex-column gap-2'>
        <div className='d-flex justify-content-between align-items-center pb-3 w-100'>
          <h4>Edit Payment History</h4>
        </div>
        <div className='d-flex gap-2'>
          <p className='text-muted fs-4'>
            Click on the Payment you will like to edit
          </p>
        </div>
      </div>
      <div className='px-5 py-3'>
        <table
          //   style={{
          //     borderCollapse: 'collapse',
          //     borderSpacing: '10px 20px',
          //   }}
          className='table'
        >
          <tbody className=''>
            {data.map((datum) => {
              return (
                <tr key={datum.id} className='text-start'>
                  <td className='px-2 py-3 fw-semibold text-dark'>
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

export default EditPaymentHistory
