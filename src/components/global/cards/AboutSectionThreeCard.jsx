import React from 'react'
import PropTypes from 'prop-types'
import style from './aboutSectionThree.module.scss'
import { Icon } from '@iconify/react'

const AboutSectionThreeCard = ({ content, isAbout }) => {
  const { icon, title, desc } = content
  return (
    <div className={style.aboutSectionThreeCard}>
      <div className={style.iconWrapper}>
        <Icon icon={icon} />
        <img hidden={isAbout} src={icon} alt='icon' />
      </div>
      <h5 className={style.title}>{title}</h5>
      <p className={style.desc}>{desc}</p>
    </div>
  )
}

AboutSectionThreeCard.propTypes = {
  content: PropTypes.object.isRequired,
  isAbout: PropTypes.bool,
}

export default AboutSectionThreeCard
