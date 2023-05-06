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
  const [hoverStyle, setHoverStyle] = useState(false)
  const [queryResult, setQueryResult] = useState(``)
  const [dashboardSearch] = useDashboardSearchMutation()

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
      setQueryResult(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = `#b8dff250`
  }
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = `transparent`
  }

  const adminResult = queryResult?.admins?.map((admin) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={admin.id}
        className={`d-flex align-items-center gap-3 px-3 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`ic:baseline-insert-drive-file`} />
        </div>
        <div>
          <p className='fw-semibold'>{admin.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            Resources - Uploaded by Admin on {admin.createdAt}
          </p>
        </div>
      </div>
    )
  })
  const classesResult = queryResult?.classes?.map((singleclass) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={singleclass.id}
        className={`d-flex align-items-center gap-3 px-3 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`eos-icons:product-classes`} />
        </div>
        <div>
          <p className='fw-semibold'>{singleclass.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            Classes - Created by Admin on {singleclass.createdAt}
          </p>
        </div>
      </div>
    )
  })
  const coursesResult = queryResult?.courses?.map((course) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={course.id}
        className={`d-flex align-items-center gap-3 px-3 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`mdi:graduation-cap`} />
        </div>
        <div>
          <p className='fw-semibold'>{course.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            Courses - Created by Admin on {course.createdAt}
          </p>
        </div>
      </div>
    )
  })
  const lessonsResult = queryResult?.lessons?.map((lesson) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={lesson.id}
        className={`d-flex align-items-center gap-3 px-3 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`eos-icons:product-classes`} />
        </div>
        <div>
          <p className='fw-semibold'>{lesson.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            Lesson - Created by Admin on {lesson.createdAt}
          </p>
        </div>
      </div>
    )
  })
  const resourcesResult = queryResult?.resources?.map((resource) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={resource.id}
        className={`d-flex align-items-center gap-3 px-3 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`ic:baseline-insert-drive-file`} />
        </div>
        <div>
          <p className='fw-semibold'>{resource.title}</p>
          <p className='fs-sm fw-semibold text-secondary'>
            Resources - Uploaded by Admin on {resource.createdAt}
          </p>
        </div>
      </div>
    )
  })
  const studentsResult = queryResult?.students?.map((student) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={student.id}
        className={`d-flex align-items-center gap-3 px-3 ${
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
  const tutorsResult = queryResult?.tutors?.map((tutor) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={tutor.id}
        className={`d-flex align-items-center gap-3 px-3 ${
          hoverStyle ? `bg-info` : null
        }`}
      >
        <div className='bg-blue p-2 rounded rounded-2 text-white'>
          <Icon width={`1.5rem`} icon={`la:chalkboard-teacher`} />
        </div>
        <div>
          <p className='fw-semibold'>{tutor.fullName}</p>
          <p className='fs-sm fw-semibold text-secondary'>{tutor.status}</p>
        </div>
      </div>
    )
  })

  return (
    <div className={`input-group ${style.searchInput}`}>
      <form
        onSubmit={handleSearchModal}
        className='d-flex align-items-center justify-content-between w-100'
      >
        <input
          onChange={handleChange}
          type={`search`}
          className='form-control border border-0 text-blue h-100 fw-semibold'
          aria-describedby='search'
          placeholder='Search for courses, classes, students and more'
        />
        <button
          type='submit'
          className={`input-group-text bg-white border border-0 text-secondary h-100`}
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
                        className='nav-link active text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#allResult'
                        id={1}
                      >
                        All Results{' '}
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.admins?.length}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#courses'
                        id={2}
                      >
                        Courses{' '}
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.courses?.length}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#classes'
                        id={3}
                      >
                        Classes{' '}
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.classes?.length +
                            queryResult?.lessons?.length}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#resources'
                        id={1}
                      >
                        Resources
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.resources?.length}
                        </span>
                      </a>
                    </li>
                    <li className='nav-item d-flex align-items-center '>
                      <a
                        className='nav-link text-secondary fs-sm d-flex align-items-center gap-2'
                        data-bs-toggle='tab'
                        href='#users'
                        id={1}
                      >
                        Users
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {queryResult?.tutors?.length +
                            queryResult?.students?.length}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='tab-content my-10' id='tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='allResult'
                    aria-labelledby='allResult-tab'
                  >
                    {queryResult?.admins?.length ? (
                      adminResult
                    ) : (
                      <Feedback
                        fontSize={`sm`}
                        // btnName={`Add Resource`}
                        message={`No admin found`}
                      />
                    )}
                  </div>
                  <div
                    className='tab-pane fade d-flex flex-column gap-3'
                    id='courses'
                    aria-labelledby='allResult-tab'
                  >
                    {queryResult?.courses?.length ? (
                      coursesResult
                    ) : (
                      <Feedback
                        fontSize={`sm`}
                        // btnName={`Add Resource`}
                        message={`No course found`}
                      />
                    )}
                  </div>
                  <div
                    className='tab-pane fade'
                    id='classes'
                    aria-labelledby='allResult-tab'
                  >
                    {queryResult?.classes?.length ||
                    queryResult?.lessons?.length ? (
                      classesResult || lessonsResult
                    ) : (
                      <Feedback
                        fontSize={`sm`}
                        // btnName={`Add Resource`}
                        message={`No class or lesson found`}
                      />
                    )}
                  </div>
                  <div
                    className='tab-pane fade'
                    id='resources'
                    aria-labelledby='allResult-tab'
                  >
                    {queryResult?.resources?.length ? (
                      resourcesResult
                    ) : (
                      <Feedback
                        fontSize={`sm`}
                        // btnName={`Add Resource`}
                        message={`No resource found`}
                      />
                    )}
                  </div>
                  <div
                    className='tab-pane fade'
                    id='users'
                    aria-labelledby='allResult-tab'
                  >
                    {queryResult?.tutors?.length ||
                    queryResult?.students?.length ? (
                      tutorsResult || studentsResult
                    ) : (
                      <Feedback
                        fontSize={`sm`}
                        // btnName={`Add Resource`}
                        message={`No user found`}
                      />
                    )}
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
