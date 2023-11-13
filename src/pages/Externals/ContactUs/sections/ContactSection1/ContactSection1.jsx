import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import ContactForm from '../../../../../components/global/forms/contactForm/ContactForm'
import { Container } from '../../../../../layout'

import style from './ContactSection1.module.scss'

const ContactSection1 = ({ content }) => {
  const { header, address } = content
  // console.log(header)
  // console.log(address)
  return (
    <Container>
      <section className={style.ContactSection1}>
        <div className={style.form}>
          <ContactForm />
        </div>
        <div className={style.locationWrapper}>
          <div className={style.location}>
            <h3 className={style.title}>{header.title}</h3>
            <p className={style.caption}>{header.caption}</p>
          </div>
          <div className={`${style.addressWrapper} justify-content-center justify-content-lg-start`}>
            <div className={`${style.flag} d-none d-lg-block`}>
              <img src={address.img} alt='flag' className={style.flag} />
            </div>
            <div className={style.address}>
              <h6>{address.state}</h6>
              <p className={style.address}>{address.address}</p>
              <h6 className={style.whatsapp}>{`Call or Whatsapp`}</h6>
              <p>
                <span className='fw-semibold'>Busola:</span>
                <a className='d-inline text-dark' href={`tel:${address.busola}`}>
                  {' '}
                  {address.busola}
                </a>
              </p>

              <p>
                <span className='fw-semibold'>Blessing:</span>
                <a className='d-inline text-dark' href={`tel:${address.blessing}`}>
                  {' '}
                  {address.blessing}
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className={`${style.info} d-flex align-items-center justify-content-center justify-content-lg-start`}>
              <div className='mb-1'>
                <Icon className='' icon={`ic:baseline-email`} />
              </div>
              <a href={`mailto:${address.email}`} className={style.email}>
                {address.email}
              </a>
            </div>
            {/* <div className={style.info}>
              <MdEmail size={`1.5rem`} className={style.icon} />
              <p className={style.email}>info@techstudioacademy.com</p>
            </div>
            <div className={style.info}>
              <MdEmail size={`1.5rem`} className={style.icon} />
              <p className={style.email}>info@techstudioacademy.com</p>
            </div> */}
          </div>
        </div>
      </section>
    </Container>
  )
}

ContactSection1.propTypes = {
  content: PropTypes.object,
}

export default ContactSection1
