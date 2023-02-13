import React from 'react'

import { Link } from 'react-router-dom'
import techimage from '../assets/icons/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-blue z-index-999'>
      <div className='container'>
        <footer className='py-20 px-3 px-xl-0 text-white'>
          <div className='row'>
            <div className='col-12 col-lg-3 mb-3'>
              <div>
                <Link
                  className='d-flex gap-2 text-white justify-content-start'
                  to='/'
                >
                  <img src={techimage} alt='logo' />
                  <span className='fw-bold'>Techstudio Academy</span>
                </Link>
              </div>
            </div>

            <div className='col-12 col-lg-3 text-white my-12 my-lg-0'>
              <div>
                <h5 className='fs-md fw-bolder py-2_5'>Courses</h5>
              </div>
              <ul className='nav flex-column fs-sm mt-5 gap-2 align-items-start'>
                <li className='nav-item mb-2'>
                  <Link
                    className='text-white cc-link-hover'
                    to='/course/frontend'
                  >
                    Front End Development
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link
                    className='text-white cc-link-hover '
                    to='/course/mobile'
                  >
                    Android Development
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link className='text-white cc-link-hover ' to='/course/uiux'>
                    UI/UX Design
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link
                    className='text-white cc-link-hover'
                    to='/course/fullstack'
                  >
                    Full Stack development
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link
                    className='text-white cc-link-hover'
                    to='/course/data-science'
                  >
                    Data Science
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-12 col-lg-2 my-12 my-lg-0'>
              <div>
                <h5 className='fs-md fw-bolder py-2_5'>
                  <Link
                    className='text-white d-block cc-link-hover'
                    to='/about-us'
                  >
                    About Us
                  </Link>
                </h5>
              </div>
              <div>
                <h5 className='fs-md fw-bolder py-2_5'>
                  <Link className='text-white d-block cc-link-hover' to='/blog'>
                    Blog
                  </Link>
                </h5>
              </div>
              <div>
                <h5 className='fs-md fw-bolder py-2_5'>
                  <Link
                    className='text-white d-block cc-link-hover'
                    to='/contact'
                  >
                    Contact
                  </Link>
                </h5>
              </div>
            </div>

            <div className='col-12 col-lg-4 text-white fw-bolder'>
              <form>
                <div>
                  <h5 className='fs-md py-2_5'>Subscribe to our newsletter</h5>
                </div>

                <div className='input-group mb-3 bg-white rounded-3 p-1'>
                  <input
                    type='email'
                    className='form-control py-2 fs-xs border-0'
                    placeholder='Email Address'
                    aria-label='Email Address'
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-primary fs-xs'
                    type='button'
                    id='button-addon2'
                  >
                    Subscribe
                    <i className=''></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center  flex-lg-row justify-content-between py-4 my-4 border-top gap-5'>
            <p>&copy; {new Date().getFullYear()} TechStudio Academy</p>
            <ul className='list-unstyled d-flex gap-10'>
              <li className=''>
                <a
                  target={`_blank`}
                  href='https://twitter.com/TechStudioAcdmy'
                  className='text-white cc-link-hover'
                >
                  <FaTwitter className='fs-xl' />
                </a>
              </li>
              <li className=''>
                <a
                  target={`_blank`}
                  href='https://facebook.com/techstudioacademy'
                  className='text-white cc-link-hover '
                >
                  <FaFacebookF className='fs-xl' />
                </a>
              </li>
              <li className=''>
                <a
                  target={`_blank`}
                  href='https://instagram.com/techstudioacademy'
                  className='text-white cc-link-hover '
                >
                  <FaInstagram className='fs-xl' />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
