import React from 'react'
import PropTypes from 'prop-types'

import style from './dashboardbanner.module.scss'

const DashboardBanner = ({ content, profile }) => {
  const { header } = content
  const { firstName, lastName } = profile
  return (
    <section className={style.banner}>
      <div className={style.text}>
        <h4 className={style.title}>
          {firstName} {lastName}
        </h4>
        <p className={style.desc}>{header.desc}</p>
      </div>
      <div className={style.bannerImg}>
        <img src={header.img} alt='img' />
      </div>
    </section>
  )
}

DashboardBanner.propTypes = {
  content: PropTypes.object.isRequired,
}

export default DashboardBanner
