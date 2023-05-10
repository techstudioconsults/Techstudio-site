import React from 'react'
import { Container } from '../../../layout'
import PropTypes from 'prop-types'
import ContactForm from '../../global/forms/contactForm/ContactForm'
import style from './sectionTwo.module.scss'
import { MdEmail } from 'react-icons/md'

const ContactSectionTwo = ({ content }) => {
  const { header, address } = content
  return (
    <Container>
      <section className={style.ContactSectionTwo}>
        <div className={style.form}>
          <ContactForm />
        </div>
        <div className={style.locationWrapper}>
          <div className={style.location}>
            <h3 className={style.title}>{header.title}</h3>
            <p className={style.caption}>{header.caption}</p>
          </div>
          <div className={style.addressWrapper}>
            <div className={style.flag}>
              <img src={address.img} alt='flag' />
            </div>
            <div className={style.address}>
              <h6>{address.state}</h6>
              <p className={style.address}>{address.address}</p>
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

ContactSectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
}

export default ContactSectionTwo
