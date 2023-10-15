import React from 'react'
import { Icon } from '@iconify/react'

import styles from './whatsapp.module.scss'

const WhatsAppIcon = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

  const whatsappLink = isIOS
    ? 'https://api.whatsapp.com/send/?phone=2348113800161&text=Hello!%20TechStudio%20Academy,%20I%E2%80%99ll%20like%20to%20make%20an%20enquiry' // Replace with your desired WhatsApp link
    : 'https://api.whatsapp.com/send/?phone=2348113800161&text=Hello!%20TechStudio%20Academy,%20I%E2%80%99ll%20like%20to%20make%20an%20enquiry' // Replace with your desired WhatsApp link for iOS

  return (
    <a
      href={whatsappLink}
      target='_blank'
      rel='noopener noreferrer'
      className={`${styles.whatsappIcon}`}
    >
      <div
        className={`${styles.wrapper} rounded rounded-circle d-flex align-items-center justify-content-center`}
      >
        <Icon
          icon='logos:whatsapp-icon'
          className={styles['whatsapp-icon__image']}
        />
      </div>
    </a>
  )
}

export default WhatsAppIcon

// https://api.whatsapp.com/send/?phone=2348113800161&text=HelloTechStudioAcademy,I%E2%80%99ll%20like%20to%20make%20an%20enquiry
