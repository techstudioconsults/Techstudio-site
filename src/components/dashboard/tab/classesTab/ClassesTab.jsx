import React from 'react'
import { DASHBOARD_CONTENT } from '../../../../layout/Layout/dashboardLayout/content'
import LiveClassDisplayCard from '../../../global/cards/liveClassDisplayCard/LiveClassDisplayCard'
import style from './classesTab.module.scss'

const ClassesTab = () => {
  const { studentBoard } = DASHBOARD_CONTENT
  const fileDisplay = studentBoard.resources.PDF.map((file, index) => {
    return <LiveClassDisplayCard key={index} />
  })
  return (
    <section className={style.tab}>
      <ul className={['nav', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#PDF'
            href='#r'
          >
            LIVE
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='about-tab'
            data-bs-toggle='tab'
            data-bs-target='#video'
            href='#r'
          >
            RECORDED
          </a>
        </li>
      </ul>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade active'
          id='PDF'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className={style.listWrapper}>{fileDisplay}</div>
        </div>
        <div
          className='tab-pane fade'
          id='video'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            libero est, autem quaerat culpa non sequi fugiat esse id recusandae
            quidem harum error eveniet minima voluptas numquam nemo minus cumque
            soluta, dignissimos ducimus cum accusantium nisi. Molestias
            explicabo, maiores sapiente repellat quo enim accusamus labore
            maxime nesciunt numquam exercitationem odio?
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassesTab
