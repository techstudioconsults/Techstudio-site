/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react'
import AddPaymentModal from './AddPaymentModal'
import FullPaymentHistoryModal from './FullPaymentHistoryModal'
import style from '../style/paymentClasses.module.scss'
import { HiOutlineEllipsisVertical } from 'react-icons/hi2'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { Icon } from '@iconify/react'
import { Portal } from '../../../../../components'
import { useGetSingleStudentPaymentRecordsMutation } from '../api/paymentApiSlice'
import EditPaymentModal from './EditPaymentRecord'
import EditPaymentHistoryModal from './EditPaymentHistoryModal'
import useCurrency from '../../../../../hooks/useCurrency'

const PaymentDisplayCard = ({ paymentDetail }) => {
  const currency = useCurrency()
  const [getSingleStudentPaymentRecords] =
    useGetSingleStudentPaymentRecordsMutation()

  function formatDate(isoDate) {
    const date = new Date(isoDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    const formattedDate = `${day}/${month}/${year}`
    return formattedDate
  }

  const setStatus = (status) => {
    if (status !== 'Full') {
      return 'text-danger'
    } else {
      return style.text
    }
  }

  const showAddPaymentForm = (studentID) => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`add-${studentID}-modal`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }
  const showEditPaymentModal = async (studentID) => {
    try {
      await getSingleStudentPaymentRecords(studentID).unwrap()
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`payment-modal-${studentID}-edit`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }
  const showPaymentHistoryForm = async (studentID) => {
    try {
      await getSingleStudentPaymentRecords(studentID).unwrap()
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`payment-modal-${studentID}`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      key={paymentDetail?.id}
      className={[
        style.box,
        ' row d-flex align-items-center  border border-1 border-secondary-subtle my-4  ps-3 ',
      ].join(' ')}
    >
      <Portal>
        <AddPaymentModal studentPayment={paymentDetail} />
      </Portal>
      <Portal>
        <FullPaymentHistoryModal studentPayment={paymentDetail} />
      </Portal>
      <Portal>
        <EditPaymentHistoryModal studentPayment={paymentDetail} />
      </Portal>

      <div className='col-3 text-start'>
        <h6 className='fw-bold m-0'>{paymentDetail?.fullName} </h6>
        <p className='text-muted fs-sm'>{paymentDetail?.schedule} </p>
      </div>
      <div className='col-2 text-center '>
        <p className='fw-semibold'>{currency(paymentDetail?.total)}</p>
      </div>
      <div className='col-3 text-start'>
        <p className={`${style.text} fw-semibold`}>
          {currency(paymentDetail?.amountPaid)}
        </p>
        <p className='text-muted fs-sm'>
          paid on {formatDate(paymentDetail?.dateOfLastPayment)}
        </p>
      </div>
      <div className='col-2 text-start'>
        <p className='text-primary fw-semibold'>
          {currency(paymentDetail?.balance)}
        </p>
      </div>
      <div className='col-1 text-start'>
        <p className={`${setStatus(paymentDetail?.status)} fw-semibold`}>
          {paymentDetail?.status}
        </p>
      </div>
      <div className='col-1 text-start'>
        <div>
          <button
            className='dropdown-toggle dropdown-center bg-white'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <HiOutlineEllipsisVertical
              className={[style.ellipsis, `text-secondary`].join(' ')}
            />
          </button>
          <ul className='dropdown-menu dropdown-menu-end'>
            <li>
              <button
                onClick={() => showAddPaymentForm(paymentDetail.id)}
                className='dropdown-item'
              >
                <Icon width={`1.5rem`} icon='material-symbols:edit-note' /> Add
                Payment Record
              </button>
            </li>
            <li>
              <button
                onClick={() => showEditPaymentModal(paymentDetail.id)}
                className='dropdown-item'
              >
                <Icon width={`1.5rem`} icon='material-symbols:edit-note' /> Edit
                Payment Record
              </button>
            </li>
            <li>
              <button
                onClick={() => showPaymentHistoryForm(paymentDetail.id)}
                className='dropdown-item'
              >
                <Icon width={`1.3rem`} icon='material-symbols:view-headline' />{' '}
                View Payment History
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PaymentDisplayCard
