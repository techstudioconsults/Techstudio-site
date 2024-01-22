import React from 'react'

import { SignupForm } from '../../../components'
import { genericAnimation } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'
import { Authlayout } from '../../../layout'

import style from '../auth.module.scss'

const Register = () => {
  return (
    <Authlayout>
      <Gsap animationFuncion={() => genericAnimation(`register`)}>
        <section className={[style.signup, `cc-shadow register`].join(' ')}>
          <div className={style.header}>
            <h4 className='text-blue fw-bolder mb-3'>One last step, let’s get to know you</h4>
            <p className={style.subTitle}>Create an account with Us</p>
          </div>
          <SignupForm />
        </section>
      </Gsap>
    </Authlayout>
  )
}

export default Register
