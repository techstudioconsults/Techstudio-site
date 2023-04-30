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

const Paymentoptions = () => {
  const { courseID } = useParams()
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showFullHistoryModal, setShowFullHistoryModal] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const headings = ['Name', 'Total', 'Amount Paid', 'Balance', 'Status', ' ']
  const setStatus = (s) => {
    if (s === 'Full') {
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
  return (
    <div>
      {showPaymentModal && <AddPaymentModal />}
      {showFullHistoryModal && <FullPaymentHistory />}
      {showEdit && <EditPaymentHistory />}
      <div className='mt-4 d-flex justify-content-end align-items-center gap-3'>
        <div>
          <select
            className='form-select text-dark'
            aria-label='Default select example'
          >
            <option selected>Javascript Fullstack January 2023</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div>
          <select
            className='form-select text-dark'
            aria-label='Default select example'
          >
            <option selected>All Status</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div>
          <button className='btn px-5 btn-primary fs-2'>Download List</button>
        </div>
      </div>

      <div className='row mt-5 ps-3 '>
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
        {paidCourses.map((c) => {
          return (
            <div
              key={c.id}
              className={[
                style.box,
                ' row d-flex align-items-center  border border-3 border-secondary my-4  ps-3 ',
              ].join(' ')}
            >
              <div className='col-3 text-start'>
                <h6 className='fw-bold fs-1'>{c.name} </h6>
                <p className='text-muted'>{c.class} </p>
              </div>
              <div className='col-2 text-center '>
                <p>{c.total} </p>
              </div>
              <div className='col-3 text-start'>
                <p className={style.text}>{c.amountPaid} </p>
                <p className='text-muted'>{c.date}</p>
              </div>
              <div className='col-2 text-start'>
                <p className='text-primary'>{c.balance} </p>
              </div>
              <div className='col-1 text-start'>
                <p className={setStatus(c.status)}>{c.status}</p>
              </div>
              <div className='col-1 text-start'>
                <div>
                  <button
                    className='dropdown-toggle bg-white'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <HiOutlineEllipsisVertical
                      className={[style.ellipsis, `text-secondary`].join(' ')}
                    />
                  </button>
                  <ul className='dropdown-menu dropdown-menu-end dropdown-menu-sm'>
                    <li>
                      <button
                        onClick={() => setShowPaymentModal(true)}
                        className='dropdown-item'
                        href='ww.com'
                      >
                        <MdOutlineEditNote className={style.icons} /> Add
                        Payment Record
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setShowEdit(true)}
                        className='dropdown-item'
                        href='www.com'
                      >
                        <MdOutlineEditNote className={style.icons} /> Edit
                        Payment Record
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setShowFullHistoryModal(true)}
                        className='dropdown-item'
                        href='ww.com'
                      >
                        <GiHamburgerMenu className={style.icons} /> View Payment
                        History
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
        <div className='d-flex w-100 justify-content-between align-items-center mt-5 px-0'>
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
        </div>
      </div>
    </div>
  )
}

export default Paymentoptions
