/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Icon } from '@iconify/react'
import React from 'react'
import style from '../../../components/dashboard/dashboardNavbar/dashboardnavbar.module.scss'
import searchStyle from './search.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import Portal from '../POTAL/Portal'
import Feedback from '../feedbacks/Feedback'
import { useState } from 'react'
import { useDashboardSearchMutation } from '../../../pages/Dashboard/Admin/api/dashboardApiSlice'

const SearchComponent = () => {
  const [query, setQuery] = useState(``)
  const [dashboardSearch] = useDashboardSearchMutation()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearchModal = async () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`search-modal`)
      )
      modal.show()
      const res = await dashboardSearch(query).unwrap()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={`input-group ${style.searchInput}`}>
      <>
        <input
          type={`search`}
          className='form-control border border-0 text-secondary h-100'
          aria-describedby='search'
          placeholder='Search for courses, classes, students and more'
          onChange={handleChange}
        />
        <div
          onClick={handleSearchModal}
          className={`input-group-text bg-white border border-0 text-secondary h-100`}
          id='passwordHelpBlock'
        >
          <Icon width={`1.2rem`} icon={`ri:search-line`} />
        </div>
      </>

      <Portal wrapperId='react-portal-modal-container'>
        <div
          className='modal fade'
          //   data-bs-backdrop='static'
          id='search-modal'
          tabIndex='-1'
          aria-labelledby='search-modal-label'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-body p-2'>
                <div className='d-flex align-items-center justify-content-between'>
                  <input
                    defaultValue={query}
                    type={`search`}
                    className='form-control border border-0 text-blue h-100 fw-semibold'
                    aria-describedby='search'
                    placeholder='Search for courses, classes, students and more'
                  />
                  <div
                    onClick={handleSearchModal}
                    className={`input-group-text bg-white border border-0 text-secondary h-100`}
                    id='passwordHelpBlock'
                  >
                    <Icon width={`1.2rem`} icon={`ri:search-line`} />
                  </div>
                </div>
                {/* search tab */}
                <ul className={`nav ${searchStyle.nav} search-tab gap-5`}>
                  <li className='nav-item d-flex align-items-center '>
                    <a
                      className='nav-link active text-secondary fs-sm'
                      data-bs-toggle='tab'
                      href='#allResult'
                      id={1}
                    >
                      All Results{' '}
                    </a>
                    <span className={`rounded-circle fs-xs ${searchStyle.tag}`}>
                      0
                    </span>
                  </li>
                  <li className='nav-item d-flex align-items-center '>
                    <a
                      className='nav-link text-secondary fs-sm'
                      data-bs-toggle='tab'
                      href='#courses'
                      id={2}
                    >
                      Courses{' '}
                    </a>
                    <span className={`rounded-circle fs-xs ${searchStyle.tag}`}>
                      20
                    </span>
                  </li>
                  <li className='nav-item d-flex align-items-center '>
                    <a
                      className='nav-link text-secondary fs-sm'
                      data-bs-toggle='tab'
                      href='#classes'
                      id={3}
                    >
                      Classes{' '}
                    </a>
                    <span className={`rounded-circle fs-xs ${searchStyle.tag}`}>
                      0
                    </span>
                  </li>
                  <li className='nav-item d-flex align-items-center '>
                    <a
                      className='nav-link text-secondary fs-sm'
                      data-bs-toggle='tab'
                      href='#resources'
                      id={1}
                    >
                      Resources
                    </a>
                    <span className={`rounded-circle fs-xs ${searchStyle.tag}`}>
                      0
                    </span>
                  </li>
                  <li className='nav-item d-flex align-items-center '>
                    <a
                      className='nav-link text-secondary fs-sm'
                      data-bs-toggle='tab'
                      href='#users'
                      id={1}
                    >
                      Users
                    </a>
                    <span className={`rounded-circle fs-xs ${searchStyle.tag}`}>
                      0
                    </span>
                  </li>
                </ul>

                <div className='tab-content my-10' id='tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='allResult'
                    aria-labelledby='allResult-tab'
                  >
                    <Feedback
                      fontSize={`sm`}
                      btnName={`Add Resource`}
                      message={`No resources uploaded for this course`}
                    />
                  </div>
                  <div
                    className='tab-pane fade'
                    id='courses'
                    aria-labelledby='allResult-tab'
                  >
                    <Feedback
                      fontSize={`sm`}
                      btnName={`Add Resource`}
                      message={`No resources uploaded for this course`}
                    />
                  </div>
                  <div
                    className='tab-pane fade'
                    id='classes'
                    aria-labelledby='allResult-tab'
                  >
                    <Feedback
                      fontSize={`sm`}
                      btnName={`Add Resource`}
                      message={`No resources uploaded for this course`}
                    />
                  </div>
                  <div
                    className='tab-pane fade'
                    id='resources'
                    aria-labelledby='allResult-tab'
                  >
                    <Feedback
                      fontSize={`sm`}
                      btnName={`Add Resource`}
                      message={`No resources uploaded for this course`}
                    />
                  </div>
                  <div
                    className='tab-pane fade'
                    id='users'
                    aria-labelledby='allResult-tab'
                  >
                    <Feedback
                      fontSize={`sm`}
                      btnName={`Add Resource`}
                      message={`No resources uploaded for this course`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  )
}

export default SearchComponent
