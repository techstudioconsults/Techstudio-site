import React from 'react'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import style from './dashboardresource.module.scss'
import './custom.css'
import ResourceListDisplay from './ResourceListDisplay'
import PropTypes from 'prop-types'

const DashboardResource = ({ isTDB, isADB }) => {
  const { studentBoard } = DASHBOARD_CONTENT

  const fileDisplay = studentBoard.resources.PDF.map((file) => {
    return <ResourceListDisplay key={file.id} file={file} isADB />
  })
  const videoDisplay = studentBoard.resources.PDF.map((file) => {
    return <ResourceListDisplay key={file.id} file={file} isVideo />
  })

  return (
    <section className={style.tab}>
      <ul className={['nav', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link active', style.a].join(' ')}
            data-bs-toggle='tab'
            href='#PDF'
            id={1}
          >
            PDF
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            data-bs-toggle='tab'
            href='#video'
            id={2}
          >
            VIDEO
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            data-bs-toggle='tab'
            href='#audio'
            id={3}
          >
            AUDIO
          </a>
        </li>
      </ul>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='PDF'
          aria-labelledby='home-tab'
        >
          <div className={[style.listWrapper, `hide_scrollbar`].join(' ')}>
            {fileDisplay}
          </div>
        </div>
        <div className='tab-pane fade' id='video' aria-labelledby='about-tab'>
          <div className={[style.listWrapper, `hide_scrollbar`].join(' ')}>
            {videoDisplay}
          </div>
        </div>
        <div className='tab-pane fade' id='audio' aria-labelledby='album-tab'>
          <div className={[style.listWrapper, `hide_scrollbar`].join(' ')}>
            {fileDisplay}
          </div>
        </div>
      </div>
    </section>
  )
}

DashboardResource.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default DashboardResource
