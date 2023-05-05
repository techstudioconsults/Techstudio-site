/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectClasses } from '../../classes/api/classSlice'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { selectStudentsPaymentRecord } from '../api/paymentSlice'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import download from 'downloadjs'
import { Portal } from '../../../../../components'
import UserRegistrationFormModal from '../../users/userRegistrationForms/UserRegistrationFormModal'
import Feedback from '../../../../../components/global/feedbacks/Feedback'
import PaymentDisplayCard from './PaymentDisplayCard'

const baseUrl = process.env.REACT_APP_BASE_URL

const PaymentListView = () => {
  const { courseID } = useParams()
  const [classType, setClassType] = useState(``)
  const [statusType, setStatusType] = useState(``)
  const classes = useSelector(selectClasses)
  const token = useSelector(selectCurrentToken)
  const studentPaymentDetails = useSelector(selectStudentsPaymentRecord)
  const dispatch = useDispatch()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/csv',
    },
  }

  const headings = ['Name', 'Total', 'Amount Paid', 'Balance', 'Status', ' ']

  const setheading = (s) => {
    if (s === 'Name') {
      return 'col-3'
    } else if (s === 'Total') {
      return 'col-2 text-center'
    } else if (s === 'Amount Paid') {
      return 'col-3'
    } else if (s === 'Balance') {
      return 'col-2'
    } else if (s === 'Status') {
      return 'col-1'
    } else {
      return 'col-1'
    }
  }

  const classesList = classes?.ongoing?.map((sClass) => {
    return (
      <option key={sClass.id} value={sClass.id}>
        {sClass.title}
      </option>
    )
  })

  const { register, handleSubmit } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const showFormModal = () => {
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('payment-modal')
    )
    modal.show()
  }

  const filterPayment = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/payments/students/courses/${courseID}?status=${statusType}&classId=${classType}`,
        credentials
      )
      if (res.data.success) {
        dispatch({
          type: `payment/setStudentPaymentRecord`,
          payload: {
            record: res.data.data,
          },
        })
      }
    } catch (err) {
      // setLoading(false)
      // setErrorMessage(err.response.data.message)
      // toast.show()
    }
  }
  const handleDownload = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/payments/students/courses/${courseID}/download?status=${statusType}&classId=${classType}`,
        credentials
      )
      console.log(res.data)
      if (res.status === 200) {
        // setLoading(false)
        const blob = new Blob([res.data], { type: 'text/csv' })
        download(blob, 'certificate.csv')
      }
    } catch (err) {
      // setLoading(false)
      // setErrorMessage(err.response.data.message)
      // toast.show()
    }
  }

  const handleClassChange = (e) => {
    setClassType(e.target.value)
    filterPayment()
  }
  const handleStatusChange = (e) => {
    setStatusType(e.target.value)
    filterPayment()
  }

  console.log(studentPaymentDetails)

  const paidCourses = studentPaymentDetails?.map((paymentDetail, index) => {
    return <PaymentDisplayCard key={index} paymentDetail={paymentDetail} />
  })

  return (
    <div>
      <Portal wrapperId='react-portal-modal-container'>
        <UserRegistrationFormModal />
      </Portal>
      <form
        // onSubmit={handleSubmit(handleDownload)}
        className='mt-4 d-flex justify-content-end align-items-center gap-3'
      >
        <div>
          <select
            className='form-select text-dark fs-sm'
            aria-label='Default select example'
            {...register(`class`)}
            // onChange={handleClassChange}
          >
            <option selected>Select a Class</option>
            {classesList}
          </select>
        </div>
        <div>
          <select
            className='form-select text-dark fs-sm'
            aria-label='Default select example'
            // onChange={handleStatusChange}
            {...register(`status`)}
          >
            <option selected>All Status</option>
            <option value={`full`}>Full</option>
            <option value={`part`}>Part</option>
          </select>
        </div>
        <div>
          <button type='submit' className='btn px-5 btn-primary fs-2'>
            Download List
          </button>
        </div>
      </form>

      <div className='row mt-10 ps-3 '>
        {headings.map((m, index) => {
          return (
            <div key={index} className={setheading(m)}>
              <div>
                <h6> {m} </h6>
              </div>
            </div>
          )
        })}
      </div>

      <div className='mt-5'>
        {studentPaymentDetails?.length ? (
          paidCourses
        ) : (
          <div onClick={showFormModal}>
            <Feedback
              btnName={`Register A Student`}
              message={`No Registered Student`}
            />
          </div>
        )}
        {/* <div className='d-flex w-100 justify-content-between align-items-center mt-5 p-0'>
          <div className=''>
            <p className='text-muted'>10 Entries per page </p>
          </div>
          <div className=' text-center'>
            <p className='text-muted'>Page 1 of 1</p>
          </div>
          <div className=' d-flex justify-content-end gap-4'>
            <button className={[style.button]}>
              {' '}
              <GrFormPrevious /> Previous
            </button>
            <button className={[style.button]}>
              Next <GrFormNext className='text-muted' />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PaymentListView
