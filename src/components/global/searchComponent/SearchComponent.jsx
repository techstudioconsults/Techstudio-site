/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Icon } from '@iconify/react'
import React from 'react'
import style from '../../../components/dashboard/dashboardNavbar/dashboardnavbar.module.scss'
import searchStyle from './search.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import Portal from '../POTAL/Portal'
import { useState } from 'react'
import { useDashboardSearchMutation } from '../../../pages/Dashboard/Admin/api/dashboardApiSlice'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../feedbacks/Feedback'
import SpinnerComponent from '../skeletonLoader/SpinnerComponent'
import { useRef } from 'react'

const SearchComponent = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState(``)
  const [hoverStyle] = useState(false)
  const [queryResult, setQueryResult] = useState(null)
  const [dashboardSearch, { isLoading }] = useDashboardSearchMutation()
  const allResultRef = useRef()
  const closeRef = useRef()

  function route(type, id) {
    switch (type) {
      case `course`:
        navigate(`/admin/courses`)
        break
      case `class`:
        navigate(`/admin/classes`)
        break
      case `lesson`:
        navigate(`/admin/classes`)
        break
      case `resource`:
        navigate(`/admin/resources/all`)
        break
      case `user`:
        navigate(`/admin/users`)
        break

      default:
        break
    }
    closeRef.current.click()
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearchModal = async (event) => {
    event.preventDefault()
    let res
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`search-modal`)
      )
      if (modal.show()) {
        res = await dashboardSearch(query).unwrap()
      } else {
        modal.show()
        res = await dashboardSearch(query).unwrap()
      }
      console.log(res.data)
      setQueryResult(res.data)
      allResultRef.current.click()
    } catch (err) {
      console.log(err)
      setQuery(``)
    }
  }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = `#b8dff250`
  }
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = `transparent`
  }

  const allResult = queryResult?.allResult?.map((result) => {
    return (
      <div
        key={result.id}
        onClick={() => route(result.type, result.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`d-flex align-items-center  p-3 justify-content-between ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <section className='d-flex align-items-center gap-3'>
          <div className='bg-blue p-2 rounded rounded-2 text-white'>
            <Icon width={`1.5rem`} icon={`ic:baseline-insert-drive-file`} />
          </div>
          <div>
            <p className='fw-semibold'>{result.name}</p>
            <p
              className='fs-sm fw-semibold text-secondary'
              style={{ letterSpacing: `1px` }}
            >
              <span className='fs-xs'>{result.type.toUpperCase()} - </span>
              <span>
                {result.type === `user`
                  ? result.email
                  : `Created by Admin - ${new Date(
                      result.createdAt
                    ).toLocaleDateString('en-CA')}`}
              </span>
            </p>
          </div>
        </section>
      </div>
    )
  })
  const adminResult = queryResult?.result?.admins?.map((admin) => {
    return (
      <div
        key={admin.id}
        onClick={() => route(`user`, admin.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`d-flex align-items-center  p-3 justify-content-between ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <section className='d-flex align-items-center gap-3'>
          <div className='bg-blue p-2 rounded rounded-2 text-white'>
            <Icon width={`1.5rem`} icon={`ic:baseline-insert-drive-file`} />
          </div>
          <div>
            <p className='fw-semibold'>{admin.fullName}</p>
            <p
              className='fs-sm fw-semibold text-secondary'
              style={{ letterSpacing: `1px` }}
            >
              <span className='fs-xs'>EMAIL</span> - {admin.email}
            </p>
          </div>
        </section>
        <div>
          <p className='fs-sm text-blue fw-semibold'>ADMIN</p>
        </div>
      </div>
    )
  })
  const coursesResult = queryResult?.result?.courses?.map((course) => {
    return (
      <div
        key={course.id}
        onClick={() => route(`course`, course.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`d-flex align-items-center gap-3 p-3 mt-1 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`mdi:graduation-cap`} />
        </div>
        <div>
          <p className='fw-semibold text-blue'>{course.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            <span className='fs-xs'>COURSE</span> - Created by Admin on{` `}
            {new Date(course.createdAt).toLocaleDateString('en-CA')}
          </p>
        </div>
      </div>
    )
  })
  const classesResult = queryResult?.result?.classes?.map((singleclass) => {
    return (
      <div
        onClick={() => route(`class`, singleclass.id)}
        key={singleclass.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`d-flex align-items-center gap-3 p-3 mt-1 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`eos-icons:product-classes`} />
        </div>
        <div>
          <p className='fw-semibold text-blue'>{singleclass.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            <span className='fs-xs'>CLASS</span> - Created by Admin on{' '}
            {new Date(singleclass.createdAt).toLocaleDateString('en-CA')}
          </p>
        </div>
      </div>
    )
  })
  const lessonsResult = queryResult?.result?.lessons?.map((lesson) => {
    return (
      <div
        onClick={() => route(`lesson`, lesson.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={lesson.id}
        className={`d-flex align-items-center gap-3 p-3 mt-1 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`eos-icons:product-classes`} />
        </div>
        <div>
          <p className='fw-semibold text-blue'>{lesson.topic}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            <span className='fs-xs'>LESSON</span> - Created by Admin on{' '}
            {new Date(lesson.date).toLocaleDateString('en-CA')}
            {/*this is not the original date created */}
          </p>
        </div>
      </div>
    )
  })
  const resourcesResult = queryResult?.result?.resources?.map((resource) => {
    return (
      <div
        onClick={() => route(`resource`, resource.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={resource.id}
        className={`d-flex align-items-center gap-3 p-3  mt-1 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`ic:baseline-insert-drive-file`} />
        </div>
        <div>
          <p className='fw-semibold'>{resource.name}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            <span className='fs-xs'>RESOURCE</span> - Uploaded by Admin on
            {` `}
            {new Date(resource.createdAt).toLocaleDateString('en-CA')}
          </p>
        </div>
      </div>
    )
  })
  const studentsResult = queryResult?.result?.students?.map((student) => {
    return (
      <div
        onClick={() => route(`user`, student.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={student.id}
        className={`d-flex align-items-center gap-3 p-3 mt-1 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`mdi:account-student`} />
        </div>
        <div>
          <p className='fw-semibold'>{student.fullName}</p>
          <p className='fs-sm fw-semibold text-secondary'>{student.email}</p>
        </div>
      </div>
    )
  })
  const tutorsResult = queryResult?.result?.tutors?.map((tutor) => {
    return (
      <div
        onClick={() => route(`user`, tutor.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={tutor.id}
        className={`d-flex align-items-center  p-3 justify-content-between mt-1 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <section className='d-flex align-items-center gap-3 mt-1'>
          <div className='bg-blue p-2 rounded rounded-2 text-white'>
            <Icon width={`1.5rem`} icon={`ic:baseline-insert-drive-file`} />
          </div>
          <div>
            <p className='fw-semibold'>{tutor.fullName}</p>
            <p
              className='fs-sm fw-semibold text-secondary'
              style={{ letterSpacing: `1px` }}
            >
              <span className='fs-xs'>EMAIL</span> - {tutor.email}
            </p>
          </div>
        </section>
        <div>
          <p className='fs-sm text-blue fw-semibold'>{tutor.status}</p>
        </div>
      </div>
    )
  })

  return (
    <div className={`input-group ${style.searchInput}`}>
      <form
        onSubmit={handleSearchModal}
        className='d-flex align-items-center justify-content-between w-100 rounded'
      >
        <input
          onChange={handleChange}
          type={`search`}
          className='form-control border border-0 text-blue h-100 fw-semibold rounded rounded-0'
          aria-describedby='search'
          placeholder='Search for courses, classes, students and more'
        />
        <button
          type='submit'
          className={`input-group-text bg-white border border-0 text-secondary h-100 rounded rounded-0`}
          id='searchInputBlock'
        >
          <Icon width={`1.2rem`} icon={`ri:search-line`} />
        </button>
      </form>

      <Portal wrapperId='react-portal-modal-container'>
        <div
          className='modal fade'
          //   data-bs-backdrop='static'
          id='search-modal'
          tabIndex='-1'
          aria-labelledby='search-modal-label'
          aria-hidden='true'
        >
          <button
            type='button'
            className='btn-close'
            style={{ visibility: `hidden` }}
            ref={closeRef}
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-body px-0'>
                <div className='px-3'>
                  <form
                    onSubmit={handleSearchModal}
                    className='d-flex align-items-center justify-content-between w-100'
                  >
                    <input
                      defaultValue={query}
                      onChange={handleChange}
                      type={`search`}
                      className='form-control border border-0 text-blue h-100 fw-semibold'
                      aria-describedby='search'
                      placeholder='Search for courses, classes, students and more'
                    />
                    <button
                      type='submit'
                      className={`input-group-text bg-white border border-0 text-secondary h-100`}
                      id='searchModalBlock'
                    >
                      <Icon width={`1.2rem`} icon={`ri:search-line`} />
                    </button>
                  </form>
                  {/* search tab */}
                  <ul className={`nav ${searchStyle.nav} search-tab gap-5`}>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        ref={allResultRef}
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#allResult-search'
                      >
                        All Results
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.allResult?.length || 0}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#courses-search'
                      >
                        Courses
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.result?.courses?.length || 0}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#classes-search'
                      >
                        Classes
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.result?.classes?.length +
                            queryResult?.result?.lessons?.length || 0}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#resources-search'
                      >
                        Resources
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.result?.resources?.length || 0}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#users-search'
                      >
                        Users
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.result?.tutors?.length +
                            queryResult?.result?.students?.length +
                            queryResult?.result?.admins?.length || 0}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className='tab-content my-10' id='tabContent'>
                    <div
                      className='tab-pane fade'
                      id='allResult-search'
                      aria-labelledby='class-tab-search'
                    >
                      {isLoading ? (
                        <SpinnerComponent />
                      ) : allResult?.length ? (
                        allResult
                      ) : (
                        <Feedback message={`No Result Found`} />
                      )}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='courses-search'
                      aria-labelledby='class-tab-search'
                    >
                      {isLoading ? (
                        <SpinnerComponent />
                      ) : coursesResult?.length ? (
                        coursesResult
                      ) : (
                        <Feedback message={`No Result Found`} />
                      )}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='classes-search'
                      aria-labelledby='class-tab-search'
                    >
                      {classesResult}
                      {lessonsResult}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='resources-search'
                      aria-labelledby='class-tab-search'
                    >
                      {isLoading ? (
                        <SpinnerComponent />
                      ) : resourcesResult?.length ? (
                        resourcesResult
                      ) : (
                        <Feedback message={`No Result Found`} />
                      )}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='users-search'
                      aria-labelledby='class-tab-search'
                    >
                      {studentsResult}
                      {tutorsResult}
                      {adminResult}
                      {/* {studentsResult?.length ? studentsResult : <Feedback />}
                      {tutorsResult?.length ? tutorsResult : <Feedback />}
                      {adminResult?.length ? adminResult : <Feedback />} */}
                    </div>
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
