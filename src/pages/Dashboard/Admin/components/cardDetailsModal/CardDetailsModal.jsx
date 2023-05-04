/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Icon } from '@iconify/react'
import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useCallback } from 'react'
import style from '../tab/adminTab.module.scss'
import { useEffect } from 'react'
import { selectCourses } from '../../courses/api/coursesSlice'
import { useSelector } from 'react-redux'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'

const CardDetailsModal = ({ content }) => {
  const location = useLocation()
  const courses = useSelector(selectCourses)

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          to={`/admin/dashboard/${course?.id}/details`}
          //   onClick={() => getClasses(course.id)}
          className={[
            'nav-link',
            style.a,
            activeRoute(course.id)
              ? `border border-primary border-top-0 border-start-0 border-end-0 rounded-0 border-3`
              : null,
          ].join(' ')}
        >
          {course?.title}
        </NavLink>
      </li>
    )
  })
  return (
    <div
      className='modal fade'
      //   data-bs-backdrop='static'
      id={`${content.modalID}`}
      tabIndex='-1'
      aria-labelledby='card-details-modal-label'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg'>
        <div className='modal-content p-5'>
          <div className='modal-body p-2'>
            {/* header */}
            <section>
              <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
                <p className='fs-2xl text-blue fw-bold'>{content.modalID}</p>
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
            <section>
              <ul className={['nav hide_scrollbar', style.tabList].join(' ')}>
                {/* {coursesNav} */}
              </ul>
              <div className='tab-content py-6' id='tabContent'>
                {
                  // classArgs?.isLoading
                  // ?
                  // <SpinnerComponent />
                  // :
                  //   <Outlet />
                }
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailsModal
