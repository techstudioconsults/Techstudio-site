/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/Empty-pana.png'

const Feedback = ({ message, route, btnName, fontSize, handleClick }) => {
  return (
    <section className=' d-flex flex-column justify-content-center align-items-center'>
      <div style={{ width: `290px` }}>
        <img className='cc-img-fluid' src={img} alt={`done/empty`} />
      </div>
      <div>
        <p
          className={`text-primary fs-${
            fontSize || `xl`
          } fw-semibold text-center`}
        >
          {message}
        </p>
        <div
          className={`${
            btnName ? `d-flex` : `d-none`
          } justify-content-center mt-5`}
        >
          <Link to={route}>
            <button className='btn btn-primary fs-sm'>{btnName}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Feedback
