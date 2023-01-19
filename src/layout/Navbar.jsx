import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import techimage from '../assets/icons/logo.png'
import { FaChevronDown } from 'react-icons/fa'
import { useEffect } from 'react'
import { Button } from '../components'
import { useRef } from 'react'
import { useState } from 'react'

const Navbar = ({ bg, keepColor, setTextColorBlack }) => {
  const [color, setColor] = useState(setTextColorBlack)
  const navEl = useRef()

  useEffect(() => {
    let { clientHeight } = navEl.current
    window.addEventListener('scroll', () => {
      if (navEl) {
        if (window.scrollY >= clientHeight) {
          navEl.current.style.backgroundColor = `#1f2666`
          navEl.current.style.boxShadow = `rgba(0, 0, 0, 0.2) 0px 18px 50px 5px`
          keepColor ? setColor(false) : setColor(false)
        } else if (window.scrollY == 0) {
          keepColor ? setColor(false) : setColor(true)
          navEl.current.style.backgroundColor = `transparent`
          navEl.current.style.boxShadow = null
        }
      }
    })
  }, [keepColor])

  return (
    <nav
      ref={navEl}
      className={['navbar navbar-expand-lg fixed-top'].join(' ')}
      style={{
        backgroundColor: bg,
      }}
    >
      <div className='container py-3'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex align-items-center gap-2'>
            <img className='logo' src={techimage} alt='logo' />
            <span
              className={[
                'fs-md fw-bold',
                color ? `text-black` : `text-white`,
              ].join(' ')}
            >
              Techstudio Academy
            </span>
          </div>
        </Link>

        <HiOutlineMenuAlt4
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className={[
            'navbar-toggler fs-6xl border-0',
            color ? `text-blue` : `text-white`,
          ].join(' ')}
        />

        <div
          className='collapse bg-blue navbar-collapse d-lg-flex justify-content-between ms-lg-10 ms-xl-24'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav align-items-center text-center gap-8 fs-sm'>
            <Link
              className={[
                'nav-link fw-semibold',
                color ? `text-black` : `text-white`,
              ].join(' ')}
              aria-current='page'
              to='/about-us'
            >
              About Us
            </Link>
            <div className='dropdown'>
              <div
                className={[
                  'dropdown-toggle btn fs-sm fw-semibold border-0',
                  color ? `text-black` : `text-white`,
                ].join(' ')}
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Courses
                <FaChevronDown className='ms-2 fs-sm fw-semibold' />
              </div>
              <ul className='dropdown-menu mt-8'>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm fw-semibold py-2'
                    to='/course/frontend'
                  >
                    Frontend
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm fw-semibold py-2'
                    to='/course/data-science'
                  >
                    Data Science
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm fw-semibold py-2'
                    to='/course/fullstack'
                  >
                    Fullstack
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm fw-semibold py-2'
                    to='/course/mobile'
                  >
                    Mobile Development
                  </Link>
                </li>
                <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm fw-semibold py-2'
                    to='/course/uiux'
                  >
                    UI/UX
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className={[
                'nav-link fw-semibold',
                color ? `text-black` : `text-white`,
              ].join(' ')}
              to='/employers'
            >
              Employers
            </Link>
            <Link
              className={[
                'nav-link fw-semibold',
                color ? `text-black` : `text-white`,
              ].join(' ')}
              to='/contact'
            >
              Contact Us
            </Link>
          </div>
          <div className='d-flex gap-3 justify-content-center my-10 my-lg-0'>
            <Button linkHref='/signin' linkText='Sign In' solidBtn navBtn />
            <Button
              linkHref='/signup'
              linkText='Sign Up'
              textBtn
              textColor={color ? `#000000` : `#ffffff`}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  bg: PropTypes.string,
  setTextColorBlack: PropTypes.bool,
  keepColor: PropTypes.bool,
}

export default Navbar
