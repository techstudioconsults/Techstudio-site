import React from 'react'
import PropTypes from 'prop-types'

import style from './dashboardbanner.module.scss'

const DashboardBanner = ({ content }) => {
  const { header } = content
  return (
    <section className={style.banner}>
      <div className={style.text}>
        <h4 className={style.title}>{header.title}</h4>
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
