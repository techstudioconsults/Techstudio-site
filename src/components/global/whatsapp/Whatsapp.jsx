import React from 'react'
import styles from './whatsapp.module.scss'
import { Icon } from '@iconify/react'

const WhatsAppIcon = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=08113800161' // Replace with your desired WhatsApp link
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
