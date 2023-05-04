/* eslint-disable react/prop-types */
import React from 'react'
import style from '../style/paymentClasses.module.scss'
import { Icon } from '@iconify/react'
import { useGetSingleStudentPaymentRecordsMutation } from '../api/paymentApiSlice'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectSingleStudentsPaymentRecord } from '../api/paymentSlice'
import { useState } from 'react'

const FullPaymentHistoryModal = ({ studentPayment }) => {
  const [records, setRecords] = useState({})
  // const singleStudentPaymentRecord = useSelector(
  //   selectSingleStudentsPaymentRecord
  // )
  const [getSingleStudentPaymentRecords] =
    useGetSingleStudentPaymentRecordsMutation()

  const paymentRecords = useCallback(async () => {
    const res = await getSingleStudentPaymentRecords(studentPayment.id).unwrap()
    setRecords(res.data)
  }, [getSingleStudentPaymentRecords, studentPayment.id])

  useEffect(() => {
    paymentRecords()
  }, [paymentRecords])

  // console.log(singleStudentPaymentRecord)

  const depositHistory = records?.deposits?.map((deposit) => {
    return (
      <tr key={deposit.depositId} className='text-start'>
        <td className='px-2 py-3 fw-semibold text-primary'>
          <p className='text-primary'>{deposit?.paymentMethod}</p>
          <p className='fs-sm text-secondary fw-semibold'>
            <Icon
              width={`1.2rem`}
              className='me-2'
              icon={`material-symbols:create-new-folder-outline`}
            />
            Transfer Receipt.pdf
          </p>
        </td>
        <td className='d-flex flex-column px-2 py-3'>
          <p className='m-0 text-success fw-semibold'>{deposit?.amount}</p>
          <p className='m-0 fs-sm'>{deposit?.dateOfPayment}</p>
        </td>
        <td className='p-0 px-2 py-3 text-danger fw-semibold'>
          <p>{deposit?.balance}</p>
        </td>
        <td className='p-0 px-2 py-3 text-secondary fst-italic'>
          {deposit?.comments || `...no comment`}
          <p>on 11/03/2023</p>
        </td>
        <td className='p-0 px-2 py-3 text-secondary'>
          <p className='m-0 text-primary fs-sm'>
            Last Modified by {deposit?.lastModifier}
          </p>
          <p className='m-0 text-secondary fw-semibold fs-xs fst-italic'>
            {/* Amount paid - 14/04/23 */}
            {deposit?.lastModified}
          </p>
        </td>
      </tr>
    )
  })

  return (
    <>
      <div
        className='modal fade'
        id={`payment-modal-${studentPayment.id}`}
        // data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content p-5 rounded rounded-5'>
            <div className='modal-body'>
              <div className='px-5 pt-5 pb-2 flex-column gap-2'>
                <div className='d-flex justify-content-between align-items-center w-100 '>
                  <h4 className='fw-bold'>Payment History</h4>
                  <div className='d-flex gap-2'>
                    <button className='btn btn-primary px-4 d-flex gap-2'>
                      {/* <img src={null} alt='img' /> */}
                      <Icon
                        width={`1.5rem`}
                        icon={`material-symbols:download-sharp`}
                      />
                      Download As PDF
                    </button>
                    <button className='btn btn-primary bg-white text-primary px-4 d-flex gap-2'>
                      {/* <img src={null} alt='img' /> */}
                      <Icon
                        width={`1.2rem`}
                        icon={`material-symbols:share-outline`}
                      />
                      Share
                    </button>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: '#F3F9FF' }}
                  className='d-flex justify-content-between rounded rounded-3 align-items-center p-5 mt-10 w-100'
                >
                  <div className='col-4'>
                    <h5 className='fw-semibold m-0 fs-5'>
                      {records?.fullName}
                    </h5>
                    <p className='text-secondary mt-1'>{records?.schedule}</p>
                  </div>
                  <div className='col-4 text-end'>
                    <p className='text-secondary m-0'>Course Fee</p>
                    <h4 className='fw-bold fs-3 mt-1'>NGN {records?.total}</h4>
                  </div>
                  <div className='col-4 text-end'>
                    <p className='text-secondary m-0'>Payment Status</p>
                    <h4 className={[style.text, 'fw-bold  mt-1'].join(' ')}>
                      {records?.status}
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className='px-5 py-3'
                style={{ height: `30rem`, overflow: `auto` }}
              >
                <table
                  style={{
                    // borderCollapse: 'separate',
                    // border: '8px solid black',
                    borderSpacing: '0 20px',
                  }}
                  className='table'
                >
                  <tr className='mb-4'>
                    <th className='px-2 py-3 fw-semibold text-black'>
                      Payment Method
                    </th>
                    <th className='px-2 py-3 fw-semibold text-black'>
                      Amount Paid
                    </th>
                    <th className='px-2 py-3 fw-semibold text-black'>
                      Balance
                    </th>
                    <th className='px-2 py-3 fw-semibold text-black'>
                      Comments
                    </th>
                  </tr>
                  <tbody className=''>{depositHistory}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullPaymentHistoryModal
