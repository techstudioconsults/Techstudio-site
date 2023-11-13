import React from 'react'
import PropTypes from 'prop-types'

import style from './card.module.scss'

const index = ({ cardDetails }) => {
  return (
    <div className={`${style.sectionTwoCard} sectionTwo`}>
      <div className={style.cardImg}>
        <img alt='card-img' data-sizes='auto' src={cardDetails.imageLow} data-src={cardDetails.image} className='lazyload' />
        {/* <img src={cardDetails.image} alt='card-img' className='img-flui' /> */}
      </div>

      <div className={`${style.cardText}`}>
        <h3>{cardDetails.title}</h3>
        <p>{cardDetails.description}</p>
      </div>
    </div>
  )
}

index.propTypes = {
  cardDetails: PropTypes.object.isRequired,
}

export default index
