import React from 'react'
import PropTypes from 'prop-types'
import style from './dashboardminiCard.module.scss'
import { Icon } from '@iconify/react'

const DashboardMiniCard = ({ card }) => {
  return (
    <div className={[style.dashboardCard, `col-3`].join(' ')}>
      <div
        style={{ backgroundColor: card.img.accent }}
        className={[style.icon].join(' ')}
      >
        <Icon
          icon={card.img.src}
          width={`1.5rem`}
          height={`1.5rem`}
          color={card.img.color}
        />
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
