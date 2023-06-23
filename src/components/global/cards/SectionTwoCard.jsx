import React from 'react'
import PropTypes from 'prop-types'

import UseAnimate from '../../../hooks/useAnimate'

import style from './card.module.scss'

const index = ({ cardDetails }) => {
  return (
    <div className={style.sectionTwoCard}>
      <UseAnimate hidden={{ opacity: 0 }} visible={{ opacity: 1 }}>
        <div className={style.cardImg}>
          <img
            alt='card-img'
            data-sizes='auto'
            src={cardDetails.imageLow}
            data-src={cardDetails.image}
            className='lazyload'
          />
          {/* <img src={cardDetails.image} alt='card-img' className='img-flui' /> */}
        </div>
      </UseAnimate>

      <div className={style.cardText}>
        <UseAnimate>
          <h3>{cardDetails.title}</h3>
          <p>{cardDetails.description}</p>
        </UseAnimate>
      </div>
    </div>
  )
}

index.propTypes = {
  cardDetails: PropTypes.object.isRequired,
}

export default index
