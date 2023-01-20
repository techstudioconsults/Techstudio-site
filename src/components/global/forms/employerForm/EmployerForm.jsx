import React from 'react'
import style from '../signupForm/signupForm.module.scss'

const EmployerForm = () => {
  return (
    <form className={[style.form, style.employerForm].join(' ')}>
      <div className={[style.password, 'input-group mb-3'].join(' ')}>
        <input
          type='text'
          id='role'
          className='form-control'
          aria-describedby='roleHelpBlock'
          placeholder='What role are you trying to fill?'
        />
      </div>
      <div className={style.email}>
        <input
          type='email'
          id='email'
          className='form-control'
          aria-describedby='emailHelpBlock'
          placeholder='Email'
        />
      </div>

      <div className={style.btnContainer}>
        <button type='submit'>Get Started</button>
      </div>
    </form>
  )
}

export default EmployerForm
