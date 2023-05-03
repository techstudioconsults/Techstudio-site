import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { courses, paidCourses } from '../data'
import { HiOutlineEllipsisVertical } from 'react-icons/hi2'
import { MdOutlineEditNote } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import AddPaymentModal from './AddPaymentModal'
import FullPaymentHistory from './FullPaymentHistory'
import EditPaymentHistory from './EditPaymentHistory'
import style from '../style/paymentClasses.module.scss'
import DownloadSuccessfulModal from './DownloadSuccessfulModal'
import { useSelector } from 'react-redux'
import { selectStudentsPaymentRecord } from '../api/paymentSlice'
import { Icon } from '@iconify/react'
import { useGetClassByCourseIDMutation } from '../../Admin/classes/api/classApiSlice'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { selectClasses } from '../../Admin/classes/api/classSlice'
import { useForm } from 'react-hook-form'
import { selectCurrentToken } from '../../../Auth/api/authSlice'
import axios from 'axios'
import download from 'downloadjs'

const baseUrl = process.env.REACT_APP_BASE_URL

const Paymentoptions = () => {
  const { courseID } = useParams()
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showFullHistoryModal, setShowFullHistoryModal] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const classes = useSelector(selectClasses)
  const token = useSelector(selectCurrentToken)
  const [showDownload, setShowDownload] = useState(false)
  const [getClassesByCourseID] = useGetClassByCourseIDMutation()
  const studentPaymentDetails = useSelector(selectStudentsPaymentRecord)

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/csv',
    },
  }

  const headings = ['Name', 'Total', 'Amount Paid', 'Balance', 'Status', ' ']
  const setStatus = (status) => {
    if (status !== 'Full') {
      return 'text-danger'
    } else {
      return style.text
    }
  }
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

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    // resolver: yupResolver(schema),
  })

  function formatDate(isoDate) {
    const date = new Date(isoDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    const formattedDate = `${day}/${month}/${year}`
    return formattedDate
  }

  const handleDownload = async (data) => {
    console.log(data)
    try {
      const res = await axios.get(
        `${baseUrl}/payments/students/courses/${courseID}/download?status=${data.status}&classId=${data.class}`,
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

  const paidCourses = studentPaymentDetails.map((paidCourse) => {
    return (
      <div
        key={paidCourse?.id}
        className={[
          style.box,
          ' row d-flex align-items-center  border border-1 border-secondary-subtle my-4  ps-3 ',
        ].join(' ')}
      >
        <div className='col-3 text-start'>
          <h6 className='fw-bold m-0'>{paidCourse?.fullName} </h6>
          <p className='text-muted fs-sm'>{paidCourse?.schedule} </p>
        </div>
        <div className='col-2 text-center '>
          <p className='fw-semibold'>N{paidCourse?.total}</p>
        </div>
        <div className='col-3 text-start'>
          <p className={`${style.text} fw-semibold`}>
            N{paidCourse?.amountPaid}
          </p>
          <p className='text-muted fs-sm'>
            paid on {formatDate(paidCourse?.dateOfLastPayment)}
          </p>
        </div>
        <div className='col-2 text-start'>
          <p className='text-primary fw-semibold'>{paidCourse?.balance} </p>
        </div>
        <div className='col-1 text-start'>
          <p className={`${setStatus(paidCourse?.status)} fw-semibold`}>
            {paidCourse?.status}
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
                  onClick={() => setShowPaymentModal(true)}
                  className='dropdown-item'
                >
                  <Icon width={`1.5rem`} icon='material-symbols:edit-note' />{' '}
                  Add Payment Record
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowEdit(true)}
                  className='dropdown-item'
                >
                  <Icon width={`1.5rem`} icon='material-symbols:edit-note' />{' '}
                  Edit Payment Record
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowFullHistoryModal(true)}
                  className='dropdown-item'
                >
                  <Icon
                    width={`1.3rem`}
                    icon='material-symbols:view-headline'
                  />{' '}
                  View Payment History
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      {showPaymentModal && <AddPaymentModal />}
      {showFullHistoryModal && <FullPaymentHistory />}
      {showEdit && <EditPaymentHistory />}
      <form
        onSubmit={handleSubmit(handleDownload)}
        className='mt-4 d-flex justify-content-end align-items-center gap-3'
      >
        <div>
          <select
            className='form-select text-dark fs-sm'
            aria-label='Default select example'
            {...register(`class`)}
          >
            <option selected>Select a Class</option>
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
        {paidCourses}
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

export default Paymentoptions
