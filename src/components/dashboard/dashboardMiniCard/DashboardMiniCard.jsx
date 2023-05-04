/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import style from './dashboardminiCard.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { Icon } from '@iconify/react'
import CardDetailsModal from '../../../pages/Dashboard/Admin/components/cardDetailsModal/CardDetailsModal'
import Portal from '../../global/POTAL/Portal'

const DashboardMiniCard = ({ card, total, modalNumber }) => {
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
      onClick={handleDetailModal}
      className={[style.dashboardCard, `col-3`].join(' ')}
    >
      <Portal wrapperId='react-portal-modal-container'>
        <CardDetailsModal
          content={{
            modalID: card.title,
          }}
        />
      </Portal>
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
  modalNumber: PropTypes.string,
}

export default DashboardMiniCard
