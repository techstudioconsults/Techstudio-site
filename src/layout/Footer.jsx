import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import logoWhite from '@assets/images/logo-white.png'
import { Icon } from '@iconify/react'

import { useNewsLetterMutation } from '../pages/Dashboard/Admin/users/api/usersApiSlice'

const Footer = () => {
  const [newsLetter, { isLoading }] = useNewsLetterMutation()
  const [subscribed, setSubscribed] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // console.log('Subscription email:', data.email)
    try {
      const res = await newsLetter(data).unwrap()
      // console.log(res)
      reset()
      if (res.success) {
        setErrorMessage(null)
        setSubscribed(true)
      }
    } catch (error) {
      // console.log(error)
      setErrorMessage(error.data.message)
    }
    // console.log('Subscription button clicked!')
  }

  // changes color after subscription
  const showSuccess = subscribed ? 'successColor' : 'bg-white'
  const chnageBtnBg = subscribed ? 'successColor' : 'bg-primary'
  const subscriptionBtnText = subscribed ? 'Subscribed' : 'Subscribe'
  const placeHolderText = subscribed ? ' ' : 'Email Address'
  const chnageHover = subscribed ? 'subscribedBg' : 'bg-primary'

  return (
    <div className='bg-blue z-index-999 mt-md-20'>
      <div className='container'>
        <footer className='py-14 px-3 px-xl-0 text-white'>
          <div className='row m-0'>
            <div className='col-12 col-lg-3 mb-3'>
              <div>
                <Link className='d-flex gap-3 text-white justify-content-start' to='/'>
                  <img src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/logo-white.png`} alt='logo' />
                </Link>
              </div>
              <ul className='nav flex-column fs-sm mt-5 gap-1 align-items-start'>
                <li className='nav-item mb-2'>
                  <p className='text-light small-text'>
                    1,Ogunlesi Street, Awoyokun Bus Stop,
                    <br /> Onipanu Lagos
                  </p>
                </li>
              </ul>
            </div>
            <div className='col-12 col-lg-3 text-white my-12 my-lg-0'>
              <div>
                <p className='fs-md fw-bolder pb-2_5'>Courses</p>
              </div>
              <ul className='nav flex-column gap-3 align-items-start'>
                <li className='nav-item mb-0'>
                  <Link className='text-white cc-link-hover small-text' to='/course/frontend'>
                    Frontend Development
                  </Link>
                </li>
                {/* <li className='nav-item mb-0'>
                  <Link
                    className='text-white cc-link-hover '
                    to='/course/mobile'
                  >
                    Mobile Development
                  </Link>
                </li> */}
                <li className='nav-item mb-0'>
                  <Link className='text-white cc-link-hover  small-text' to='/course/product-design'>
                    Product Design
                  </Link>
                </li>
                <li className='nav-item mb-0'>
                  <Link className='text-white cc-link-hover small-text' to='/course/fullstack'>
                    Fullstack Development
                  </Link>
                </li>
                <li className='nav-item mb-0'>
                  <Link className='text-white cc-link-hover small-text' to='/course/data-science'>
                    Data Science
                  </Link>
                </li>
                <li className='nav-item mb-0'>
                  <Link className='text-white cc-link-hover small-text' to='/course/cyber-security'>
                    Cyber Security
                  </Link>
                </li>
                <li className='nav-item mb-0'>
                  <Link className='text-white cc-link-hover small-text' to='/course/digital-marketing'>
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-12 col-lg-2 my-12 my-lg-0'>
              <div>
                <h5 className='fs-md'>
                  <Link className='text-white d-block cc-link-hover ' to='/about-us'>
                    About Us
                  </Link>
                </h5>
              </div>
              {/* <div>
                <h5 className='fs-md fw-semibold pt-2_5'>
                  <Link className='text-mute  d-block cc-link-hover' to='#'>
                    Blog
                  </Link>
                </h5>
              </div> */}
              {/* <div>
                <h5 className='fs-md fw-semibold pt-2_5'>
                  <Link
                    className='text-white d-block cc-link-hover'
                    to='/employers'
                  >
                    Partnership
                  </Link>
                </h5>
              </div> */}
              <div>
                <h5 className='fs-md fw-semibold pt-2_5'>
                  <Link className='text-white d-block cc-link-hover ' to='/faq'>
                    FAQs
                  </Link>
                </h5>
              </div>
              <div>
                <h5 className='fs-md fw-semibold pt-2_5'>
                  <Link className='text-white d-block cc-link-hover ' to='#'>
                    Privacy Policy
                  </Link>
                </h5>
              </div>
              <div>
                <h5 className='fs-md fw-semibold pt-2_5'>
                  <Link className='text-white d-block cc-link-hover ' to='/contact'>
                    Contact Us
                  </Link>
                </h5>
              </div>
            </div>

            <div className='col-12 col-lg-4 text-white fw-bolder'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h5 className='fs-md pb-2_5 text-white'>Subscribe to our newsletter</h5>
                </div>

                <div className={`input-group mb-3 ${showSuccess} rounded-3 p-1`}>
                  <input
                    type='email'
                    disabled={subscribed}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    className='form-control py-2 fs-xs border-0 text-dark'
                    placeholder={placeHolderText}
                    aria-label='Email Address'
                    aria-describedby='button-addon2'
                  />
                  <button className={` ${chnageBtnBg} ${chnageHover} btn btn-primary fs-xs`} type='submit' id='button-addon2'>
                    {isLoading ? `Please wait...` : `${subscriptionBtnText}`}
                  </button>
                </div>
                {errorMessage && <p className='text-danger small-text'>{errorMessage}</p>}
                {errors.email && !subscribed && <p className='text-danger small-text'>{errors.email.message}</p>}
              </form>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center  flex-lg-row justify-content-between pt-4 my-4 border-top gap-5'>
            <p>&copy; {new Date().getFullYear()} TechStudio Academy</p>
            <ul className='list-unstyled d-flex gap-10'>
              <li className=''>
                <a target={`_blank`} href='https://twitter.com/techstudioacdmy' className='text-white cc-link-hover'>
                  <Icon icon={`fa:twitter`} className='fs-xl' />
                </a>
              </li>
              <li className=''>
                <a target={`_blank`} href='https://facebook.com/techstudioacademy' className='text-white cc-link-hover '>
                  <Icon icon={`fa:facebook`} className='fs-xl' />
                </a>
              </li>
              <li className=''>
                <a target={`_blank`} href='https://instagram.com/techstudioacademy' className='text-white cc-link-hover '>
                  <Icon icon={`fa:instagram`} className='fs-xl' />
                </a>
              </li>

              <li className=''>
                <a target={`_blank`} href='https://linkedin.com/company/tech-studio-academy' className='text-white cc-link-hover '>
                  <Icon icon={`fa:linkedin`} className='fs-xl' />
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
