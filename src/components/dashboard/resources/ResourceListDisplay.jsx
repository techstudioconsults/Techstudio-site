import React from 'react'
import PropTypes from 'prop-types'
import pdf from '../../../assets/icons/Icon-awesome-file-pdf.png'
import cam from '../../../assets/icons/cam.png'
import { MdOutlineFileDownload, MdPlayCircleFilled } from 'react-icons/md'

const ResourceListDisplay = ({ file, isVideo, isAudio, isTextFile, isADB }) => {
  return (
    <section className='d-flex align-items-center justify-content-between p-2'>
      <div className='d-flex align-items-center gap-3'>
        <div>
          <img src={isTextFile ? pdf : isVideo ? cam : pdf} alt='' />
        </div>
        <p className='fs-sm'>{file.title}</p>
      </div>
      <div className='d-flex align-items-center gap-5'>
        <div className='d-flex align-items-center gap-3'>
          <p
            className={['fs-xs text-primary', isADB ? `d-flex` : `d-none`].join(
              ' '
            )}
          >
            View
          </p>
          <MdOutlineFileDownload className='text-primary' size={20} />
        </div>
        <div className={[isVideo ? `d-block` : `d-none`]}>
          <MdPlayCircleFilled className='text-primary' size={20} />
        </div>
      </div>
    </section>
  )
}

ResourceListDisplay.propTypes = {
  file: PropTypes.object,
  isVideo: PropTypes.bool,
  isAudio: PropTypes.bool,
  isTextFile: PropTypes.bool,
  isADB: PropTypes.bool,
}

export default ResourceListDisplay
