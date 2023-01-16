import React from 'react'
import PropTypes from 'prop-types'
import style from './teamCard.module.scss'

const TeamCard = ({ content }) => {
  const { img, name, job } = content
  return (
    <div className={style.teamCard}>
      <div className={style.teamCardImgContainer}>
        <img src={img} alt='team-img' className='cc-img-fluid' />
      </div>
      <div className={style.teamCardText}>
        <h4 className={style.name}>{name}</h4>
        <p className={style.job}>{job}</p>
      </div>
    </div>
  )
}

TeamCard.propTypes = {
  content: PropTypes.object.isRequired,
}

export default TeamCard
