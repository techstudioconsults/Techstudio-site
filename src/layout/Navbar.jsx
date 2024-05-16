import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logoBlack from '@assets/images/logo-black.png'
import logoWhite from '@assets/images/logo-white.png'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { Button } from '../components'
import DiscountBanner from '../components/global/banners/DiscountBanner'
import { selectExternalCourses } from '../pages/Externals/api/externalSlice'

import style from './layout.module.scss'

const Navbar = ({ bg, keepColor, setTextColorBlack, isEmployersRoute }) => {
  const upcomingCourses = useSelector(selectExternalCourses)
  const [color, setColor] = useState(setTextColorBlack)

  // console.log(setTextColorBlack);

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
  const navStyle = 'container-xxl py-6 px-md-8  px-lg-16 px-xl-15 px-xxl-1 py-lg-6'

  // const style = useEffect(() => {
  //   const styleNavbar = {
  //     borderRadius: `8.33846px`,
  //     transform: `translateY(-50%)`,
  //     position: `relative`,
  //     maxWidth: `1080px`,
  //   }

  //   if (window.innerWidth >= 1200 && window.innerWidth <= 1400) {
  //     styleNavbar.padding = `2rem 0`
  //     styleNavbar.backgroundColor =`red`
  //     // styleNavbar.width = `90%`
  //   }

  //   return styleNavbar
  // }, [])

  // const getCourseRoute = (title) => {
  //   switch (title?.toLowerCase()) {
  //     case `product design ui/ux`:
  //       return `/course/product-design`
  //     case `fullstack development`:
  //       return `/course/fullstack`
  //     case `data science`:
  //       return `/course/data-science`
  //     case `frontend engineering`:
  //       return `/course/frontend`
  //     case `cyber security`:
  //       return `/course/cyber-security`
  //     case `digital marketing`:
  //       return `/course/digital-marketing`
  //     default:
  //       return `/`
  //   }
  // }

  // const dynamicDropdown = upcomingCourses.map((course) => {
  //   return (
  //     <Link key={course.id} className='dropdown-item fs-sm fw-semibold py-2 text-dark' to={getCourseRoute(course.title)}>
  //       {course.title}
  //     </Link>
  //   )
  // })
  return (
    <nav
      ref={navEl}
      className={[' d-flex flex-column navbar navbar-expand-lg fixed-top py-0 py-lg-1'].join(' ')}
      style={{
        backgroundColor: bg,
      }}
    >
      {/*<DiscountBanner />*/}
      <div className={`${navStyle}`}>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex align-items-center gap-2'>
            <div className={style.navImgContainer}>
              <img
                className={['logo', style.responsiveLogo].join(' ')}
                src={
                  color
                    ? `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-black.png`
                    : `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-white.png`
                }
                alt='logo'
              />
            </div>
          </div>
        </Link>

        <Icon
          icon={`heroicons-solid:menu-alt-4`}
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className={['navbar-toggler fs-3xl border-0 p-0', color ? `text-blue` : `text-white`].join(' ')}
        />

        <div
          className={[
            'collapse navbar-collapse d-lg-flex justify-content-between ms-lg-10 ms-xl-40',
            color ? style.navbarDropdownLight : style.navbarDropdown,
          ].join(' ')}
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav align-items-center text-center gap-8 fs-sm'>
            <Link className={['nav-link fw-semibold', color ? `text-black` : `text-white`].join(' ')} aria-current='page' to='/about-us'>
              About Us
            </Link>
            <div className='dropdown'>
              <div
                className={['dropdown-toggle btn fs-sm fw-semibold border-0', color ? `text-black` : `text-white`].join(' ')}
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Courses
                <Icon icon={`mdi:chevron-down`} className='ms-2 fs-sm fw-semibold' />
              </div>
              <ul className='dropdown-menu mt-8 text-dark'>
                <Link className='dropdown-item fs-sm fw-semibold py-2 text-dark' to='/course/product-design'>
                  Product Design UI/UX
                </Link>
                <Link className='dropdown-item fs-sm fw-semibold py-2 text-dark' to='/course/fullstack'>
                  Fullstack Development
                </Link>
                <Link className='dropdown-item fs-sm fw-semibold py-2 text-dark' to='/course/data-science'>
                  Data Science
                </Link>
                <Link className='dropdown-item fs-sm fw-semibold py-2 text-dark' to='/course/frontend'>
                  Frontend Engineering
                </Link>
                <Link className='dropdown-item fs-sm fw-semibold py-2 text-dark' to='/course/cyber-security'>
                  Cyber Security
                </Link>
                <Link className='dropdown-item fs-sm fw-semibold py-2 text-dark' to='/course/digital-marketing'>
                  Digital Marketing
                </Link>
              </ul>
            </div>
            {/* <Link
              className={[
                'nav-link fw-semibold',
                color ? `text-black` : `text-white`,
              ].join(' ')}
              to='/employers'
            >
              Employers
            </Link> */}
            <Link className={['nav-link fw-semibold', color ? `text-black` : `text-white`].join(' ')} to='/faq'>
              FAQ
            </Link>
            <Link className={['nav-link fw-semibold', color ? `text-black` : `text-white`].join(' ')} to='/contact'>
              Contact Us
            </Link>
          </div>
          <div className={['d-flex gap-3 justify-content-center fw-semibold my-10 my-lg-0', isEmployersRoute ? `d-none visibility-hidden` : null].join(' ')}>
            <Button linkHref='/login' linkText='Log in' solidBtn navBtn />
            <Button className='fw-semibold' linkHref='/student/register' linkText='Register' textBtn textColor={color ? `#000000` : `#ffffff`} />
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
