import React, { useCallback, useEffect } from 'react'
import { DASHBOARD_CONTENT } from '../../../layout/Layout/dashboardLayout/content'
import style from './dashboardresource.module.scss'
import './custom.css'
import ResourceListDisplay from './ResourceListDisplay'
import PropTypes from 'prop-types'
import { useDashboardAllResourcesMutation } from '../../../pages/Dashboard/Admin/api/dashboardApiSlice'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectDashboardResources } from '../../../pages/Dashboard/Admin/api/dashboardSlice'

const DashboardResource = () => {
  // const { studentBoard } = DASHBOARD_CONTENT
  const dashborardResources = useSelector(selectDashboardResources)
  const { courseID } = useParams()

  const [dashboardAllResources] = useDashboardAllResourcesMutation()

  const getResources = useCallback(async () => {
    await dashboardAllResources(courseID).unwrap()
  }, [courseID, dashboardAllResources])

  useEffect(() => {
    getResources()
  }, [getResources])

  const fileDisplay = dashborardResources?.document?.map((file) => {
    return <ResourceListDisplay key={file.id} file={file} isADB />
  })
  const videoDisplay = dashborardResources?.video?.map((file) => {
    return <ResourceListDisplay key={file.id} file={file} isVideo />
  })

  return (
    <section className={style.resourceTab}>
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
