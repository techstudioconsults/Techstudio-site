import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { SECTION_THREE_ANIMATION } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'

import style from './aboutSectionThree.module.scss'

const AboutSectionThreeCard = ({ content, isAbout }) => {
  const { icon, title, desc } = content
  return (
    <Gsap animationFuncion={SECTION_THREE_ANIMATION}>
      <div className={`${style.aboutSectionThreeCard} sectionThree`}>
        <div className={style.iconWrapper}>
          <Icon icon={icon} />
          <img hidden={isAbout} src={icon} alt='icon' />
        </div>
        <h5 className={style.title}>{title}</h5>
        <p className={style.desc}>{desc}</p>
      </div>
    </Gsap>
  )
}

AboutSectionThreeCard.propTypes = {
  content: PropTypes.object.isRequired,
  isAbout: PropTypes.bool,
}

export default AboutSectionThreeCard
