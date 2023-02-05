import React from 'react'
import { MdClose } from 'react-icons/md'
// import PropTypes from 'prop-types'
import fileUpload from '../../../assets/images/fileUpload.webp'
import style from './upload.module.scss'

const AddAFile = () => {
  return (
    <section>
      <div type='button' data-bs-toggle='modal' data-bs-target='#start-a-class'>
        <p className='text-primary fs-sm fw-semibold'>Upload New file</p>
      </div>
      <div
        className='modal fade'
        id='start-a-class'
        tabIndex='-1'
        aria-labelledby='start-a-class'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-fullscreen-md-down modal-lg'>
          <div className='modal-content'>
            <div className='modal-header d-flex justify-content-end'>
              <MdClose
                size={`1.5rem`}
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className={['modal-body'].join(' ')}>
              <div className={style.uploadForm}>
                <div className={style.formWrapper}>
                  <div className={style.img}>
                    <img src={fileUpload} alt='file' />
                  </div>
                  <div className={style.uploadBtn}>
                    <button className='bg-transparent border border-1 px-5'>
                      Add File
                    </button>
                  </div>
                  <p>or drop files to upload</p>
                </div>
                <div
                  className={[
                    style.button,
                    `d-flex justify-content-end my-5`,
                  ].join(' ')}
                >
                  <button className='bg-primary text-white px-5 rounded rounded-3'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// StartAClass.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]).isRequired,
//   title: PropTypes.string,
// }

export default AddAFile
