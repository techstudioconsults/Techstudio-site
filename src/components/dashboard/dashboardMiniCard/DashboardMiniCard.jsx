import React from 'react'
import PropTypes from 'prop-types'
import style from './dashboardminiCard.module.scss'

const DashboardMiniCard = ({ card }) => {
  return (
    <div className={[style.dashboardCard, `col-3`].join(' ')}>
      <div
        style={{ backgroundColor: card.img.accent }}
        className={[style.icon].join(' ')}
      >
        <img src={card.img.src} alt='img' />
      </div>
      <div className={style.content}>
        <h6 className={style.title}>{card.title}</h6>
        <p className={style.total}>{card.total}</p>
      </div>
    </div>
  )
}

DashboardMiniCard.propTypes = {
  card: PropTypes.object.isRequired,
}

export default DashboardMiniCard
