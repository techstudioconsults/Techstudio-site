import React from 'react'

import { LoginForm } from '../../../components'
import { genericAnimation } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'
import { Authlayout } from '../../../layout'

import style from '../auth.module.scss'

const SignIn = () => {
  return (
    <Authlayout>
      <Gsap animationFuncion={() => genericAnimation(`login`)}>
        <section className={[style.signup, `cc-shadow login`].join(' ')}>
          <div className={style.header}>
            <h4 className='text-blue fw-bolder mb-3'>Welcome Back</h4>
            <p className={style.subTitle}>
              Let’s continue from where we stopped
            </p>
          </div>
          <LoginForm />
        </section>
      </Gsap>
    </Authlayout>
  )
}

export default SignIn
