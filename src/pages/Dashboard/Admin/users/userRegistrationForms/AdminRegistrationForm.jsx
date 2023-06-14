/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

import { selectErrorMessage } from '../../../../../app/api/appSlice'
import { Feedback, Portal, ToastComponent } from '../../../../../components'
import NewToast from '../../../../../components/global/toast/NewToast'
import useToast from '../../../../../hooks/useToast'
import { useRegisterAdminMutation } from '../../../../Auth/api/authApiSlice'
import { useGetAllTutorsMutation } from '../api/usersApiSlice'

const AdminRegistrationForm = ({ cancelBtn }) => {
  const [registerAdmin, { isLoading }] = useRegisterAdminMutation()
  const [getAllTutors] = useGetAllTutorsMutation()
  const [passwordStatus, setPasswordStatus] = useState(`user`)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const errorText = useSelector(selectErrorMessage)

  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPasswordStatus(e.target.value)
  }

  const { register, reset, handleSubmit, f } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    console.log(data)
    const formData = {
      ...data,
      // userRole: `ADMIIN`,
      phoneNumber: parseInt(data.phoneNumber),
    }
    console.log(formData)
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('feedback')
      )
      const res = await registerAdmin(formData).unwrap()
      if (res.success) {
        reset()
        cancelBtn.current.click()
        modal.show()
        getAllTutors().unwrap()
      }
    } catch (err) {
      dispatch({
        type: `app/setErrorMessage`,
        payload: err.data.message,
      })
      setErrorMessage(err.data.message)
    }
  }

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [isSubmitSuccessful, reset])

  return (
    <>
      <ToastComponent errorMessage={errorMessage} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Portal wrapperId='react-portal-modal-container'>
          <Feedback
            content={{
              title: `Registration Successfull!`,
              desc: ` Your details have been received and our Customer Care
                Representative will contact you shortly.`,
            }}
          />
        </Portal>
        <header>
          <h5 className='fs-lg'>User’s Profile</h5>
          <p>Fill in the user’s details. All fields are required.</p>
        </header>
        {/* =========================================== */}
        <NewToast errorText={errorText} />
        {/* =========================================== */}
        <div
          style={{ height: `25rem`, overflowY: `auto` }}
          className='mt-10 container hide_scrollbar'
        >
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
                  required
                  placeholder='First name'
                  type='text'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='firstName'
                  {...register('firstName')}
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
                  required
                  placeholder='Last name'
                  type='text'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='lastName'
                  {...register('lastName')}
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
                  required
                  placeholder='Email Address'
                  type='text'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='email'
                  {...register('email')}
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
                  required
                  placeholder='08012345678'
                  type='tel'
                  pattern='[0-9]{11}'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='phoneNumber'
                  {...register('phoneNumber')}
                />
              </div>
            </div>
          </div>
          {/* password input
        required*/}
          <div className='mb-8 d-flex row align-items-center'>
            <div className='col-4'>
              <label
                htmlFor='phoneNumber'
                className={`col-form-label fs-lg fw-bold text-blue w-100`}
              >
                Password
              </label>
            </div>
            <div className='col-8'>
              <div className={` w-100`}>
                <input
                  disabled={passwordStatus === `user`}
                  placeholder='*******'
                  type='password'
                  className='form-control form-control-lg fs-sm text-dark'
                  id='password'
                  {...register('password')}
                />
              </div>
            </div>
          </div>
          {/* password set*/}
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
                    defaultChecked
                    onChange={handlePasswordChange}
                    className='form-check-input'
                    type='radio'
                    name='passwordRadio'
                    id='choosePassword-admin'
                    value='user'
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
                    onChange={handlePasswordChange}
                    className='form-check-input'
                    type='radio'
                    name='passwordRadio'
                    id='manualPassword-admin'
                    value='admin'
                  />
                  <label className='form-check-label' htmlFor='manualPassword'>
                    Manually set password for the user.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <button type='submit' className='btn btn-primary'>
              <div
                hidden={!isLoading}
                className='spinner-border spinner-border-sm me-5 text-white'
                role='status'
              />
              {isLoading ? `Please wait...` : `Register`}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AdminRegistrationForm
