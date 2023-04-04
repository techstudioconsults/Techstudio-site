/* eslint-disable react/prop-types */
import React from 'react'
import img from '../../../assets/images/Done-rafiki.svg'

const Feedback = ({ message }) => {
  return (
    <section className=' d-flex flex-column justify-content-center align-items-center'>
      <div className='w-50'>
        <img className='cc-img-fluid' src={img} alt={`done/empty`} />
      </div>
      <div>
        <h5 className='text-primary'>{message}</h5>
      </div>
    </section>
  )
}

export default Feedback
