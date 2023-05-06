import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import React from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { DeleteModal, Portal } from '../../../../../components'
import Feedback from '../../../../../components/global/feedbacks/Feedback'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import download from 'downloadjs'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

const AdminResourceListDisplay = ({ isDashboard, file, course, format }) => {
  const [isLoading, setLoading] = useState(false)
  const token = useSelector(selectCurrentToken)
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

  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(file?.id)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  const handleDownload = async (file) => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${baseUrl}/resources/courses/${resource}/resources/${file?.id}/download`,
        credentials
      )
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
        const blob = new Blob([res.data], { type: 'application/pdf' })
        download(blob, `${file?.name}`)
        // const fileURL = URL.createObjectURL(blob)
        // download(fileURL, `${file?.name}`)
      }
    } catch (err) {
      setLoading(false)
      console.log(err.response.data.message)
      // setErrorMessage(err.response.message)
      // toast.show()
    }
  }

  return (
    <>
      {file ? (
        <>
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
                className='col-11 justify-content-between'
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
                      className={`fw-semibold text-blue ${
                        isDashboard ? `fs-sm` : `fs-md`
                      }`}
                    >
                      {isDashboard
                        ? `${file?.name?.slice(0, 12)}...`
                        : file?.name}
                    </p>
                    <p
                      className={`text-secondary ${
                        isDashboard ? `fs-xs` : `fs-sm`
                      }`}
                    >
                      {new Date(file?.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div hidden={isDashboard} className='col-2'>
                  <p className='fs-sm text-secondary'>
                    File Size: {file?.fileSize}
                  </p>
                </div>
                <div hidden={isDashboard} className='col-3 me-5'>
                  <p className='fs-sm text-secondary'>{course}</p>
                </div>
              </a>
              <section className='col-1 d-flex align-items-center justify-content-between'>
                <button
                  onClick={() => handleDownload(file)}
                  hidden={isDashboard}
                  className='text-blue bg-transparent'
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
                </button>
                <button
                  onClick={handleDeleteModal}
                  className='text-danger bg-transparent'
                  style={{ cursor: `pointer` }}
                >
                  <Icon
                    width={`${isDashboard ? `1.2rem` : `1.5rem`}`}
                    icon={`mingcute:delete-2-line`}
                  />
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

AdminResourceListDisplay.propTypes = {
  file: PropTypes.object,
  isDashboard: PropTypes.bool,
  course: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
}

export default AdminResourceListDisplay
