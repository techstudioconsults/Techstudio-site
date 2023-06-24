/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Feedback = ({ message, route, btnName, fontSize, handleClick }) => {
  return (
    <section className=' d-flex flex-column justify-content-center align-items-center'>
      <div style={{ width: `290px` }}>
        <img
          className='cc-img-fluid'
          src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218520/techstudio-web-app/assets/images/Empty-pana_tbwrgc.png`}
          alt={`done/empty`}
        />
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
