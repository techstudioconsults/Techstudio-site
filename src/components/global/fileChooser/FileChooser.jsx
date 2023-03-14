import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import style from './fileChooser.module.scss'

const fileTypes = ['JPG', 'PNG', 'TXT', 'PDF']

const FileChooser = () => {
  const [file, setFile] = useState(null)
  const handleChange = (file) => {
    setFile(file)
  }
  return (
    <div className='w-100'>
      <FileUploader
        handleChange={handleChange}
        name='file'
        types={fileTypes}
        multiple
        label='Browse files or drag and drop here'
      >
        <div className={style.fileChooser}>
          <div>
            <Icon width={`1.5rem`} icon={`typcn:attachment`} />
          </div>
          <p className={style.text}>Browse files or drag and drop here</p>
          <button className='btn btn-primary px-16'>Add</button>
        </div>
      </FileUploader>
    </div>
  )
}

export default FileChooser
