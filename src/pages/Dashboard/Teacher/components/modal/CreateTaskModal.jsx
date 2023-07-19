import React from 'react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    // height: `41px`,
  }),
  input: (styles) => {
    return {
      ...styles,
      // height: `32px`,
      fontSize: `14px`,
    }
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: `#0266F41A`,
      color: '#A7A7A7',
      padding: `5px`,
      border: `1px solid #0266F4`,
      borderRadius: `5px`,
      marginRight: `10px`,
    }
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      color: '#0266F4',
      cursor: 'pointer',
      ':hover': {
        color: '#0266F41',
      },
    }
  },
}

const CreateTaskModal = () => {
  const [isLoading, setLoading] = useState(false)

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    // resolver: yupResolver(schema),
  })

  return (
    <div>
      <button
        type='button'
        className='btn btn-primary px-10'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Create Task
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content px-10'>
            <div className='modal-header d-flex justify-content-center'>
              <h3 className='modal-title' id='exampleModalLabel'>
                Add New Task
              </h3>
              {/* <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button> */}
            </div>
            <div className='modal-body'>
              <form className='text-dark' encType='multipart/form-data'>
                <div className='my-10 container'>
                  {/* class */}
                  <div className='mb-8 d-flex row'>
                    <div className='col-4'>
                      <label
                        htmlFor='topic'
                        className={`col-form-label fs-lg w-100 text-blue fw-semibold`}
                      >
                        Class
                      </label>
                    </div>
                    <div className='col-8'>
                      <div className={`w-100`}>
                        <div className='input-select mt-3'>
                          <select
                            className='form-select form-select-sm'
                            aria-label='Default select example'
                          >
                            <option selected>
                              {' '}
                              Javascript Fullstack January 2023
                            </option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-8 d-flex row'>
                    <div className='col-4'>
                      <label
                        htmlFor='topic'
                        className={`col-form-label fs-lg w-100 text-blue fw-semibold`}
                      >
                        Lesson
                      </label>
                    </div>
                    <div className='col-8'>
                      <div className={`w-100`}>
                        <div className='input-select mt-3'>
                          <select
                            className='form-select form-select-sm'
                            aria-label='Default select example'
                          >
                            <option selected>
                              {' '}
                              Javascript Fullstack January 2023
                            </option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-8 d-flex row'>
                    <div className='col-4'>
                      <label
                        htmlFor='topic'
                        className={`col-form-label fs-lg w-100 text-blue fw-semibold`}
                      >
                        Description
                      </label>
                    </div>
                    <div className='col-8'>
                      <div className={`w-100`}>
                        <textarea
                          placeholder='topic'
                          type='text'
                          className='form-control form-control-lg'
                          id='topic'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mb-8 d-flex row'>
                    <div className='col-4'>
                      <label
                        htmlFor='topic'
                        className={`col-form-label fs-lg w-100 text-blue fw-semibold`}
                      >
                        Resources
                      </label>
                    </div>
                    <div className='col-8'>
                      <div className={`w-100 border p-5`}>
                        <input type='file' multiple {...register('files')} />
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div>
                    <div className='d-flex gap-10 justify-content-end my-8 row'>
                      <div className={`w-100 text-end`}>
                        <button
                          disabled={isLoading}
                          //   type='submit'
                          className='btn btn-primary w-25 me-10'
                        >
                          <div
                            hidden={!isLoading}
                            className='spinner-border spinner-border-sm me-5 text-white'
                            role='status'
                          />
                          {isLoading ? `Please wait...` : `Save Lesson`}
                        </button>
                        <button
                          type='button'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                          //   onClick={handleCancelAction}
                          className='btn btn-outline-danger w-25 dont-delete-btn'
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskModal
