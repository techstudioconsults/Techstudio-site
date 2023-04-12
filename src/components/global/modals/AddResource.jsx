import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
// import PropTypes from 'prop-types'
import style from './upload.module.scss'

// eslint-disable-next-line react/prop-types
const AddAFile = () => {
  const [isLoading, setLoading] = useState()
  return (
    <div
      className='modal fade'
      id='add-resource'
      tabIndex='-1'
      aria-labelledby='add-resource'
    >
      <div className='modal-dialog modal-fullscreen-md-down modal-lg '>
        <div className='modal-content'>
          {/* <div className='modal-header d-flex justify-content-end'>
            <MdClose
              size={`1.5rem`}
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div> */}
          <div className={['modal-body p-16'].join(' ')}>
            <h4 className='text-blue text-center fs-3xl fw-bold'>
              A New Resource
            </h4>
            <div className='my-10 container'>
              {/* topic */}
              <div className='mb-8 d-flex row'>
                <div className='col-4'>
                  <label
                    htmlFor='title'
                    className={`col-form-label fs-lg text-blue fw-semibold ${style.labels} w-100`}
                  >
                    Course
                  </label>
                </div>
                <div className='col-8'>
                  <div className={`${style.inputs} w-100`}>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      defaultValue={`Open this select menu`}
                    >
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* file chooser */}
              <section>
                <div className='mb-8 align-items-center row'>
                  <div className='col-4'>
                    <label
                      htmlFor='resource'
                      className={`col-form-label fs-lg text-blue fw-semibold ${style.labels}`}
                    >
                      Resources
                    </label>
                  </div>
                  <div className='col-8'>
                    <div className={`${style.inputs} w-100`}>
                      <div
                        className={
                          (style.inputs,
                          `d-flex align-items-center w-100 border border-1 p-5 rounded-2`)
                        }
                      >
                        <input id='resource' type='file' multiple />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* CTA */}
              <div className='d-flex gap-10 justify-content-end my-8 row'>
                <div className={`w-100 text-end`}>
                  <button
                    disabled={isLoading}
                    type='submit'
                    className='btn btn-primary w-25 me-10'
                  >
                    <div
                      hidden={!isLoading}
                      className='spinner-border spinner-border-sm me-5 text-white'
                      role='status'
                    />
                    {isLoading ? `Please wait...` : `Save Resources`}
                  </button>
                  <button
                    type='button'
                    // onClick={handleCancelAction}
                    className='btn btn-outline-danger w-25 dont-delete-btn'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
