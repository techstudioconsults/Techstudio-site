/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar, { AvatarXL } from '../../avatar/Avatar'
// import style from './adminClassDisplay.module.scss'

const LessonCard = () => {
  return (
    <>
      <button
        className={`btn btn-lg h-100 d-flex justify-content-between gap-5 text-dark border p-0 p-5 rounded-0`}
      >
        <section className='w-100'>
          <section className='d-flex justify-content-between w-100'>
            <section className='d-flex align-items-center text-start gap-5'>
              <div>
                <AvatarXL />
              </div>
              <div>
                <h6 className='m-0 fw-bold text-blue'>
                  CSS Styles - Internal And External Styling
                </h6>
                <p className='fs-sm text-secondary'>
                  Javascript Fullstack January 2023
                </p>
              </div>
            </section>
            <section>
              <p className='fs-sm text-danger fw-semibold'>Weekend</p>
            </section>
          </section>
          <section className='d-flex justify-content-between text-start fs-sm ms-18 mt-5 text-secondary'>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon icon={`la:chalkboard-teacher`} width={`1.4rem`} />
              </span>
              <span>Ibori James, Tutor</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon
                  icon={`material-symbols:calendar-today`}
                  width={`1.1rem`}
                />
              </span>
              <span>Jan 25, 2023</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon icon={`mdi:clock-time-five-outline`} width={`1.2rem`} />
              </span>
              <span>9 AM</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon
                  icon={`material-symbols:create-new-folder-outline`}
                  width={`1.3rem`}
                />
              </span>
              <span>CSS Styling 2: Internal & External.pdf</span>
            </div>
          </section>
        </section>
        <section>
          <div
            className='dropdown'
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className='dropdown-toggle p-0'
              data-bs-toggle='dropdown'
              data-bs-offset='-140,10'
              aria-expanded='false'
            >
              <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
            </div>
            <ul className={`dropdown-menu`}>
              <div className='d-flex align-items-center px-5'>
                <Link to={`/admin/class/lesson/edit`} state={{}}>
                  <Icon
                    width={`1.1rem`}
                    icon={`material-symbols:edit`}
                    className='me-3'
                  />
                  <span>Reschedule Lesson</span>
                </Link>
              </div>
              <hr className='my-2' />
              <div
                // onClick={handleDeleteModal}
                className='d-flex align-items-center text-danger px-3'
              >
                <Icon
                  width={`1.1rem`}
                  icon={`material-symbols:delete-outline-rounded`}
                  className='me-3'
                />
                <span>Delete Lesson</span>
              </div>
            </ul>
          </div>
        </section>
      </button>
    </>
  )
}

export default LessonCard
