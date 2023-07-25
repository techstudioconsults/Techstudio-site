import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import style from './aboutSectionThree.module.scss'

const AboutSectionThreeCard = ({ content, isAbout }) => {
  const { icon, title, desc } = content
  return (
    <div className={`${style.aboutSectionThreeCard} sectionThree`}>
      <div className={`${style.iconWrapper}`}>
        <Icon icon={icon} className='fs-2xl' />
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
