import React, { useEffect, useState } from 'react'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from './resourceTab.module.scss'
import '../../../../../components/dashboard/resources/custom.css'
import PropTypes from 'prop-types'
import AdminResourceListDisplay from './AdminResourceListDisplay'
import { useLocation } from 'react-router-dom'
import Feedback from '../../../../../components/global/feedbacks/Feedback'
import { useSelector } from 'react-redux'
import { selectAllResources } from '../api/resourceSlice'

const ResourceTab = () => {
  // const { studentBoard } = DASHBOARD_CONTENT
  const [resources, setResources] = useState([])
  const allResources = useSelector(selectAllResources)
  const location = useLocation()

  console.log(location)

  function checkExtension(str) {
    // Split the string by the dot character
    const parts = str.split('.')
    const extension = parts[parts.length - 1]
    return extension
  }

  useEffect(() => {
    allResources.forEach((resource) => {
      if (resource.id === location.state.courseID) {
        setResources(resource)
      }
    })
  }, [allResources, location.state.courseID])

  const fileDisplay = resources?.resources?.map((file) => {
    if (
      checkExtension(file.name) !== `mp4` &&
      checkExtension(file.name) !== `mp3`
    ) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          type={`document`}
          // course={state?.courseTitle}
        />
      )
    }
  })
  const videoDisplay = resources?.resources?.map((file) => {
    if (checkExtension(file.name) === `mp4`) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          type={`video`}
          // course={state?.courseTitle}
        />
      )
    }
  })

  const audioDisplay = resources?.resources?.map((file) => {
    if (checkExtension(file.name) === `mp3`) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          type={`audio`}
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
            DOCUMENT
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
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            {resources?.resources?.length ? (
              fileDisplay
            ) : (
              <Feedback message={`No resources uploaded for this course`} />
            )}
          </div>
        </div>
        <div className='tab-pane fade' id='video' aria-labelledby='about-tab'>
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            {resources?.resources?.length ? (
              videoDisplay
            ) : (
              <Feedback message={`No resources uploaded for this course`} />
            )}
          </div>
        </div>
        <div className='tab-pane fade' id='audio' aria-labelledby='album-tab'>
          <div
            className={[
              style.listWrapper,
              `hide_scrollbar d-flex flex-column gap-5`,
            ].join(' ')}
          >
            {resources?.resources?.length ? (
              audioDisplay
            ) : (
              <Feedback message={`No resources uploaded for this course`} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

ResourceTab.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default ResourceTab
