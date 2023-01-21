import React from 'react'
import { Authlayout } from '../../layout'
import paymentImg from '../../assets/images/payment.webp'
import style from './payment.module.scss'
import { Link } from 'react-router-dom'
import Button from '../global/Button'

const Payment = () => {
  return (
    <Authlayout>
      <section className={[style.payment, `cc-shadow`].join(' ')}>
        <div className={style.header}>
          <h4 className='text-blue fw-bolder mb-3'>Make Payment</h4>
          <p className={style.subTitle}>It gets easy from here.</p>
        </div>
        <div className={style.imgContainer}>
          <img src={paymentImg} alt='payment-img' />
        </div>
        <div className={style.text}>
          <p>
            Make a transfer to any of these accounts, payment will be confirmed
            Within 12 hours or visit our office @ 3, Ogunlesi street, Onipanu,
            Lagos.
          </p>
        </div>
        <div className={style.accounts}>
          <div className={style.account}>
            <p>
              GTBANK: <span>0144093702</span>
            </p>
          </div>
          <div className={style.account}>
            <p>
              ACCESS: <span>7654567876</span>
            </p>
          </div>
          <div className={style.account}>
            <p>
              FIDELITY: <span>3476545677</span>
            </p>
          </div>
        </div>
        <div className={style.btnContainer}>
          <Button linkHref='/' linkText='Payment made' solidBtn navBtn />
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
