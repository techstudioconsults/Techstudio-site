/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AvatarDropdown } from '../../../../components'
import style from './scss/adminPayment.module.scss' //using courses view layout !important
import TrackClassesTab from '../components/tab/trackClassesTab/TrackClassesTab'
import 'react-loading-skeleton/dist/skeleton.css'
import { Icon } from '@iconify/react'
import { Link, useParams } from 'react-router-dom'
import coinImg from '../../../../assets/images/amico.png'
import TeacherClassNotificationView from '../../Teacher/components/teacherClassNotificationView/TeacherClassNotificationView'
import { useViewAllCoursesMutation } from '../courses/api/coursesApiSlice'
import { useCallback, useEffect } from 'react'
import { selectCourses } from '../courses/api/coursesSlice'
import { useSelector } from 'react-redux'
import Feedback from '../../../../components/global/feedbacks/Feedback'
import SpinnerComponent from '../../../../components/global/skeletonLoader/SpinnerComponent'

const AdminPaymentView = () => {
  const [viewAllCourses, courseArgs] = useViewAllCoursesMutation()
  const courses = useSelector(selectCourses)
  const { courseID } = useParams()

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
      // route={`/admin/class/${courseID}/create`}
      route={`/admin/courses/create`}
      btnName={`Create Course`}
      // btnName={`Create Class`}
      message={`No Course has been created yet!, create a course before you can create a class`}
    />
  )

  return (
    <section className={style.paymentView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Payment</h4>
          <div className='d-flex align-items-center gap-3'>
            {/* make this search input a stand alone component */}
            <div className={`input-group border rounded ${style.searchInput}`}>
              <input
                disabled
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
          </div>
        </div>
        <div className='mt-10'>
          <div className='mt-5 d-flex flex-column gap-5'>
            <section className='d-flex justify-content-end gap-5'>
              <div>
                <select
                  className='form-select fs-sm'
                  aria-label='Default select example'
                >
                  <option selected>15 Feb, 2023 - 22 Feb, 2023</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div>
                <select
                  className='form-select fs-sm'
                  aria-label='Default select example'
                >
                  <option selected>All Courses</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div>
                <select
                  className='form-select fs-sm'
                  aria-label='Default select example'
                >
                  <option selected>January 2023</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
            </section>
            <section>
              <div className='mt-5 d-flex h-50 justfify-content-between align-items-center gap-5'>
                <div
                  className={[
                    `one border-info border-2 h-100 col p-5 bg-light-blue-ii`,
                  ].join(' ')}
                >
                  <div className='col mr-2 d-flex justify-content-between align-items-center gap-5 p-3 '>
                    <div>
                      <div className='text-xs font-weight-bold text-primary mb-2'>
                        Total Revenue
                      </div>
                      <div className='h4 mb-0 font-weight-bold text-gray-800'>
                        NGN 1,350,234
                      </div>
                    </div>
                    <div>
                      <img src={coinImg} alt='coin' />
                    </div>
                  </div>
                </div>
                <div
                  className={[
                    `one border-info border-2 h-100  col p-5 bg-light-blue-ii`,
                  ].join(' ')}
                >
                  <div className='col mr-2 d-flex justify-content-between align-items-center gap-5 p-3 '>
                    <div>
                      <div className='text-xs  text-primary mb-2'>
                        Total Outstanding
                      </div>
                      <div className='h4 mb-0 text-dark'>NGN 1,350,234</div>
                    </div>
                    <div>
                      <img src={coinImg} alt='coin' />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {courseArgs.isLoading ? <SpinnerComponent /> : feedback}
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

export default AdminPaymentView
