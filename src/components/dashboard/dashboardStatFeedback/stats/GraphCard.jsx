import React from 'react'
import style from './graph.module.scss'
import graph from '../../../../assets/images/graph.png'
import AdminChart from '../../../global/chart/AdminChart'

const GraphCard = () => {
  return (
    <section className={style.graphCard}>
      <div className={style.header}>
        <p className={style.title}>
          <span>20</span> Hours spent last week
        </p>
      </div>
      <div className={style.imgWrapper}>
        {/* <img src={graph} alt='img' className='cc-img-fluid' /> */}
        <AdminChart />
      </div>
    </section>
  )
}

export default GraphCard
