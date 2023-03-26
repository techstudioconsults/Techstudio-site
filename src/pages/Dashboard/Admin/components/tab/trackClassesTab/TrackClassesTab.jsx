import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import style from '../adminTab.module.scss'

const TrackClassesTab = () => {
  return (
    <section className={style.tab}>
      <ul className={['nav hide_scrollbar', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <Link
            to={`/admin/classes/1`}
            className={['nav-link', style.a].join(' ')}
          >
            Product Management
          </Link>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <Link
            to={`/admin/classes/2`}
            className={['nav-link', style.a].join(' ')}
          >
            UI/UX Design
          </Link>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <Link
            to={`/admin/classes/3`}
            className={['nav-link', style.a].join(' ')}
          >
            Python Fullstack
          </Link>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <Link
            to={`/admin/classes/4`}
            className={['nav-link', style.a].join(' ')}
          >
            Javascript Fullstack
          </Link>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <Link
            to={`/admin/classes/5`}
            className={['nav-link', style.a].join(' ')}
            id='data-science-tab'
          >
            Data Science
          </Link>
        </li>
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        <Outlet />
      </div>
    </section>
  )
}

export default TrackClassesTab
