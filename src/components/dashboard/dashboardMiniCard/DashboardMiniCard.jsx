import React from 'react'
import PropTypes from 'prop-types'
import style from './dashboardminiCard.module.scss'
import { Icon } from '@iconify/react'

const DashboardMiniCard = ({ card, total }) => {
  return (
    <div className={[style.dashboardCard, `col-3`].join(' ')}>
      <div
        style={{ backgroundColor: card.img.accent }}
        className={[style.icon].join(' ')}
      >
        {card.img.src === `tabler:currency-naira` ? (
          <img
            alt='img-icon'
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1682165589/techstudio/Group_126_wqmdjj.svg`}
          />
        ) : (
          <Icon
            icon={card.img.src}
            width={`1.5rem`}
            height={`1.5rem`}
            color={card.img.color}
          />
        )}
      </div>
      <div className={style.content}>
        <h6 className={style.title}>{card.title}</h6>
        <p className={style.total}>{total || 0}</p>
      </div>
    </div>
  )
}

DashboardMiniCard.propTypes = {
  card: PropTypes.object.isRequired,
  total: PropTypes.number,
}

export default DashboardMiniCard
