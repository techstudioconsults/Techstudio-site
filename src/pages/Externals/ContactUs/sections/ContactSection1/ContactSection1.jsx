import React from 'react'
import { Container } from '../../../../../layout'
import PropTypes from 'prop-types'
import ContactForm from '../../../../../components/global/forms/contactForm/ContactForm'
import style from './ContactSection1.module.scss'
import { MdEmail } from 'react-icons/md'
import ContactSection1Modal from './ContactSection1Modal'

const ContactSection1 = ({ content }) => {
  const { header, address } = content
  // console.log(header)
  // console.log(address)
  return (
    <Container>
      <section className={style.ContactSection1}>
        <div className={style.form}>
          <ContactForm />
          <ContactSection1Modal/>
        </div>
        <div className={style.locationWrapper}>
          <div className={style.location}>
            <h3 className={style.title}>{header.title}</h3>
            <p className={style.caption}>{header.caption}</p>
          </div>
          <div className={style.addressWrapper}>
            <div className={style.flag}>
              <img src={address.img} alt='flag' className={style.flag} />
            </div>
            <div className={style.address}>
              <h6>{address.state}</h6>
              <p className={style.address}>{address.address}</p>
              <h6 className={style.whatsapp}>{address.whatsapp}</h6>
              <p>{address.busola}</p>
              <p>{address.blessing}</p>
            </div>
          </div>
          <div>
            <div className={style.info}>
              <MdEmail size={`1.5rem`} className={style.icon} />
              <p className={style.email}>info@techstudioacademy.com</p>
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
