import React from 'react'
import style from './card.module.scss'
import PropTypes from 'prop-types'

const index = ({ cardDetails }) => {
  return (
    <div className={style.sectionTwoCard}>
      <div className={style.cardImg}>
        <img src={cardDetails.image} alt='card-img' className='img-fluid' />
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
