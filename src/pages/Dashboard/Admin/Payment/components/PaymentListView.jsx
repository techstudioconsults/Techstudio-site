/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import axios from 'axios'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import download from 'downloadjs'

import { Portal, ToastComponent } from '../../../../../components'
import Feedback from '../../../../../components/global/feedbacks/Feedback'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'
import useToast from '../../../../../hooks/useToast'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { selectClasses } from '../../classes/api/classSlice'
import UserRegistrationFormModal from '../../users/userRegistrationForms/UserRegistrationFormModal'
import { selectStudentsPaymentRecord } from '../api/paymentSlice'

import PaymentDisplayCard from './PaymentDisplayCard'

const baseUrl = process.env.REACT_APP_BASE_URL

const PaymentListView = () => {
  const { courseID } = useParams()
  const [isLoading, setLoading] = useState(false)
  const [isDownloadLoading, setDownloadLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const classes = useSelector(selectClasses)
  const token = useSelector(selectCurrentToken)
  const studentPaymentDetails = useSelector(selectStudentsPaymentRecord)
  const dispatch = useDispatch()
  const { toast } = useToast()

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

  const filterPayment = async (data) => {
    setLoading(true)
    if (data.class === `all`) {
      try {
        const res = await axios.get(
          `${baseUrl}/payments/students/courses/${courseID}`,
          credentials
        )

        if (res.data.success) {
          setLoading(false)
          dispatch({
            type: `payment/setStudentPaymentRecord`,
            payload: {
              record: res.data.data,
            },
          })
        }
      } catch (err) {
        setLoading(false)
        setErrorMessage(err.response.data.message)
        toast.show()
      }
    } else {
      try {
        const res = await axios.get(
          `${baseUrl}/payments/students/courses/${courseID}?status=${data.status}&classId=${data.class}`,
          credentials
        )

        if (res.data.success) {
          setLoading(false)
          dispatch({
            type: `payment/setStudentPaymentRecord`,
            payload: {
              record: res.data.data,
            },
          })
        }
      } catch (err) {
        setLoading(false)
        setErrorMessage(err.response.data.message)
        toast.show()
      }
    }
  }
  const handleDownload = async (data) => {
    console.log(data)
    setDownloadLoading(true)
    if (data.class === `all`) {
      try {
        const res = await axios.get(
          `${baseUrl}/payments/students/courses/${courseID}/download`,
          credentials
        )

        if (res.status === 200) {
          setDownloadLoading(false)
          const blob = new Blob([res.data], { type: 'text/csv' })
          download(blob, `Payment Details.csv`)
        }
      } catch (err) {
        setDownloadLoading(false)
        setErrorMessage(err.response.data.message)
        toast.show()
      }
    } else {
      try {
        const res = await axios.get(
          `${baseUrl}/payments/students/courses/${courseID}/download?status=${data.status}&classId=${data.class}`,
          credentials
        )

        if (res.status === 200) {
          setDownloadLoading(false)
          const blob = new Blob([res.data], { type: 'text/csv' })
          download(blob, `Payment Details.csv`)
        }
      } catch (err) {
        setDownloadLoading(false)
        setErrorMessage(err.response.data.message)
        toast.show()
      }
    }
  }

  const paidCourses = studentPaymentDetails?.map((paymentDetail, index) => {
    return <PaymentDisplayCard key={index} paymentDetail={paymentDetail} />
  })

  return (
    <div>
      <ToastComponent errorMessage={errorMessage} />
      <Portal wrapperId='react-portal-modal-container'>
        <UserRegistrationFormModal />
      </Portal>
      <section className='mt-4 d-flex justify-content-between align-items-center gap-3'>
        <form
          onSubmit={handleSubmit(filterPayment)}
          className='d-flex justify-content-end align-items-center gap-3'
        >
          <div>
            <select
              className='form-select text-dark fs-sm'
              aria-label='Default select example'
              {...register(`class`)}
            >
              <option selected>Select a Class</option>
              <option value={`all`}>All</option>
              {classesList}
            </select>
          </div>
          <div>
            <select
              className='form-select text-dark fs-sm'
              aria-label='Default select example'
              {...register(`status`)}
            >
              <option selected>All Status</option>
              <option value={`Full`}>Full</option>
              <option value={`Part`}>Part</option>
            </select>
          </div>
          <button type='submit'>
            <Icon width={`1.5rem`} icon={`system-uicons:filtering`} />
          </button>
        </form>
        <div>
          <button
            disabled={isDownloadLoading}
            className='btn btn-primary'
            onClick={handleSubmit(handleDownload)}
            id='download-list'
          >
            <div
              hidden={!isDownloadLoading}
              className='spinner-border spinner-border-sm me-5 text-white'
              role='status'
            />
            {isDownloadLoading ? `Downloading...` : `Download List`}
          </button>
        </div>
      </section>

      <section className='container'>
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
      </section>

      <div className='mt-5'>
        {isLoading ? (
          <SpinnerComponent />
        ) : studentPaymentDetails?.length ? (
          <section className='container'>{paidCourses}</section>
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
