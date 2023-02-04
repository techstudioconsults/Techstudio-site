import React from 'react'

import style from './adminTab.module.scss'
import TrackAnalysisLayout from './trackAnalysislayout/TrackAnalysisLayout'

const AdminDashboardTab = () => {
  return (
    <section className={style.tab}>
      <ul className={['nav', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='mobile-tab'
            data-bs-toggle='tab'
            data-bs-target='#mobile'
            href='#r'
          >
            Mobile Development
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='frontend-tab'
            data-bs-toggle='tab'
            data-bs-target='#frontend'
            href='#r'
          >
            Frontend
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='uiux-tab'
            data-bs-toggle='tab'
            data-bs-target='#uiux'
            href='#r'
          >
            UI/UX
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='full-stack-tab'
            data-bs-toggle='tab'
            data-bs-target='#full-stack'
            href='#r'
          >
            Full Stack
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='data-science-tab'
            data-bs-toggle='tab'
            data-bs-target='#data-science'
            href='#r'
          >
            Data Science
          </a>
        </li>
      </ul>

      <div className='tab-content p-6' id='tabContent'>
        <div
          className='tab-pane fade active'
          id='mobile'
          role='tabpanel'
          aria-labelledby='course-tab'
        >
          <div className={style.listWrapper}>
            <TrackAnalysisLayout />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='frontend'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            <TrackAnalysisLayout />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='uiux'
          role='tabpanel'
          aria-labelledby='resource-tab'
        >
          <div className={[style.listWrapper].join(' ')}>
            <TrackAnalysisLayout />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='full-stack'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            <TrackAnalysisLayout />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='data-science'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            <TrackAnalysisLayout />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminDashboardTab
