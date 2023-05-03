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
import AdminResourceListDisplay from '../../../pages/Dashboard/Admin/resources/resourceCourseTab/AdminResourceListDisplay'

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

  function checkExtension(str) {
    // Split the string by the dot character
    const parts = str.split('.')
    const extension = parts[parts.length - 1]
    return extension
  }

  const fileDisplay = dashborardResources?.document?.map((file) => {
    // return <ResourceListDisplay key={file.id} file={file} isADB />
    let fileFormat = checkExtension(file.name)
    if (
      checkExtension(file.name) !== `mp4` &&
      checkExtension(file.name) !== `mp3`
    ) {
      return (
        <AdminResourceListDisplay
          isDashboard
          key={file.id}
          file={file}
          type={`document`}
          format={fileFormat}
          // course={state?.courseTitle}
        />
      )
    }
  })
  const videoDisplay = dashborardResources?.video?.map((file) => {
    // return <ResourceListDisplay key={file.id} file={file} isVideo />
    let fileFormat = checkExtension(file.name)
    if (checkExtension(file.name) === `mp4`) {
      return (
        <AdminResourceListDisplay
          isDashboard
          key={file.id}
          file={file}
          type={`document`}
          format={fileFormat}
          // course={state?.courseTitle}
        />
      )
    }
  })
  const audioDisplay = dashborardResources?.audio?.map((file) => {
    // return <ResourceListDisplay key={file.id} file={file} isVideo />
    let fileFormat = checkExtension(file.name)
    if (checkExtension(file.name) === `mp3`) {
      return (
        <AdminResourceListDisplay
          isDashboard
          key={file.id}
          file={file}
          type={`audio`}
          format={fileFormat}
          // course={state?.courseTitle}
        />
      )
    }
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
            DOCUMENTS
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
            {audioDisplay}
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
