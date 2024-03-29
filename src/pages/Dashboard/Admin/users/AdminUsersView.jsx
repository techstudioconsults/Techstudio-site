/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import TeacherClassNotificationView from '../../Teacher/components/teacherClassNotificationView/TeacherClassNotificationView'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

import { AvatarDropdown, Portal, SearchComponent } from '../../../../components'
import { useViewAllCoursesMutation } from '../courses/api/coursesApiSlice'
import { selectCourses } from '../courses/api/coursesSlice'

import UsersTab from './userCourseTab/UsersTab'
import UserRegistrationFormModal from './userRegistrationForms/UserRegistrationFormModal'

import 'react-loading-skeleton/dist/skeleton.css'
import style from './adminUsers.module.scss' //using courses view layout !important

const AdminUsersView = () => {
  const [viewAllCourses] = useViewAllCoursesMutation()
  const courses = useSelector(selectCourses)

  const getCourses = useCallback(async () => {
    await viewAllCourses().unwrap()
  }, [viewAllCourses])

  useEffect(() => {
    getCourses()
  }, [getCourses])

  const showFormModal = () => {
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('user-form-modal')
    )
    modal.show()
  }

  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <UserRegistrationFormModal />
      </Portal>
      <section className={style.usersView}>
        <div className={style.dashboardDisplay}>
          <div className={style.header}>
            <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>Users</h4>
            <div className='d-flex align-items-center gap-3'>
              {/* make this search input a stand alone component */}
              <div
                className={`input-group border rounded overflow-hidden ${style.searchInput}`}
              >
                <SearchComponent />
              </div>
              <div>
                <div>
                  <button
                    onClick={showFormModal}
                    style={{ height: `2.25rem`, width: `9.938rem` }}
                    className='btn btn-primary fs-sm dropdown-toggle'
                    type='button'
                  >
                    Create New User
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='mt-5 d-flex flex-column gap-5'>
              <UsersTab courses={courses} />
            </div>
          </div>
        </div>
        <div className={`${style.notification}`}>
          <div className='d-flex justify-content-end'>
            <AvatarDropdown />
          </div>
          {/* <TeacherClassNotificationView mobile={false} /> */}
        </div>
      </section>
    </>
  )
}

export default AdminUsersView
