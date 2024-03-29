/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { Icon } from '@iconify/react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import PropTypes from 'prop-types'

import style from './dashboardminiCard.module.scss'
// eslint-disable-next-line react/prop-types
const DashboardMiniCard = ({ card, total, modalNumber, route, location }) => {
  const handleDetailModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`${modalNumber}`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div
      style={{ cursor: `pointer` }}
      onClick={handleDetailModal}
      className={[style.dashboardCard, `cc-grow`].join(' ')}
    >
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
        <p className={`fs-xl ${style.total}`}>{card?.total || 0}</p>
      </div>
    </div>
  )
}

DashboardMiniCard.propTypes = {
  card: PropTypes.object.isRequired,
  // total: PropTypes.number,
  modalNumber: PropTypes.string,
  route: PropTypes.string,
  location: PropTypes.string,
}

export default DashboardMiniCard
