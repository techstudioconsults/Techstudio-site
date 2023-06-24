import React from 'react'
import { useLocation } from 'react-router-dom'

import { Authlayout } from '../../../layout'

import OTPForm from './OTPForm'

import style from '../auth.module.scss'

const OPTVerification = () => {
  const { state } = useLocation()
  return (
    <Authlayout>
      <section className={[style.signup, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>OTP Verification</h4>
          <p className={style.subTitle}>Verify OTP to set new password</p>
        </div>
        <OTPForm email={state?.email} />
      </section>
    </Authlayout>
  )
}

export default OPTVerification
