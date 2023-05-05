/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import Feedback from '../../global/feedbacks/Feedback'
import Portal from '../../global/POTAL/Portal'
import { AddResource } from '../..'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import SpinnerComponent from '../../global/skeletonLoader/SpinnerComponent'

const DashboardResource = () => {
  // const { studentBoard } = DASHBOARD_CONTENT
  const dashborardResources = useSelector(selectDashboardResources)
  const { courseID } = useParams()

  const [dashboardAllResources, dashboardResourcesArgs] =
    useDashboardAllResourcesMutation()

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

  const addResource = (event) => {
    event.stopPropagation()
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('add-resource')
    )
    modal.show()
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
      <Portal wrapperId='react-portal-modal-container'>
        <AddResource />
      </Portal>
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

      {dashboardResourcesArgs.isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className='tab-content' id='tabContent'>
          <div
            className='tab-pane fade show active'
            id='PDF'
            aria-labelledby='home-tab'
          >
            <div className={[style.listWrapper, `hide_scrollbar`].join(' ')}>
              {dashborardResources?.document?.length ? (
                fileDisplay
              ) : (
                <div onClick={addResource}>
                  <Feedback
                    fontSize={`sm`}
                    btnName={`Add Resource`}
                    message={`No resources uploaded for this course`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className='tab-pane fade' id='video' aria-labelledby='about-tab'>
            <div className={[style.listWrapper, `hide_scrollbar`].join(' ')}>
              {dashborardResources?.video?.length ? (
                videoDisplay
              ) : (
                <div onClick={addResource}>
                  <Feedback
                    fontSize={`sm`}
                    btnName={`Add Resource`}
                    message={`No resources uploaded for this course`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className='tab-pane fade' id='audio' aria-labelledby='album-tab'>
            <div className={[style.listWrapper, `hide_scrollbar`].join(' ')}>
              {dashborardResources?.audio?.length ? (
                audioDisplay
              ) : (
                <div onClick={addResource}>
                  <Feedback
                    fontSize={`sm`}
                    btnName={`Add Resource`}
                    message={`No resources uploaded for this course`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

DashboardResource.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default DashboardResource
