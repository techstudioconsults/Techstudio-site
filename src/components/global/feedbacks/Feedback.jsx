/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/Empty-pana.png'

const Feedback = ({ message, route, btnName }) => {
  return (
    <section className=' d-flex flex-column justify-content-center align-items-center'>
      <div style={{ width: `290px` }}>
        <img className='cc-img-fluid' src={img} alt={`done/empty`} />
      </div>
      <div>
        <h5 className='text-primary fs-xl fw-700'>{message}</h5>
        <div className='d-flex justify-content-center mt-10'>
          <Link to={route}>
            <button className='btn btn-primary fs-sm'>
              {btnName || `Create Classes`}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Feedback
