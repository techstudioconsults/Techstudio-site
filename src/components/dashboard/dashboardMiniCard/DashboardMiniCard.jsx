/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import style from './dashboardminiCard.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { Icon } from '@iconify/react'
const DashboardMiniCard = ({ card, total, modalNumber, route, location }) => {
  // const locationPath = useLocation()
  // const courses = useSelector(selectCourses)

  // // verifies if routeName is the one active (in browser input)
  // const activeRoute = useCallback(
  //   (routeName) => {
  //     return location.pathname.includes(routeName)
  //   },
  //   [location.pathname]
  // )

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
    <div className={[style.dashboardCard, `col-3`].join(' ')}>
      <div
        onClick={handleDetailModal}
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
        <p className={`fs-xl ${style.total}`}>{total || 0}</p>
      </div>
    </div>
  )
}

DashboardMiniCard.propTypes = {
  card: PropTypes.object.isRequired,
  total: PropTypes.number,
  modalNumber: PropTypes.string,
  route: PropTypes.string,
  location: PropTypes.string,
}

export default DashboardMiniCard
