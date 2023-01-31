import React from 'react'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import style from './dashboardresource.module.scss'
import ResourceListDisplay from './ResourceListDisplay'

const DashboardResource = () => {
  const { studentBoard } = DASHBOARD_CONTENT
  const fileDisplay = studentBoard.resources.PDF.map((file) => {
    return <ResourceListDisplay key={file.id} file={file} />
  })
  const videoDisplay = studentBoard.resources.PDF.map((file) => {
    return <ResourceListDisplay key={file.id} file={file} isVideo />
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
            PDF
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
            VIDEO
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='album-tab'
            data-bs-toggle='tab'
            data-bs-target='#audio'
            href='#r'
          >
            AUDIO
          </a>
        </li>
      </ul>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade'
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
          <div className={style.listWrapper}>{videoDisplay}</div>
        </div>
        <div
          className='tab-pane fade show'
          id='audio'
          role='tabpanel'
          aria-labelledby='album-tab'
        >
          <div className={style.listWrapper}>{fileDisplay}</div>
        </div>
      </div>
    </section>
  )
}

export default DashboardResource
