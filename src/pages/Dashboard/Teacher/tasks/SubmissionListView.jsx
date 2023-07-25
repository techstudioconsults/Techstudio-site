/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { AvatarDropdown, SearchComponent } from '../../../../components'
import AddPaymentModal from '../../Admin/Payment/components/AddPaymentModal'
import CreateTaskModal from '../components/modal/CreateTaskModal'
import TeacherClassNotificationView from '../components/teacherClassNotificationView/TeacherClassNotificationView'

import Table from './component/table/Table'
import { TaskCardView } from './component/taskCard/TaskCardView'

import 'react-loading-skeleton/dist/skeleton.css'
import style from './taskSubmission.module.scss' //using courses view layout !important

const SubmissionListView = () => {
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
            <CreateTaskModal />
          </div>
          <AvatarDropdown />
        </div>
        <section className='w-25 mt-10'>
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
          <Table />
        </div>
      </div>
    </section>
  )
}

export default SubmissionListView
