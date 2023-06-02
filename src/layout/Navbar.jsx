import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { Button } from '../components'
import style from './layout.module.scss'
// import { useSelector } from 'react-redux'
// import { selectCoursesExternal } from '../app/api/appSlice'

const Navbar = ({ bg, keepColor, setTextColorBlack, isEmployersRoute }) => {
  const [color, setColor] = useState(setTextColorBlack)
  // const courses = useSelector(selectCoursesExternal)
  const navEl = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (navEl) {
        if (window.scrollY >= 10) {
          navEl.current.style.backgroundColor = `#1f2666`
          navEl.current.style.boxShadow = `rgba(0, 0, 0, 0.2) 0px 18px 50px 5px`
          keepColor ? setColor(false) : setColor(false)
        } else if (window.scrollY == 0) {
          keepColor ? setColor(false) : setColor(true)
          navEl.current.style.backgroundColor = `transparent`
          navEl.current.style.boxShadow = null
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [keepColor])

  // const dropdownLinks = courses.map((course) => {
  //   return (
  //     <li key={course.id} className='my-2'>
  //       <Link
  //         className='dropdown-item fs-sm fw-semibold py-2'
  //         to='/course/frontend'
  //       >
  //         {course.title}
  //       </Link>
  //     </li>
  //   )
  // })
  return (
    <nav
      ref={navEl}
      className={['navbar navbar-expand-lg fixed-top py-0 py-lg-2'].join(' ')}
      style={{
        backgroundColor: bg,
      }}
    >
      <div className='container-xxl py-6'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex align-items-center gap-2'>
            <div className={style.navImgContainer}>
              <img
                className={['logo', style.responsiveLogo].join(' ')}
                src={
                  color
                    ? `https://res.cloudinary.com/kingsleysolomon/image/upload/v1684888559/techstudio/logo_black_text_new_1_frkqnn.png`
                    : `https://res.cloudinary.com/kingsleysolomon/image/upload/v1684888535/techstudio/logo_white_text_new_1_yo2rsg.png`
                }
                alt='logo'
              />
            </div>
          </div>
        </Link>

        <HiOutlineMenuAlt4
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className={[
            'navbar-toggler fs-3xl border-0 p-0',
            color ? `text-blue` : `text-white`,
          ].join(' ')}
        />

        <div
          className={[
            'collapse navbar-collapse d-lg-flex justify-content-between ms-lg-10 ms-xl-40',
            color ? style.navbarDropdownLight : style.navbarDropdown,
          ].join(' ')}
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
                  <li className='my-2'>
                    <Link
                      className='dropdown-item fs-sm fw-semibold py-2'
                      to='/course/uiux'
                    >
                      Product Design
                    </Link>
                  </li>
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
                {/* <li className='my-2'>
                  <Link
                    className='dropdown-item fs-sm fw-semibold py-2'
                    to='/course/mobile'
                  >
                    Mobile Development
                  </Link>
                </li> */}
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
              to='/faq'
            >
              FAQ
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
          <div
            className={[
              'd-flex gap-3 justify-content-center my-10 my-lg-0',
              isEmployersRoute ? `d-none visibility-hidden` : null,
            ].join(' ')}
          >
            <Button linkHref='/login' linkText='Log in' solidBtn navBtn />
            <Button
              linkHref='/student/register'
              linkText='Register'
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
  isEmployersRoute: PropTypes.bool,
}

export default Navbar
