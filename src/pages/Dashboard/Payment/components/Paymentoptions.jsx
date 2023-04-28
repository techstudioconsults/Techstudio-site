import React from 'react'
import { useParams } from 'react-router-dom'
import { courses, paidCourses } from '../data'
import { HiOutlineEllipsisVertical } from 'react-icons/hi2'

const Paymentoptions = () => {
  const { courseID } = useParams()

  return (
    <div>
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
          <a href='www.com' className='btn px-5 btn-primary fs-2'>
            Download List
          </a>
        </div>
      </div>
      <div className='mt-5'>
        {paidCourses.map((c) => {
          return (
            <div
              key={c.id}
              className='d-flex justify-content-around align-items-center border border-3 border-secondary my-4 px-1'
            >
              <div>
                <h6 className=''>{c.name} </h6>
                <p>{c.class} </p>
              </div>
              <div>
                <p>{c.total} </p>
              </div>
              <div>
                <p className='text-success'>{c.amountPaid} </p>
                <p className='text-muted'>{c.date}</p>
              </div>
              <div>
                <p className='text-primary'>{c.balance} </p>
              </div>
              <div>
                <p>{c.status}</p>
              </div>
              <div>
                <div>
                  <button
                    className='dropdown-toggle bg-white'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <HiOutlineEllipsisVertical className='text-secondary' />
                  </button>
                  <ul className='dropdown-menu dropdown-menu-end'>
                    <li>
                      <a className='dropdown-item' href='ww.com'>
                        Add Payment Record
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='www.com'>
                        Edit Payment Record
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='ww.com'>
                        View Payment History
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Paymentoptions
