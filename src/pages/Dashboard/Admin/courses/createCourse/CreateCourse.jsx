import React, { useState } from 'react'
import { AvatarDropdown, FileChooser } from '../../../../../components'
import style from './createCourse.module.scss'
import Multiselect from 'multiselect-react-dropdown'
import { Icon } from '@iconify/react'

const CreateCourse = () => {
  const [options, setOptions] = useState([
    { name: 'Option 1', id: 1 },
    { name: 'Option 2', id: 2 },
  ])
  return (
    <section className={style.courseView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Create Courses</h4>
          <p className={style.subTitle}>
            Fill in the fields below to create a new course.
          </p>
        </div>
        <div className='my-10'>
          <form>
            {/* title */}
            <div className='mb-8 d-flex align-items-center '>
              <label
                htmlFor='title'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Title
              </label>
              <div className={style.inputs}>
                <input
                  placeholder='Placeholder Text'
                  type='text'
                  className='form-control form-control-lg'
                  id='title'
                />
              </div>
            </div>
            {/* about course */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='title'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                About Courses
              </label>
              <div className={style.inputs}>
                <textarea
                  placeholder='Placeholder Text'
                  type='text'
                  className='form-control form-control-lg'
                  id='title'
                />
              </div>
            </div>
            {/* duration */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='title'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Duration
              </label>
              <div
                className={(style.inputs, `d-flex align-items-center gap-8`)}
              >
                <div className='form-check form-control-lg'>
                  <input
                    className='form-check-input '
                    type='radio'
                    name='duration'
                    id='online'
                  />
                  <label className='form-check-label' htmlFor='online'>
                    Online
                  </label>
                </div>
                <div className='form-check form-control-lg'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='duration'
                    id='weekday'
                  />
                  <label className='form-check-label' htmlFor='weekday'>
                    Weekday
                  </label>
                </div>
                <div className='form-check form-control-lg'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='duration'
                    id='weekend'
                  />
                  <label className='form-check-label' htmlFor='weekend'>
                    Weekend
                  </label>
                </div>
                <div>
                  <select
                    className='form-select form-select-lg'
                    aria-label='.form-select-lg example'
                  >
                    <option selected value='1'>
                      1 Month
                    </option>
                    <option value='2'>2 Month</option>
                    <option value='3'>3 Month</option>
                  </select>
                </div>
              </div>
            </div>
            {/* tutors */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='title'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Tutors
              </label>
              <div className={style.inputs}>
                <div
                  className={(style.inputs, `d-flex align-items-center gap-8`)}
                >
                  <div className='form-check form-control-lg'>
                    <input
                      className='form-check-input '
                      type='radio'
                      name='duration'
                      id='online'
                    />
                    <label className='form-check-label' htmlFor='online'>
                      Online
                    </label>
                  </div>
                  <div className='form-check form-control-lg'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='duration'
                      id='weekday'
                    />
                    <label className='form-check-label' htmlFor='weekday'>
                      Weekday
                    </label>
                  </div>
                  <div className='form-check form-control-lg'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='duration'
                      id='weekend'
                    />
                    <label className='form-check-label' htmlFor='weekend'>
                      Weekend
                    </label>
                  </div>
                </div>
                <div>
                  <Multiselect
                    style={{
                      chips: {
                        gap: `1rem`,
                        background: `#0266F41A`,
                        padding: `0.7rem 1rem`,
                        color: `#0266F4`,
                        border: `1px solid #0266F4`,
                        borderRadius: 5,
                      },
                      inputField: {
                        marginInline: `1rem`,
                      },
                      multiselectContainer: {
                        borderRadius: 5,
                      },
                    }}
                    showArrow
                    placeholder='select tutor'
                    options={options}
                    displayValue={`name`}
                    customCloseIcon={
                      <Icon
                        width={`1.3rem`}
                        icon={`mdi:close-circle-outline`}
                      />
                    }
                  />
                </div>
              </div>
            </div>
            {/* file chooser */}
            <section>
              <div className='d-flex'>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-2xl ${style.labels}`}
                >
                  Resources
                </label>
                <div
                  className={(style.inputs, `d-flex align-items-center gap-8`)}
                >
                  <FileChooser />
                </div>
              </div>
              <div></div>
            </section>
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8'>
              <button type='submit' className='btn btn-primary w-25'>
                Save Change
              </button>
              <button className='btn btn-outline-danger w-25'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
      </div>
    </section>
  )
}

export default CreateCourse
