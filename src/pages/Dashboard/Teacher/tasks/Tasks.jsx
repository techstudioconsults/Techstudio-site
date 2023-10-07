/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { AvatarDropdown, SearchComponent } from '../../../../components'
import TeacherClassNotificationView from '../components/teacherClassNotificationView/TeacherClassNotificationView'

import { TaskCardView } from './component/taskCard/TaskCardView'

import 'react-loading-skeleton/dist/skeleton.css'
import style from './tasks.module.scss' //using courses view layout !important

const TutorClassView = () => {
  // const classDetailOpen = useSelector(selectClassDetailOpen)
  const [title, setTitle] = useState(`Tasks`)
  const location = useLocation()

  console.log(location)

  useEffect(() => {
    if (location.pathname.includes(`class`)) {
      setTitle(`Classes`)
    } else if (location.pathname.includes(`lesson`)) {
      setTitle(`Lessons`)
    }
  }, [])

  return (
    <section className={`${style.classView}  h-100`}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>{title}</h4>
          <div className='d-flex align-items-center gap-3'>
            <div
              className={`input-group border rounded overflow-hidden ${style.searchInput}`}
            >
              <SearchComponent />
            </div>
            <Link to={`/tutor/class/lesson/create`}>
              <button className='btn btn-primary fs-sm w-100 px-10'>
                Create Task
              </button>
            </Link>
          </div>
        </div>
        <section className='w-50 mt-10'>
          <div className='input-select mt-3'>
            <select
              className='form-select form-select-sm'
              aria-label='Default select example'
            >
              <option selected> Javascript Fullstack January 2023</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </section>
        <div className='mt-10'>
          <div className='mt-5 d-flex flex-column gap-4'>
            <p className='fs-xl fw-bold'>Recent</p>
            <TaskCardView />
          </div>
          <div className='mt-5 d-flex flex-column gap-4'>
            <p className='fs-xl fw-bold'>Older</p>
            <TaskCardView />
            <TaskCardView />
            <TaskCardView />
            <TaskCardView />
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
  )
}

export default TutorClassView
