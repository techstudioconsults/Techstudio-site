import React from 'react'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from './resourceTab.module.scss'
import '../../../../../components/dashboard/resources/custom.css'
import PropTypes from 'prop-types'
import AdminResourceListDisplay from './AdminResourceListDisplay'
import { useLocation } from 'react-router-dom'
import Feedback from '../../../../../components/global/feedbacks/Feedback'

const ResourceTab = () => {
  const { studentBoard } = DASHBOARD_CONTENT

  function checkExtension(str) {
    // Split the string by the dot character
    const parts = str.split('.')
    const extension = parts[parts.length - 1]
    return extension
  }

  const { state } = useLocation()
  // console.log(state)

  const fileDisplay = state?.courseResources?.map((file) => {
    if (checkExtension(file.name) !== `mp4`) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          course={state?.courseTitle}
        />
      )
    }
    // else {
    //   return <Feedback key={file.id} />
    // }
  })
  const videoDisplay = state?.courseResources?.map((file) => {
    if (checkExtension(file.name) === `mp4`) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          course={state?.courseTitle}
        />
      )
    }
    // else {
    //   return <Feedback key={file.id} />
    // }
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
            {state?.courseResources.length ? (
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
            {state?.courseResources.length ? (
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
            {state?.courseResources.length ? (
              fileDisplay
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
