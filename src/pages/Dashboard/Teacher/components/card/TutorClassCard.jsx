/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import PropTypes from 'prop-types'

import { DeleteModal, Portal } from '../../../../../components'

import style from './classCard.module.scss'

const TutorClassCard = ({ singleClass, isPrevious }) => {
  const { courseID } = useParams()
  const dispatch = useDispatch()

  const showClassDetails = () => {
    dispatch({ type: 'classes/setClassDetails', payload: singleClass })
    dispatch({ type: 'app/setClassDetailOpen', payload: false })
  }

  return (
    <>
      {/* <ToastComponent errorMessage={errorMessage} /> */}
      <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            title: `${`Are you sure you want to delete this class?`}`,
            desc: `${singleClass?.title} class has successfully being deleted. Kindly click continue to exit this page.`,
            classID: singleClass?.id,
            courseID: courseID,
            action: `delete-class`,
          }}
        />
      </Portal>
      <button
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}x
        onClick={showClassDetails}
        className={`btn btn-lg h-100 d-flex justify-content-between align-items-start text-dark border p-0 py-5 ps-2 rounded-0 ${style.courseList}`}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-3'>
              <div className={style.tableHeadTitle}>
                <p className='fw-bold fs-sm text-start'>{`Javascript Fullstack January 2023`}</p>
                {/* <p className='fs-xs text-start text-danger'>{id}</p> */}
              </div>
            </div>
            <div className='col-3'>
              <div className={`${style.tableHead} h-100 text-end`}>
                <p className='fs-sm text-muted fw-semibold'>
                  Start Date:{' '}
                  <span className='text-primary'>{`Jan 18, 2023`}</span>
                </p>
                <p className='fs-sm text-muted fw-semibold'>
                  End Date:{' '}
                  <span className='text-danger'>{`July 18, 2023`}</span>
                </p>
              </div>
            </div>
            <div className='col-2'>
              <div
                className={`${style.tableHead} h-100 fs-sm fw-semibold text-muted text-end`}
              >
                <span>{`Weekday`}</span>
              </div>
            </div>
            <div className='col-3'>
              <div
                className={`${style.tableHead} fs-sm d-flex align-items-center justify-content-end gap-2`}
              >
                <div className={`${style.avatarWrapper} bg-primary `}>
                  <img
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`}
                    alt='img'
                    className='cc-img-fluid'
                  />
                </div>
                <span className='fw-semibold text-muted'>{`Ibori James`}</span>
              </div>
            </div>
            <div className='col-1'>
              <div className='dropdown'>
                <div
                  className='dropdown-toggle p-0'
                  data-bs-toggle='dropdown'
                  data-bs-offset='-270,10'
                  aria-expanded='false'
                >
                  <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
                </div>
                <ul className={`dropdown-menu`}>
                  <div
                    className={`${
                      isPrevious ? `d-none` : `d-flex`
                    } align-items-center px-3 `}
                  >
                    <Link
                      to={`/tutor/classes/2/lesson`}
                      state={singleClass}
                      className='text-dark'
                    >
                      <Icon
                        width={`1.1rem`}
                        icon={`mdi:eye`}
                        className='me-3'
                      />
                      <span>View Lessons</span>
                    </Link>
                  </div>
                  <hr hidden={isPrevious} className='my-2' />
                  <div
                    className={`${
                      isPrevious ? `d-none` : `d-flex`
                    } align-items-center px-3 `}
                  >
                    <Link
                      to={`/tutor/class/lesson/create`}
                      state={singleClass}
                      className='text-dark'
                    >
                      <Icon
                        width={`1.1rem`}
                        icon={`material-symbols:delete-outline-rounded`}
                        className='me-3'
                      />
                      <span>Shedule A Lesson</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

TutorClassCard.propTypes = {
  singleClass: PropTypes.object,
  isPrevious: PropTypes.bool,
}

export default TutorClassCard
