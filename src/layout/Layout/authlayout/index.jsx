import React from 'react'
import style from './authLayout.module.scss'
import authImg from '../../../assets/images/authImg.webp'
import logo from '../../../assets/icons/logo.png'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const index = ({ children }) => {
  return (
    <section className={style.authLayout}>
      <Link to={`/`} className={style.logo}>
        <img src={logo} alt='logo' />
      </Link>
      <div className={style.imgContainer}>
        <img src={authImg} alt='auth-img' className='cc-img-fluid' />
      </div>
      <div className={style.children}>{children}</div>
    </section>
  )
}

index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default index
