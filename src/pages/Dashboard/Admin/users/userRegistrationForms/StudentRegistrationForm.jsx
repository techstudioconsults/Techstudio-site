import React from 'react'

const StudentRegistrationForm = () => {
  return (
    <form encType='multipart/form-data'>
      <header>
        <h5 className='fs-lg'>User’s Profile</h5>
        <p>Fill in the user’s details. All fields are required.</p>
      </header>
      <div className='mt-10 container'>
        {/* first name */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='firstName'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              First Name
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <input
                placeholder='First name'
                type='text'
                className='form-control form-control-lg'
                id='firstName'
              />
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='lastName'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Last Name
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <input
                placeholder='Last name'
                type='text'
                className='form-control form-control-lg'
                id='lastName'
              />
            </div>
          </div>
        </div>
        {/* Email */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='email'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Email
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <input
                placeholder='Email Address'
                type='text'
                className='form-control form-control-lg'
                id='email'
              />
            </div>
          </div>
        </div>
        {/* Phone Number */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='phoneNumber'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Phone Number
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <input
                placeholder='080123456789'
                type='number'
                className='form-control form-control-lg'
                id='phoneNumber'
              />
            </div>
          </div>
        </div>
        {/* Courses */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='courses'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Courses
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <select
                className='form-select'
                aria-label='Default select example'
              >
                <option selected>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
        </div>
        {/* Classes */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='classes'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Classes
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <select
                className='form-select'
                aria-label='Default select example'
              >
                <option selected>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
        </div>
        {/* Paymaent */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-4'>
            <label
              htmlFor='phoneNumber'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Deposit
            </label>
          </div>
          <div className='col-8'>
            <div className={` w-100`}>
              <input
                placeholder='300,000'
                type='number'
                className='form-control form-control-lg'
                id='payment'
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default StudentRegistrationForm
