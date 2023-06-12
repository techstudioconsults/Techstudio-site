import React from 'react'
import style from './card.module.scss'
import PropTypes from 'prop-types'

const index = ({ cardDetails }) => {
  return (
    <div className={style.sectionTwoCard}>
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
      <div className={style.cardText}>
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
