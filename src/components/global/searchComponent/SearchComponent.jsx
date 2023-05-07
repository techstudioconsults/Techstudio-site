import { Icon } from '@iconify/react'
import React from 'react'
import style from '../../../components/dashboard/dashboardNavbar/dashboardnavbar.module.scss'
import searchStyle from './search.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import Portal from '../POTAL/Portal'
import Feedback from '../feedbacks/Feedback'
import { useState } from 'react'
import { useDashboardSearchMutation } from '../../../pages/Dashboard/Admin/api/dashboardApiSlice'
import { Link } from 'react-router-dom'

const SearchComponent = () => {
  const [query, setQuery] = useState(``)
  const [hoverStyle, setHoverStyle] = useState(false)
  const [queryResult, setQueryResult] = useState(null)
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
      <Link className='d-block' key={admin.id} to={`/admin/users`}>
        <div
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
                Email - {admin.email}
              </p>
            </div>
          </section>
          <div>
            <p className='fs-sm text-blue fw-semibold'>ADMIN</p>
          </div>
        </div>
      </Link>
    )
  })
  const coursesResult = queryResult?.courses?.map((course) => {
    return (
      <Link className='d-block' key={course.id} to={`/admin/courses`}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={course.id}
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
              Courses - Created by Admin on {course.createdAt}
            </p>
          </div>
        </div>
      </Link>
    )
  })
  const classesResult = queryResult?.classes?.map((singleclass) => {
    return (
      <Link className='d-block' key={singleclass.id} to={`/admin/classes`}>
        <div
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
              Classes - Created by Admin on {singleclass.createdAt}
            </p>
          </div>
        </div>
      </Link>
    )
  })
  const lessonsResult = queryResult?.lessons?.map((lesson) => {
    return (
      <Link className='d-block' key={lesson.id} to={`/admin/classes`}>
        <div
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
              Lesson - Created by Admin on {lesson.date}
              {/*this is not the original date created */}
            </p>
          </div>
        </div>
      </Link>
    )
  })
  const resourcesResult = queryResult?.resources?.map((resource) => {
    return (
      <Link className='d-block' key={resource.id} to={`/admin/resources`}>
        <div
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
            <p className='fw-semibold'>{resource.title}</p>
            <p className='fs-sm fw-semibold text-secondary'>
              Resources - Uploaded by Admin on {resource.createdAt}
            </p>
          </div>
        </div>
      </Link>
    )
  })
  const studentsResult = queryResult?.students?.map((student) => {
    return (
      <Link key={student.id} to={`/admin/users`}>
        <div
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
      </Link>
    )
  })
  const tutorsResult = queryResult?.tutors?.map((tutor) => {
    return (
      <Link className='d-block' key={tutor.id} to={`/admin/users`}>
        <div
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
                Email - {tutor.email}
              </p>
            </div>
          </section>
          <div>
            <p className='fs-sm text-blue fw-semibold'>{tutor.status}</p>
          </div>
        </div>
      </Link>
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
                        href='#allResult-search'
                      >
                        All Results
                        <span
                          className={`rounded-circle fs-xs ${searchStyle.tag}`}
                        >
                          {0}
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
                          {queryResult?.courses?.length || 0}
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
                          {queryResult?.classes?.length +
                            queryResult?.lessons?.length || 0}
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
                          {queryResult?.resources?.length || 0}
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
                          {queryResult?.tutors?.length +
                            queryResult?.students?.length +
                            queryResult?.admins?.length || 0}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className='tab-content my-10' id='tabContent'>
                    <div
                      className='tab-pane fade'
                      id='courses-search'
                      aria-labelledby='class-tab-search'
                    >
                      {coursesResult}
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
                      {resourcesResult}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='users-search'
                      aria-labelledby='class-tab-search'
                    >
                      {studentsResult}
                      {tutorsResult}
                      {adminResult}
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
