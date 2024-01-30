import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import logo from '../../../assets/icons/logo.png'
import MinimalFooter from '../../MinimalFooter'

import style from './authLayout.module.scss'

const index = ({ children }) => {
  return (
    <section className={style.authLayout}>
      <Link to={`/`} className={style.logo}>
        <img src={logo} alt='logo' />
      </Link>
      <div className={`${style.imgContainer}`}>
        <img
          // src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9424_ffooid_upwkdx.png`}
          // src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/IMG_9425_lelq4u_vbf8de.png`}
          src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/authImg_uy00im_gqve3c.webp`}
          alt='auth-img'
          className='cc-img-fluid'
        />
      </div>
      <div className={style.children}>
        <div className={style.childrenWrapper}>
          {children}
          <div className={[style.minimalFooter].join(' ')}>
            <MinimalFooter />
          </div>
        </div>
      </div>
    </section>
  )
}

index.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default index
