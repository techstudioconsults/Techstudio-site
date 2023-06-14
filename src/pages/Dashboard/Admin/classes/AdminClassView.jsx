/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { selectClassDetailOpen } from '../../../../app/api/appSlice'
import { AvatarDropdown, SearchComponent } from '../../../../components'
import Feedback from '../../../../components/global/feedbacks/Feedback'
import SpinnerComponent from '../../../../components/global/skeletonLoader/SpinnerComponent'
import TeacherClassNotificationView from '../../Teacher/components/teacherClassNotificationView/TeacherClassNotificationView'
import TrackClassesTab from '../components/tab/trackClassesTab/TrackClassesTab'
import { useViewAllCoursesMutation } from '../courses/api/coursesApiSlice'
import { selectCourses } from '../courses/api/coursesSlice'

import 'react-loading-skeleton/dist/skeleton.css'
import style from './adminClasses.module.scss' //using courses view layout !important

const AdminClassView = () => {
  const [viewAllCourses, courseArgs] = useViewAllCoursesMutation()
  const courses = useSelector(selectCourses)
  const { courseID } = useParams()
  const classDetailOpen = useSelector(selectClassDetailOpen)

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const feedback = courses.length ? (
    <TrackClassesTab courses={courses} />
  ) : (
    <Feedback
      route={`/admin/courses/create`}
      btnName={`Create Course`}
      message={`No Class Found`}
    />
  )

  return (
    <section className={`${style.classView}  h-100`}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Classes</h4>
          <div className='d-flex align-items-center gap-3'>
            {/* make this search input a stand alone component */}
            <div
              className={`input-group border rounded overflow-hidden ${style.searchInput}`}
            >
              <SearchComponent />
            </div>
            <div>
              <Link to={`/admin/class/${courseID}/create`}>
                <button
                  style={{ height: `2.25rem`, width: `9.938rem` }}
                  className='btn btn-primary fs-sm'
                >
                  Create class
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <div className='mt-5 d-flex flex-column gap-5'>
            {courseArgs.isLoading ? <SpinnerComponent /> : feedback}
          </div>
        </div>
      </div>
      <div hidden={classDetailOpen} className={`${style.notification}`}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
        <TeacherClassNotificationView mobile={false} />
      </div>
    </section>
  )
}

export default AdminClassView
