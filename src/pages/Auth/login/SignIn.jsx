import React from 'react'
import { LoginForm } from '../../../components'
import { Authlayout } from '../../../layout'
import style from '../auth.module.scss'

const Signup = () => {
  return (
    <Authlayout>
      <section className={[style.signup, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>Welcome Back</h4>
          <p className={style.subTitle}>Let’s continue from where we stopped</p>
        </div>
        <LoginForm />
      </section>
    </Authlayout>
  )
}

export default Signup
