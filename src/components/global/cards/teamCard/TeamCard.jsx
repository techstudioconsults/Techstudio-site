import React from 'react'
import PropTypes from 'prop-types'

import { TEAM_ANIMATION } from '../../../../gsap'
import Gsap from '../../../../hooks/Gsap'

import style from './teamCard.module.scss'

const TeamCard = ({ content }) => {
  const { img, name, job } = content
  return (
    <Gsap animationFuncion={TEAM_ANIMATION}>
      <div className={`${style.teamCard} team`}>
        <div className={style.teamCardImgContainer}>
          <img src={img} alt='team-img' className='cc-img-fluid' />
        </div>
        <div className={style.teamCardText}>
          <h4 className={style.name}>{name}</h4>
          <p className={style.job}>{job}</p>
        </div>
      </div>
    </Gsap>
  )
}

TeamCard.propTypes = {
  content: PropTypes.object.isRequired,
}

export default TeamCard
