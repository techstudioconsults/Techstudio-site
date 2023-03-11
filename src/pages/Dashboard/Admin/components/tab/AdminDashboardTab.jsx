import React from 'react'

import style from './adminTab.module.scss'
import '../../../../../scss/custom/bs-custom.css'
import TrackAnalysisLayout from './trackAnalysislayout/TrackAnalysisLayout'

const AdminDashboardTab = () => {
  return (
    <section className={style.tab}>
      <ul
        className={['nav admin-tab', style.tabList].join(' ')}
        id='myTab'
        role='tablist'
      >
        <li className={['nav-item ', style.link].join(' ')} role='presentation'>
          <button
            className={['nav-link active', style.a].join(' ')}
            id='product-management-tab'
            data-bs-toggle='tab'
            data-bs-target='#product-management-tab-pane'
            type='button'
            role='tab'
            aria-controls='product-management-tab-pane'
            aria-selected='true'
          >
            Product Management
          </button>
        </li>
        <li className={['nav-item ', style.link].join(' ')} role='presentation'>
          <button
            className={['nav-link', style.a].join(' ')}
            id='uiux-design-tab'
            data-bs-toggle='tab'
            data-bs-target='#uiux-design-tab-pane'
            type='button'
            role='tab'
            aria-controls='uiux-design-tab-pane'
            aria-selected='false'
          >
            UIUX Design
          </button>
        </li>
        <li className={['nav-item ', style.link].join(' ')} role='presentation'>
          <button
            className={['nav-link', style.a].join(' ')}
            id='python-tab'
            data-bs-toggle='tab'
            data-bs-target='#python-tab-pane'
            type='button'
            role='tab'
            aria-controls='python-tab-pane'
            aria-selected='false'
          >
            Python Fullstack
          </button>
        </li>
        <li className={['nav-item ', style.link].join(' ')} role='presentation'>
          <button
            className={['nav-link', style.a].join(' ')}
            id='javascript-tab'
            data-bs-toggle='tab'
            data-bs-target='#javascript-tab-pane'
            type='button'
            role='tab'
            aria-controls='javascript-tab-pane'
            aria-selected='false'
          >
            javascript Fullstack
          </button>
        </li>
        <li className={['nav-item ', style.link].join(' ')} role='presentation'>
          <button
            className={['nav-link', style.a].join(' ')}
            id='data-science-tab'
            data-bs-toggle='tab'
            data-bs-target='#data-science-tab-pane'
            type='button'
            role='tab'
            aria-controls='data-science-tab-pane'
            aria-selected='false'
          >
            Data Science
          </button>
        </li>
      </ul>
      <div className='tab-content my-8' id='myTabContent'>
        <div
          className='tab-pane fade show active'
          id='product-management-tab-pane'
          role='tabpanel'
          aria-labelledby='product-management-tab'
          tabIndex='0'
        >
          <TrackAnalysisLayout />
        </div>
        <div
          className='tab-pane fade'
          id='uiux-design-tab-pane'
          role='tabpanel'
          aria-labelledby='uiux-design-tab'
          tabIndex='0'
        >
          <TrackAnalysisLayout />
        </div>
        <div
          className='tab-pane fade'
          id='python-tab-pane'
          role='tabpanel'
          aria-labelledby='python-tab'
          tabIndex='0'
        >
          <TrackAnalysisLayout />
        </div>
        <div
          className='tab-pane fade'
          id='javascript-tab-pane'
          role='tabpanel'
          aria-labelledby='javascript-tab'
          tabIndex='0'
        >
          <TrackAnalysisLayout />
        </div>
        <div
          className='tab-pane fade'
          id='data-science-tab-pane'
          role='tabpanel'
          aria-labelledby='data-science-tab'
          tabIndex='0'
        >
          <TrackAnalysisLayout />
        </div>
      </div>
    </section>
  )
}

export default AdminDashboardTab
