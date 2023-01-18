import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Container from './Container'

const MinimalFooter = () => {
  return (
    <footer>
      <Container paddingBlock={0}>
        <div className='d-flex flex-column gap-5 align-items-center flex-lg-row justify-content-between py-4 my-4'>
          <p className='text-blue fw-bold fs-xs'>
            &copy; {new Date().getFullYear()} TechStudio Academy
          </p>
          <ul className='list-unstyled d-flex gap-5'>
            <li className='ms-3'>
              <Link className='text-blue'>
                <FaTwitter className='fs-sm' />
              </Link>
            </li>
            <li className='ms-3'>
              <Link className='text-blue'>
                <FaFacebookF className='fs-sm' />
              </Link>
            </li>
            <li className='ms-3'>
              <Link className='text-blue'>
                <FaLinkedinIn className='fs-sm' />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default MinimalFooter
