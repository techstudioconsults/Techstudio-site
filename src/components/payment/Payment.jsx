import React from 'react'
import { Link } from 'react-router-dom'

import { Authlayout } from '../../layout'
import Button from '../global/Button'

// import paymentImg from '../../assets/images/payment.webp'
import style from './payment.module.scss'

const Payment = () => {
  return (
    <Authlayout>
      <section className={[style.payment, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>Make Payment</h4>
          <p className={style.subTitle}>It gets easy from here.</p>
        </div>
        <div className={style.imgContainer}>
          <img
            src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/payment_sbiwls.webp`}
            alt='payment-img'
          />
        </div>
        <div className={style.text}>
          <p>
            You can pay using any of these medium, payment will be confirmed via
            mail and you are good to go!
          </p>
        </div>
        <div className={style.controls}>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='transfer'
              id='Bank'
            />
            <label className='form-check-label' htmlFor='Bank'>
              Bank Transfer
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='transfer'
              id='Paystack'
            />
            <label className='form-check-label' htmlFor='Paystack'>
              Paystack
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='transfer'
              id='Installment'
            />
            <label className='form-check-label' htmlFor='Installment'>
              Pay Installment (twice)
            </label>
          </div>
        </div>
        <div className={style.btnContainer}>
          <Button
            linkHref='/payment/accounts'
            linkText='Proceed to pay'
            solidBtn
            navBtn
          />
        </div>
        <footer className={style.caption}>
          <p className={style.footerLink}>
            Do you have an account already?{' '}
            <Link to={`/signin`} className={style.signupLink}>
              Sign in here
            </Link>
          </p>
        </footer>
      </section>
    </Authlayout>
  )
}

export default Payment
