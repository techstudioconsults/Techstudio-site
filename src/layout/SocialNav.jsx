import React from 'react'
import { Link } from 'react-router-dom'

import techimage from '../assets/icons/logo.png'
import { Button } from '../components'

const SocialNav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-blue'>
      <div className='container py-3 d-flex justify-content-between align-items-center'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex align-items-center gap-2'>
            <img className='logo' src={techimage} alt='logo' />
            <span className='fs-md fw-bold text-white'>Techstudio Academy</span>
          </div>
        </Link>

        <div
          className='d-lg-flex justify-content-end ms-lg-10 ms-xl-24'
          id='navbarNavAltMarkup'
        >
          <div className='d-flex gap-6 justify-content-center align-items-center my-10 my-lg-0'>
            <Button linkHref='/' linkText='Register' solidBtn navBtn />
            <Link className='nav-link text-white' to='/'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SocialNav
