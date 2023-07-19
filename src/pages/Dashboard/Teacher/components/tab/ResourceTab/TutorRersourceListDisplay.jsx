import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import axios from 'axios'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import download from 'downloadjs'
import PropTypes from 'prop-types'

import {
  DeleteModal,
  Portal,
  ToastComponent,
} from '../../../../../../components'
import Feedback from '../../../../../../components/global/feedbacks/Feedback'
import useToast from '../../../../../../hooks/useToast'
import { selectCurrentToken } from '../../../../../Auth/api/authSlice'

const baseUrl = process.env.REACT_APP_BASE_URL

const TutorResourceListDisplay = ({ isDashboard, file, course, format }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const token = useSelector(selectCurrentToken)
  const { toast } = useToast()
  const { resource } = useParams()
  const { courseID } = useParams()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const setIcon = () => {
    switch (format) {
      case `pdf`:
        return `vscode-icons:file-type-pdf2`
      case `mp4`:
        return `vscode-icons:file-type-video`
      case `mp3`:
        return `flat-color-icons:audio-file`
      case `csv`:
        return `vscode-icons:file-type-excel2`
      case `docx`:
        return `flat-color-icons:document`
      case `txt`:
        return `flat-color-icons:audio-file`
      case `ppt`:
        return `vscode-icons:file-type-powerpoint2`
      default:
        break
    }
  }

  const handleDownloadNotPdf = async (file) => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/resources/courses/${resource}/resources/${file?.id}/download`,
        credentials
      )
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
        const blob = new Blob([res.data], { type: 'text/csv' })
        download(blob, `${file?.name}`)
      }
    } catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }
  const handleDownload = async (file) => {
    if (file?.extName !== `pdf`) {
      handleDownloadNotPdf(file)
    } else {
      setLoading(true)
      try {
        const response = await axios.get(
          `${baseUrl}/resources/courses/${resource}/resources/${file?.id}/download`,
          {
            responseType: 'arraybuffer',
            ...credentials,
          }
        )
        if (response.status === 200) {
          setLoading(false)
          const blob = new Blob([response.data], { type: 'application/pdf' })
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', `${file?.name}.pdf`)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      } catch (error) {
        setLoading(false)
        setErrorMessage(error.message)
        toast.show()
      }
    }
  }

  return (
    <>
      {!file ? (
        <>
          <ToastComponent errorMessage={errorMessage} />
          <Portal wrapperId='react-portal-modal-container'>
            <DeleteModal
              content={{
                action: `delete-resource`,
                title: `${`Are you sure you want to delete this Resource?`}`,
                desc: `This Resource has successfully being deleted. Kindly click continue to exit this page.`,
                resourceID: file?.id,
                courseID: `${resource || courseID}`,
              }}
            />
          </Portal>
          <section className='container'>
            <section
              title={file?.name}
              className={`row align-items-center cc-resource-hover p-2`}
            >
              <a
                href={file?.url}
                target='_blank'
                rel='noreferrer'
                className='col-10 justify-content-between'
              >
                <div
                  className={`d-flex align-items-center gap-10 ${
                    isDashboard ? `col-11` : `col-6`
                  }`}
                >
                  <div>
                    <Icon width={`2rem`} icon={setIcon()} />
                  </div>
                  <div>
                    <p
                      className={`fw-semibold text-blue my-0 ${
                        isDashboard ? `fs-sm` : `fs-md`
                      }`}
                    >
                      Design Methodology.xslx
                      {/* {isDashboard
                        ? `${file?.name?.slice(0, 12)}...`
                        : file?.name} */}
                    </p>
                    <p
                      className={`text-secondary my-0 fw-semibold ${
                        isDashboard ? `fs-xs` : `fs-sm`
                      }`}
                    >
                      {/* {new Date(file?.createdAt).toLocaleString()} */}
                      Added on 03/03/2023
                    </p>
                  </div>
                </div>
                <div hidden={isDashboard} className='col-2'>
                  <p className='fs-sm text-secondary my-0 fw-semibold'>
                    {/* File Size: {file?.fileSize} */}
                    File Size: 1.05kb
                  </p>
                </div>
                <div hidden={isDashboard} className='col-3 me-5'>
                  <p className='fs-sm text-secondary my-0 fw-semibold'>{`UI/UX Design`}</p>
                </div>
              </a>
              <section className='col-2 d-flex align-items-center justify-content-end'>
                <button
                  onClick={() => handleDownload(file)}
                  hidden={isDashboard || resource === `all`}
                  className='text-primary bg-transparent fs-sm'
                  style={{ cursor: `pointer` }}
                >
                  {isLoading ? (
                    <div
                      className='spinner-grow spinner-grow-sm bg-blue'
                      role='status'
                    />
                  ) : (
                    <Icon
                      width={`${isDashboard ? `1.2rem` : `1.5rem`}`}
                      icon={`material-symbols:download-sharp`}
                    />
                  )}
                  Download
                </button>
              </section>
            </section>
          </section>
        </>
      ) : (
        <Feedback />
      )}
    </>
  )
}

TutorResourceListDisplay.propTypes = {
  file: PropTypes.object,
  isDashboard: PropTypes.bool,
  course: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
}

export default TutorResourceListDisplay
