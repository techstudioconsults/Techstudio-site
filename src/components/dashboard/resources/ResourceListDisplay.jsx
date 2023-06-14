import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import cam from '../../../assets/icons/cam.png'
import pdf from '../../../assets/icons/Icon-awesome-file-pdf.png'

const ResourceListDisplay = ({ file, isVideo, isTextFile, isADB }) => {
  return (
    <section className='d-flex align-items-center justify-content-between p-2'>
      <div className='d-flex align-items-center gap-3'>
        <div>
          <img
            className='cc-img-fluid'
            src={isTextFile ? pdf : isVideo ? cam : pdf}
            alt='img'
          />
        </div>
        <p className='fs-sm'>{file.name}</p>
      </div>
      <div className='d-flex align-items-center gap-5'>
        <div
          className={`d-flex align-items-center gap-3 ${
            isADB ? `d-none` : `d-flex`
          }`}
        >
          <p className={['fs-xs text-primary'].join(' ')}>View</p>
          <Icon
            icon={`material-symbols:download`}
            className='text-primary'
            width={`1rem`}
          />
        </div>
        <div className={[isVideo ? `d-block` : `d-none`]}>
          <Icon
            icon={`material-symbols:play-circle`}
            className='text-primary'
            size={20}
          />
        </div>
        <div className='text-danger'>
          <Icon icon={`mi:delete`} />
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
