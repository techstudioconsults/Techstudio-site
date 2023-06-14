import React from 'react'

import { ForgotPasswordForm } from '../../../components'
import { Authlayout } from '../../../layout'

import style from '../auth.module.scss'

const ForgotPassword = () => {
  return (
    <Authlayout>
      <section className={[style.signup, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>
            Did you forget your Password ?
          </h4>
          <p className={style.subTitle}>
            No worries, fill in the form below to reset password
          </p>
        </div>
        <ForgotPasswordForm />
      </section>
    </Authlayout>
  )
}

export default ForgotPassword
