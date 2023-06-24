import React from 'react'
import PropTypes from 'prop-types'

import style from './employersSectionTwo.module.scss'

const HowItWorksCard = ({ card }) => {
  return (
    <div className={style.howItWorksCard}>
      <div className=''>
        <img src={card.image} alt='img' />
      </div>
      <div className={style.text}>
        <h5 className={style.title}>{card.title}</h5>
        <p className={style.description}>{card.description}</p>
      </div>
    </div>
  )
}

HowItWorksCard.propTypes = {
  card: PropTypes.object,
}

export default HowItWorksCard
