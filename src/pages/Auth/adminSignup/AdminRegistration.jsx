import React from 'react'

import { AdminSignupForm } from '../../../components'
import { Authlayout } from '../../../layout'

import style from '../auth.module.scss'

const AdminSignup = () => {
  return (
    <Authlayout>
      <section className={[style.signup, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>
            Administration Registration
          </h4>
          <p className={style.subTitle}>Create an account with Us</p>
        </div>
        <AdminSignupForm />
      </section>
    </Authlayout>
  )
}

export default AdminSignup
