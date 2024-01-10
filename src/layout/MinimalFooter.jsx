import React from 'react'

import Container from './Container'

const MinimalFooter = () => {
  return (
    <footer>
      <Container paddingBlock={0}>
        <div className='d-flex flex-column gap-5 align-items-center flex-lg-row justify-content-between py-4 my-4'>
          <p className='text-blue fw-bold fs-xs'>`&copy; {new Date().getFullYear()} TechStudio Academy`</p>
          <ul className='list-unstyled d-flex gap-5'>
            <li className='ms-3'>
              <a target={`_blank`} href='https://twitter.com/TechStudioAcdmy' className='text-blue'>
                {/* <FaTwitter className='fs-sm' /> */}
              </a>
            </li>
            <li className='ms-3'>
              <a
                target={`_blank`}
                href='https://facebook.com/techstudioacademy'
                className='text-blue'
              >
                {/* <FaFacebookF className='fs-sm' /> */}
              </a>
            </li>
            <li className='ms-3'>
              <a
                target={`_blank`}
                href='https://instagram.com/techstudioacademy'
                className='text-blue cc-link-hover '
              >
                {/* <FaInstagram className='fs-sm' /> */}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default MinimalFooter
