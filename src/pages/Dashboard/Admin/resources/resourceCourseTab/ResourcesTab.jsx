/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import PropTypes from 'prop-types'

import Feedback from '../../../../../components/global/feedbacks/Feedback'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import { selectResources } from '../api/resourceSlice'

import AdminResourceListDisplay from './AdminResourceListDisplay'

import '../../../../../components/dashboard/resources/custom.css'
import style from './resourceTab.module.scss'

const ResourceTab = () => {
  // const { studentBoard } = DASHBOARD_CONTENT
  const [resources, setResources] = useState(null)
  const allResources = useSelector(selectResources)
  const location = useLocation()

  const addResource = (event) => {
    event.stopPropagation()
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('add-resource')
    )
    modal.show()
  }

  // console.log(all);

  function checkExtension(str) {
    // Split the string by the dot character
    const parts = str.split('.')
    const extension = parts[parts.length - 1]
    return extension
  }

  const fileDisplay = allResources?.document?.map((file) => {
    let fileFormat = checkExtension(file.name)
    if (
      checkExtension(file.name) !== `mp4` &&
      checkExtension(file.name) !== `mp3`
    ) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          type={`document`}
          format={fileFormat}
        />
      )
    }
  })
  const videoDisplay = allResources?.video?.map((file) => {
    let fileFormat = checkExtension(file.name)
    if (checkExtension(file.name) === `mp4`) {
      return (
        <AdminResourceListDisplay
          key={file.id}
          file={file}
          type={`video`}
          format={fileFormat}
          // course={state?.courseTitle}
        />
      )
    }
  })

  const audioDisplay = allResources?.audio?.map((file) => {
    let fileFormat = checkExtension(file.name)
    if (checkExtension(file.name) === `mp3`) {
      return (
        <AdminResourceListDisplay
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
            {allResources?.document?.length ? (
              fileDisplay
            ) : (
              <div onClick={addResource}>
                <Feedback
                  btnName={`Add New Resources`}
                  message={`No resources uploaded for this course`}
                />
              </div>
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
            {allResources?.video?.length ? (
              videoDisplay
            ) : (
              <div onClick={addResource}>
                <Feedback
                  btnName={`Add New Resources`}
                  message={`No resources uploaded for this course`}
                />
              </div>
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
            {allResources?.audio?.length ? (
              audioDisplay
            ) : (
              <div onClick={addResource}>
                <Feedback
                  btnName={`Add New Resources`}
                  message={`No resources uploaded for this course`}
                />
              </div>
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
