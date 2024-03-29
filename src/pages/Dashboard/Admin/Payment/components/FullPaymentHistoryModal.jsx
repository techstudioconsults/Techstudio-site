/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
import axios from 'axios'
import download from 'downloadjs'

import { ToastComponent } from '../../../../../components'
import useCurrency from '../../../../../hooks/useCurrency'
import useToast from '../../../../../hooks/useToast'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { selectSingleStudentsPaymentRecord } from '../api/paymentSlice'

import style from '../style/paymentClasses.module.scss'

const baseUrl = process.env.REACT_APP_BASE_URL

const FullPaymentHistoryModal = ({ studentPayment }) => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(``)
  const currency = useCurrency()
  const token = useSelector(selectCurrentToken)
  const singleStudentPaymentRecord = useSelector(selectSingleStudentsPaymentRecord)
  const { toast } = useToast()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const handleDownload = async (studentID) => {
    setLoading(true)
    try {
      const response = await axios.get(`${baseUrl}/payments/students/${studentID}/download`, {
        responseType: 'arraybuffer',
        ...credentials,
      })
      if (response.status === 200) {
        setLoading(false)
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `Payment Details.pdf`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      setLoading(false)
      setErrorMessage(error.message)
      toast.show()
    }
  }

  const depositHistory = singleStudentPaymentRecord?.deposits?.map((deposit) => {
    return (
      <tr key={deposit.depositId} className='text-start border border-top-1 border-bottom-1 border-start-0 border-end-0 align-items-center mb-3'>
        <td className='px-2 py-3 fw-semibold text-primary'>
          <p className='text-primary'>{deposit?.paymentMethod}</p>
          <div>
            <button disabled className='dropdown-toggle dropdown-center bg-white' data-bs-toggle='dropdown' data-bs-offset='100,10' aria-expanded='false'>
              <p className='fs-sm text-secondary fw-semibold'>
                <Icon width={`1.2rem`} className='me-2' icon={`material-symbols:create-new-folder-outline`} />
                Transfer Receipt.pdf
              </p>
            </button>
            <ul className='dropdown-menu dropdown-menu-end'>
              <li className='mb-2'>
                <button className='dropdown-item'>
                  <Icon width={`1.5rem`} icon='ic:sharp-notes' /> View Receipt
                </button>
              </li>
              <li>
                <button className='dropdown-item text-primary'>
                  <Icon className='mb-2' width={`1.5rem`} icon='material-symbols:download-sharp' /> Download Receipt
                </button>
              </li>
            </ul>
          </div>
        </td>
        <td className='d-flex flex-column px-2 py-3'>
          <p className='m-0 text-success fw-semibold'>{currency(deposit?.amount)}</p>
          <p className='m-0 fs-sm'>{deposit?.dateOfPayment}</p>
        </td>
        <td className='p-0 px-2 py-3 text-danger fw-semibold'>
          <p>{currency(deposit?.balance)}</p>
        </td>
        <td className='p-0 px-2 py-3 text-secondary fst-italic'>
          {deposit?.comments || `...no comment`}
          <p>on {deposit?.lastModified}</p>
        </td>
        <td className='p-0 px-2 py-3 text-secondary'>
          <div>
            <button className='dropdown-toggle dropdown-center bg-white m-auto' data-bs-toggle='dropdown' data-bs-offset='20,10' aria-expanded='false'>
              <div className='text-start'>
                <p className='m-0 text-primary fs-sm'>Last Modified by {deposit?.lastModifier}</p>
                <p className='m-0 text-secondary fw-semibold fs-sm fst-italic'>{deposit?.lastModified}</p>
              </div>
              <Icon className='ms-3' width={`1.5rem`} icon={`mdi:chevron-down`} />
            </button>
            <ul className='dropdown-menu dropdown-menu-end p-5'>
              <li>
                <div className='text-start'>
                  <p className='m-0 text-primary fs-sm'>Modified by {deposit?.lastModifier}</p>
                  <p className='m-0 text-secondary fw-semibold fs-sm fst-italic'>{deposit?.lastModified}</p>
                </div>
              </li>
              <hr />
              <li>
                <div className='text-start'>
                  <p className='m-0 text-primary fs-sm'>Modified by {deposit?.lastModifier}</p>
                  <p className='m-0 text-secondary fw-semibold fs-sm fst-italic'>{deposit?.lastModified}</p>
                </div>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <>
      <ToastComponent errorMessage={errorMessage} />
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
                    <button onClick={() => handleDownload(singleStudentPaymentRecord.id)} className='btn btn-primary px-4 d-flex gap-2'>
                      {/* <img src={null} alt='img' /> */}
                      <Icon hidden={isLoading} width={`1.5rem`} icon={`material-symbols:download-sharp`} />
                      <div hidden={!isLoading} className='spinner-border spinner-border-sm me-5 text-white' role='status' />
                      {isLoading ? `Downloading...` : `Download As PDF`}
                    </button>
                    <button disabled className='btn btn-primary bg-white text-primary px-4 d-flex gap-2'>
                      {/* <img src={null} alt='img' /> */}
                      <Icon width={`1.2rem`} icon={`material-symbols:share-outline`} />
                      Share
                    </button>
                  </div>
                </div>
                <div style={{ backgroundColor: '#F3F9FF' }} className='d-flex justify-content-between rounded rounded-3 align-items-center p-5 mt-10 w-100'>
                  <div className='col-4'>
                    <h5 className='fw-semibold m-0 fs-5'>{singleStudentPaymentRecord?.fullName}</h5>
                    <p className='text-secondary mt-1'>{singleStudentPaymentRecord?.schedule}</p>
                  </div>
                  <div className='col-4 text-end'>
                    <p className='text-secondary m-0'>Course Fee</p>
                    <h4 className='fw-bold fs-3 mt-1'>{currency(singleStudentPaymentRecord?.total)}</h4>
                  </div>
                  <div className='col-4 text-end'>
                    <p className='text-secondary m-0'>Payment Status</p>
                    <h4 className={[style.text, singleStudentPaymentRecord?.status === `Part` ? `text-danger` : `text-success`, 'fw-bold  mt-1'].join(' ')}>
                      {singleStudentPaymentRecord?.status}
                    </h4>
                  </div>
                </div>
              </div>
              <div className='px-5 py-3' style={{ height: `30rem`, overflow: `auto` }}>
                <table
                  style={{
                    // borderCollapse: 'separate',
                    // border: '8px solid black',
                    borderSpacing: '0 20px',
                  }}
                  className='table align-middle'
                >
                  <tr className='mb-4'>
                    <th className='px-2 py-3 fw-semibold text-black'>Payment Method</th>
                    <th className='px-2 py-3 fw-semibold text-black'>Amount Paid</th>
                    <th className='px-2 py-3 fw-semibold text-black'>Balance</th>
                    <th className='px-2 py-3 fw-semibold text-black'>Comments</th>
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
