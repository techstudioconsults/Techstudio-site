/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AddResource, AvatarDropdown, Portal } from '../../../../components'
import style from './adminResource.module.scss' //using courses view layout !important
import 'react-loading-skeleton/dist/skeleton.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import TeacherClassNotificationView from '../../Teacher/components/teacherClassNotificationView/TeacherClassNotificationView'
import { useViewAllCoursesMutation } from '../courses/api/coursesApiSlice'
import { useCallback, useEffect } from 'react'
import { selectCourses } from '../courses/api/coursesSlice'
import { useSelector } from 'react-redux'
import Feedback from '../../../../components/global/feedbacks/Feedback'
import ResourceCourseTab from './resourceCourseTab/ResourceCourseTab'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useGetAllResourcesMutation } from './api/resourceApiSlice'
import { selectAllResources } from './api/resourceSlice'
import SpinnerComponent from '../../../../components/global/skeletonLoader/SpinnerComponent'

const AdminResourcesView = () => {
  const [getAllResource, resourceArgs] = useGetAllResourcesMutation()

  const resources = useSelector(selectAllResources)

  const getResources = useCallback(async () => {
    await getAllResource().unwrap()
  }, [getAllResource])

  const addResource = (event) => {
    event.stopPropagation()
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById('add-resource')
    )
    modal.show()
  }

  useEffect(() => {
    getResources()
  }, [getResources])

  const feedback = resources.length ? (
    <ResourceCourseTab resources={resources} />
  ) : (
    <Feedback message={`Create a course in order to create a class`} />
  )

  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <AddResource />
      </Portal>
      <section className={style.resourceView}>
        <div className={style.dashboardDisplay}>
          <div className={style.header}>
            <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>
              Resources
            </h4>
            <div className='d-flex align-items-center gap-3'>
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
              <div>
                <div>
                  <button
                    onClick={addResource}
                    style={{ height: `2.25rem`, width: `9.938rem` }}
                    className='btn btn-primary fs-sm dropdown-toggle'
                    type='button'
                  >
                    Add New Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='mt-5 d-flex flex-column gap-5'>
              {resourceArgs.isLoading ? <SpinnerComponent /> : feedback}
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
    </>
  )
}

export default AdminResourcesView
