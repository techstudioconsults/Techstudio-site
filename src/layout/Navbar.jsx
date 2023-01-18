import React from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import techimage from '../assets/icons/logo.png'
// import Button from "../components/buttons/Button";
import { FaChevronDown } from 'react-icons/fa'
import { useEffect } from 'react'
import { Button } from '../components'
import { useRef } from 'react'

const Navbar = () => {
  const navEl = useRef(null)

  useEffect(() => {
    // document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      if (navEl) {
        let { clientHeight } = navEl.current
        if (window.scrollY >= clientHeight) {
          navEl.current.style.backgroundColor = `#1f2666`
          navEl.current.style.boxShadow = `rgba(0, 0, 0, 0.2) 0px 18px 50px 5px`
        } else if (window.scrollY == 0) {
          navEl.current.style.backgroundColor = `transparent`
          navEl.current.style.boxShadow = null
        }
      }
    })
    // })
  }, [])

  return (
    <nav ref={navEl} className='navbar navbar-expand-lg fixed-top'>
      <div className='container py-3'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex align-items-center gap-2'>
            <img className='logo' src={techimage} alt='logo' />
            <span className='fs-md fw-bold text-white'>Techstudio Academy</span>
          </div>
        </Link>

        <HiOutlineMenuAlt4
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className='navbar-toggler text-white fs-6xl border-0'
        />

        <div
          className='collapse navbar-collapse d-lg-flex justify-content-between ms-lg-10 ms-xl-24'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav align-items-center text-center gap-8 fs-sm'>
            <Link
              className='nav-link active text-white'
              aria-current='page'
              to='/about-us'
            >
              About Us
            </Link>
            <div className='dropdown'>
              <div
                className='dropdown-toggle btn fs-sm text-white border-0'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Courses
                <FaChevronDown className='ms-2 fs-sm' />
              </div>
              <ul className='dropdown-menu mt-5'>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm py-2'
                    to='/course/frontend'
                  >
                    Frontend
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm py-2'
                    to='/course/data-science'
                  >
                    Data Science
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm py-2'
                    to='/course/fullstack'
                  >
                    Fullstack
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm py-2'
                    to='/course/mobile'
                  >
                    Mobile Development
                  </Link>
                </li>
                <li className='my-2'>
                  <Link className='dropdown-item' to='/course/uiux'>
                    UI/UX
                  </Link>
                </li>
              </ul>
            </div>
            <Link className='nav-link text-white' to='/employers'>
              Employers
            </Link>
            <Link className='nav-link text-white' to='/contact'>
              Contact Us
            </Link>
          </div>
          <div className='d-flex gap-3 justify-content-center my-10 my-lg-0'>
            <Button linkHref='/signin' linkText='Sign In' solidBtn navBtn />
            <Button linkHref='/signup' linkText='Sign Up' textBtn />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
