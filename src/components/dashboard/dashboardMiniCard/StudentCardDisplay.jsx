import { Icon } from '@iconify/react'
import React from 'react'

const StudentCardDisplay = () => {
  return (
    <>
      <section>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
          <p className='fs-2xl text-blue fw-bold'>{`Students`}</p>
          <div>
            <div className={`d-flex align-items-center gap-3`}>
              <div>
                <select
                  className='form-select fs-sm'
                  aria-label='Default select example'
                  defaultValue={`Class Month/ Year`}
                >
                  <option value='1'>Class Month/ Year</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div>
                <button className='btn btn-primary' id='download-list'>
                  <Icon
                    width={`1.2rem`}
                    className='me-3 mb-1'
                    icon={`material-symbols:download-sharp`}
                  />
                  <div
                    hidden
                    className='spinner-border spinner-border-sm me-5'
                    role='status'
                  />
                  Download List
                </button>
              </div>
            </div>
            {/* </li> */}
          </div>
        </div>
      </section>
      <div>StudentCardDisplay</div>
    </>
  )
}

export default StudentCardDisplay
