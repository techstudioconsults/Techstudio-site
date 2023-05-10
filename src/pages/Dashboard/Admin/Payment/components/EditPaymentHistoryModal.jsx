/* eslint-disable react/prop-types */
import React from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { Icon } from '@iconify/react'
import { useSelector } from 'react-redux'
import { selectSingleStudentsPaymentRecord } from '../api/paymentSlice'
import { MdOutlineEditNote } from 'react-icons/md'
import { useState } from 'react'
import EditPaymentModal from './EditPaymentRecord'
import { useRef } from 'react'
import { Portal } from '../../../../../components'
import useCurrency from '../../../../../hooks/useCurrency'

const EditPaymentHistoryModal = ({ studentPayment }) => {
  const currency = useCurrency()
  const closeBtn = useRef()
  const [errorMessage, setErrorMessage] = useState(``)
  const [dontShowEditButton, setDontShowEditButton] = useState(true)
  const [depositID, setDepositID] = useState(true)
  const singleStudentPaymentRecord = useSelector(
    selectSingleStudentsPaymentRecord
  )

  const handleEditAction = async (depositID) => {
    try {
      closeBtn.current.click()
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`edit-${depositID}-modal`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }
  const handleEditButton = (depositID) => {
    setDepositID(depositID)
    setDontShowEditButton(false)
  }

  const depositHistory = singleStudentPaymentRecord?.deposits?.map(
    (deposit) => {
      return (
        <>
          <Portal>
            <EditPaymentModal
              deposit={deposit}
              studentPayment={singleStudentPaymentRecord}
            />
          </Portal>
          <tr
            style={{ cursor: `pointer` }}
            onClick={() => handleEditButton(deposit?.depositId)}
            key={deposit.depositId}
            className='text-start border border-top-0 border-bottom-1 border-start-0 border-end-0 align-items-center mb-3'
          >
            <td className='px-2 py-3 fw-semibold text-primary'>
              <p className='text-primary'>{deposit?.paymentMethod}</p>
              <div>
                <p className='fs-sm text-secondary fw-semibold'>
                  <Icon
                    width={`1.2rem`}
                    className='me-2'
                    icon={`material-symbols:create-new-folder-outline`}
                  />
                  Transfer Receipt.pdf
                </p>
              </div>
            </td>
            <td className='d-flex flex-column px-2 py-3'>
              <p className='m-0 text-success fw-semibold'>
                {currency(deposit?.amount)}
              </p>
              <p className='m-0 fs-sm'>{deposit?.dateOfPayment}</p>
            </td>
            <td className='p-0 px-2 py-3 text-danger fw-semibold'>
              <p>{currency(deposit?.balance)}</p>
            </td>
            <td className='p-0 px-2 py-3 text-secondary fst-italic'>
              {deposit?.comments || `...no comment`}
              <p>on 11/03/2023</p>
            </td>
          </tr>
        </>
      )
    }
  )

  return (
    <>
      <div
        className='modal fade'
        id={`payment-modal-${studentPayment?.id}-edit`}
        // data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content p-5 rounded rounded-5'>
            <div className='modal-header'>
              <div className='px-5 pt-5 pb-2 flex-column gap-2 w-100'>
                <button
                  type='button'
                  className='btn-close'
                  style={{ visibility: `hidden` }}
                  ref={closeBtn}
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4 className='fw-bold'>Edit Payment History</h4>

                  <button
                    onClick={() => handleEditAction(depositID)}
                    hidden={dontShowEditButton}
                    className={['btn btn-primary'].join(' ')}
                  >
                    <MdOutlineEditNote fontSize={`1.5rem`} className='mb-1' />{' '}
                    Proceed to Edit
                  </button>
                </div>
                <div className='d-flex gap-2'>
                  <p
                    className='text-secondary fs-lg'
                    // style={{ letterSpacing: `1px` }}
                  >
                    Click on the Payment Record you will like to edit
                  </p>
                </div>
              </div>
            </div>
            <div className='modal-body'>
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
                  className='table align-middle'
                >
                  {/* <tr className='mb-4'>
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
                  </tr> */}
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

export default EditPaymentHistoryModal
