import React, { useEffect, useCallback } from 'react'
import style from './style/paymentClasses.module.scss'
import { Icon } from '@iconify/react'
import coinImg from '../../../../assets/images/amico.png'
import { useViewAllCoursesMutation } from '../courses/api/coursesApiSlice'
import { useGetClassByCourseIDMutation } from '../classes/api/classApiSlice'
import { useSelector } from 'react-redux'
import { selectCourses } from '../courses/api/coursesSlice'
import { useParams } from 'react-router-dom'
import Feedback from '../../../../components/global/feedbacks/Feedback'
import { AvatarDropdown } from '../../../../components'
import PaymentTab from './components/PaymentTab'

const AdminPaymentView = () => {
  const [viewAllCourses] = useViewAllCoursesMutation()
  const [getClassesByCourseID] = useGetClassByCourseIDMutation()
  const courses = useSelector(selectCourses)
  const { courseID } = useParams()

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
    await getClassesByCourseID(courseID).unwrap()
  }, [courseID, getClassesByCourseID, viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const feedback = courses.length ? (
    <PaymentTab courses={courses} />
  ) : (
    <Feedback
      route={`/admin/courses/create`}
      btnName={`Create Course`}
      message={`No Course has been created yet!, create a course before you can create a class`}
    />
  )
  return (
    <section>
      <section className={style.classView}>
        <div className={style.dashboardDisplay}>
          <div className={style.header}>
            <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Payment</h4>
            <div className='d-flex align-items-center gap-4'>
              {/* make this search input a stand alone component */}
              <div
                className={`input-group border rounded ${style.searchInput}`}
              >
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
            </div>
          </div>
          <div className='mt-10'>
            <div className='mt-5 d-flex flex-column gap-5'>
              <div className='mt-4 d-flex justify-content-end align-items-center gap-2 w-100'>
                <div>
                  <select
                    className='form-select text-dark fs-sm'
                    aria-label='Default select example'
                    disabled
                  >
                    <option selected>15 Feb, 2023 - 22 Feb, 2023</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
                <div>
                  <select
                    className='form-select text-dark fs-sm'
                    aria-label='Default select example'
                    disabled
                  >
                    <option selected>All Courses</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
                <div>
                  <div>
                    <select
                      className='form-select text-dark fs-sm'
                      aria-label='Default select example'
                      disabled
                    >
                      <option className='fs-5' selected>
                        <span className='text-danger'>January, 2023</span>
                      </option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 ms-1 row d-flex h-50 justfify-content-between align-items-center gap-5 w-100'>
              <div
                className={[
                  style.test,
                  `one border-info border-2 h-100  col p-5`,
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
                  style.test,
                  `one border-info border-2 h-100  col p-5`,
                ].join(' ')}
              >
                <div className='col mr-2 d-flex justify-content-between align-items-center gap-5 p-3'>
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
            {/* payment tab */}
            <div className='mt-10'>{feedback}</div>
          </div>
        </div>
        <div className={`${style.notification}`}>
          <div className='d-flex justify-content-end'>
            <AvatarDropdown />
          </div>
          {/* <TeacherClassNotificationView mobile={false} /> */}
        </div>
      </section>
    </section>
  )
}

export default AdminPaymentView
