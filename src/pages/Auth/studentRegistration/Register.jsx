import React from 'react'

import { SignupForm } from '../../../components'
import { Authlayout } from '../../../layout'
import style from '../auth.module.scss'

const Register = () => {
  return (
    <Authlayout>
      <section className={[style.signup, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>
            One last step, let’s get to know you
          </h4>
          <p className={style.subTitle}>Create an account with Us</p>
        </div>
        <SignupForm />
      </section>
    </Authlayout>
  )
}

export default Register
