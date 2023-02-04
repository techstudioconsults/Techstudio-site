import React from 'react'
import { ClassesTab } from '../../../../../../components'

import style from '../adminTab.module.scss'

const TrackClassesTab = () => {
  return (
    <section className={style.tab}>
      <ul className={['nav', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link active', style.a].join(' ')}
            id='mobile-tab'
            data-bs-toggle='tab'
            href='#mobile'
          >
            Mobile Development
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='frontend-tab'
            data-bs-toggle='tab'
            href='#frontend'
          >
            Frontend
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='uiux-tab'
            data-bs-toggle='tab'
            href='#uiux'
          >
            UI/UX
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='full-stack-tab'
            data-bs-toggle='tab'
            href='#fullstack'
          >
            Full Stack
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='data-science-tab'
            data-bs-toggle='tab'
            href='#datascience'
          >
            Data Science
          </a>
        </li>
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='mobile'
          role='tabpanel'
          aria-labelledby='course-tab'
        >
          <div className={style.listWrapper}>
            <ClassesTab isTDB />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='frontend'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            <ClassesTab isTDB />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='uiux'
          role='tabpanel'
          aria-labelledby='resource-tab'
        >
          <div className={[style.listWrapper].join(' ')}>
            <ClassesTab isTDB />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='fullstack'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            <ClassesTab isTDB />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='datascience'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            <ClassesTab isTDB />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackClassesTab
