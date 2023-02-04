import React from 'react'
import PropTypes from 'prop-types'
import { DASHBOARD_CONTENT } from '../../../../layout/Layout/dashboardLayout/content'
import LiveClassDisplayCard from '../../../global/cards/liveClassDisplayCard/LiveClassDisplayCard'
import style from './classesTab.module.scss'
import StartAClass from '../../../global/modals/StartAClass'
import ScheduleClassForm from '../../../global/forms/scheduleClassFom/ScheduleClassForm'

const ClassesTab = ({ isTDB }) => {
  const { studentBoard } = DASHBOARD_CONTENT

  const fileDisplay = isTDB
    ? studentBoard.resources.PDF.map((file, index) => {
        return <LiveClassDisplayCard isTDB key={index} />
      })
    : studentBoard.resources.PDF.map((file, index) => {
        return <LiveClassDisplayCard key={index} />
      })

  return (
    <section className={style.tab}>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
        <ul className={['nav', style.tabList].join(' ')}>
          <li className={['nav-item', style.link].join(' ')}>
            <a
              className={['nav-link active', style.a].join(' ')}
              id='home-tab'
              data-bs-toggle='tab'
              href='#live'
            >
              LIVE
            </a>
          </li>
          <li className={['nav-item', style.link].join(' ')}>
            <a
              className={['nav-link', style.a].join(' ')}
              id='about-tab'
              data-bs-toggle='tab'
              href='#recorded'
            >
              RECORDED
            </a>
          </li>
        </ul>
        <div className={isTDB ? `d-block` : `d-none`}>
          <StartAClass title={`Add a class`}>
            <ScheduleClassForm />
          </StartAClass>
        </div>
      </div>

      <div className='tab-content' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='live'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div className={style.listWrapper}>{fileDisplay}</div>
        </div>
        <div
          className='tab-pane fade'
          id='recorded'
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

ClassesTab.propTypes = {
  isTDB: PropTypes.bool,
}

export default ClassesTab
