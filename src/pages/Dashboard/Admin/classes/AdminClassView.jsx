/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AvatarDropdown } from '../../../../components'
import style from './adminClasses.module.scss' //using courses view layout !important
import TrackClassesTab from '../components/tab/trackClassesTab/TrackClassesTab'
import 'react-loading-skeleton/dist/skeleton.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import TeacherClassNotificationView from '../../Teacher/components/teacherClassNotificationView/TeacherClassNotificationView'
import { useViewAllCoursesMutation } from '../courses/api/coursesApiSlice'
import { useCallback, useEffect, useState } from 'react'
import { selectCourses } from '../courses/api/coursesSlice'
import { useSelector } from 'react-redux'

const AdminClassView = () => {
  const [isShowDetails, setShowDetails] = useState(false)
  const [viewAllCourses] = useViewAllCoursesMutation()

  const courses = useSelector(selectCourses)

  const showDetailsBox = () => {
    setShowDetails(true)
  }

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course.id}>
        <Link
          to={`/admin/class/${course.id}/create`}
          state={{ tutors: course.tutors }}
        >
          <span className='fs-sm'>{course.title}</span>
        </Link>
      </li>
    )
  })

  return (
    <section className={style.classView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Classes</h4>
          <div className='d-flex align-items-center gap-3'>
            {/* make this search input a stand alone component */}
            <div className={`input-group border rounded ${style.searchInput}`}>
              <input
                type={`search`}
                className='form-control border border-0 text-secondary h-100'
                aria-describedby='search'
                placeholder='Search for courses, classes, students and more'
              />
              <div
                className={`input-group-text bg-white border border-0 text-secondary h-100`}
                id='passwordHelpBlock'
              >
                <Icon width={`1.2rem`} icon={`ri:search-line`} />
              </div>
            </div>
            <div>
              <div className='btn-group'>
                <button
                  style={{ height: `2.25rem`, width: `9.938rem` }}
                  className='btn btn-primary fs-sm dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  data-bs-offset='-140,10'
                  aria-expanded='true'
                >
                  Create class
                </button>
                <ul className='dropdown-menu p-3'>{coursesNav}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <div className='mt-5 d-flex flex-column gap-5'>
            <TrackClassesTab courses={courses} />
          </div>
        </div>
      </div>
      <div className={`${style.notification}`}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
        <TeacherClassNotificationView mobile={false} />
      </div>
    </section>
  )
}

export default AdminClassView
