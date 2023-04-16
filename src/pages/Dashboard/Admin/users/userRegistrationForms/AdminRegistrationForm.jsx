import React from 'react'

const AdminRegistrationForm = () => {
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
        {/* password */}
        <div className='mb-8 d-flex row align-items-center'>
          <div className='col-12'>
            <label
              htmlFor='password'
              className={`col-form-label fs-lg fw-bold text-blue w-100`}
            >
              Password
            </label>
            <p>Choose your most preferred option.</p>
          </div>
          <div className='col-12 mt-5'>
            <div className={` w-100`}>
              <div className='form-check border rounded-2 p-3 ps-10 d-flex align-items-center gap-3 mb-3'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='passwordRadio'
                  id='choosePassword'
                  value='option1'
                  checked
                />
                <label
                  className='form-check-label mt-1'
                  htmlFor='choosePassword'
                >
                  User chooses password
                </label>
              </div>
              <div className='form-check border rounded-2 p-3 ps-10 d-flex align-items-center gap-3'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='passwordRadio'
                  id='manualPassword'
                  value='option2'
                />
                <label className='form-check-label' htmlFor='manualPassword'>
                  Manually set password for the user.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AdminRegistrationForm
