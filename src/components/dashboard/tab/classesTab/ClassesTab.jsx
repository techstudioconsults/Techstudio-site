import React from 'react'
import PropTypes from 'prop-types'
import { DASHBOARD_CONTENT } from '../../../../layout/Layout/dashboardLayout/content'
import LiveClassDisplayCard from '../../../global/cards/liveClassDisplayCard/LiveClassDisplayCard'
import style from './classesTab.module.scss'
import ScheduleClassForm from '../../../global/forms/scheduleClassFom/ScheduleClassForm'
import AddAClassOffCanvas from '../../../global/offCanvas/AddAClassOffcanvas'
import Portal from '../../../global/POTAL/Portal'
import { useLocation } from 'react-router'
import { Icon } from '@iconify/react'

const ClassesTab = ({ isTDB }) => {
  const { studentBoard } = DASHBOARD_CONTENT

  const location = useLocation()

  const liveFileDisplay = isTDB
    ? studentBoard.resources.PDF.map((file, index) => {
        return <LiveClassDisplayCard isTDB key={index} />
      })
    : studentBoard.resources.PDF.map((file, index) => {
        return <LiveClassDisplayCard key={index} />
      })

  const recordedFileDisplay = isTDB
    ? studentBoard.resources.PDF.map((file, index) => {
        return <LiveClassDisplayCard isTDB key={index} />
      })
    : studentBoard.resources.PDF.map((file, index) => {
        return <LiveClassDisplayCard isRecordedFile key={index} />
      })

  return (
    <section className={style.tab}>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
        <ul className={['nav', style.tabList].join(' ')}>
          <li className={['nav-item', style.link].join(' ')}>
            <a
              className={['nav-link active', style.a].join(' ')}
              id='live-tab'
              data-bs-toggle='tab'
              href='#live'
            >
              LIVE
            </a>
          </li>
          <li className={['nav-item', style.link].join(' ')}>
            <a
              className={['nav-link', style.a].join(' ')}
              id='record-tab'
              data-bs-toggle='tab'
              href='#recorded'
            >
              RECORDED
            </a>
          </li>
        </ul>
        {location.pathname}
        <div className={isTDB ? `d-block` : `d-none`}>
          <p
            data-bs-toggle='offcanvas'
            href='#addclass-offcanvas'
            aria-controls='addclass-offcanvas'
            // className='d-flex align-items-center gap-2 text-primary fw-semibold'
            hidden
          >
            <Icon icon={`mdi:plus-circle-outline`} width={`1rem`} /> New Lessons
          </p>
          <p
            data-bs-toggle='offcanvas'
            href='#addclass-offcanvas'
            aria-controls='addclass-offcanvas'
            className='d-flex align-items-center gap-2 text-primary fw-semibold'
          >
            View Lessons
          </p>
          <Portal>
            <AddAClassOffCanvas>
              <ScheduleClassForm />
            </AddAClassOffCanvas>
          </Portal>
        </div>
      </div>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='live'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className={style.listWrapper}>{liveFileDisplay}</div>
        </div>
        <div
          className='tab-pane fade'
          id='recorded'
          role='tabpanel'
          aria-labelledby='about-tab'
        >
          <div className={style.listWrapper}>{recordedFileDisplay}</div>
        </div>
      </div>
    </section>
  )
}

ClassesTab.propTypes = {
  isTDB: PropTypes.bool,
}

export default ClassesTab
