/* Code generated with AutoHTML Plugin for Figma */
import styles from './recentTask.module.scss'

export const RecentTask = ({ ...props }) => {
  return (
    <>
      <div className='frame-174 p-5 rounded rounded-xl'>
        <div className='frame-165 d-flex justify-content-between align-items-center'>
          <div className='recent-tasks fw-semibold fs-xl'>Recent Tasks</div>

          <div className='group-11'>
            <div className='line-7'></div>

            <div className='view-all fs-sm text-primary fw-semibold'>
              View All
            </div>
          </div>
        </div>

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
      </div>
      {/* ================================ */}
      <div className={styles['frame-40346']}>
        <div className={styles['frame-164']}>
          <div className={styles['frame-40333']}>
            <div className={styles['frame-40332']}>
              <div className={styles['frame-168']}>
                <div className={styles['name']}>Name</div>
              </div>

              <div className={styles['assignment']}>Assignment</div>
            </div>

            <div className={styles['time']}>Time</div>
          </div>
        </div>

        <div className={styles['frame-40318']}>
          <div className={styles['group-115']}>
            <div className='d-flex gap-5 fs-sm px-8'>
              <div>Barry Allen</div>
              <div>Hi-fi Wireframes</div>
              <div className='text-danger fw-semibold'>19/06/2023</div>
              <div className='text-danger fw-semibold'>12:00AM</div>
            </div>
            <hr />
            <div className='d-flex gap-5 fs-sm px-8'>
              <div>Barry Allen</div>
              <div>Hi-fi Wireframes</div>
              <div className='text-danger fw-semibold'>19/06/2023</div>
              <div className='text-danger fw-semibold'>12:00AM</div>
            </div>
            <hr />
            <div className='d-flex gap-5 fs-sm px-8'>
              <div>Barry Allen</div>
              <div>Hi-fi Wireframes</div>
              <div className='text-danger fw-semibold'>19/06/2023</div>
              <div className='text-danger fw-semibold'>12:00AM</div>
            </div>
            <hr />
            <div className='d-flex gap-5 fs-sm px-8'>
              <div>Barry Allen</div>
              <div>Hi-fi Wireframes</div>
              <div className='text-danger fw-semibold'>19/06/2023</div>
              <div className='text-danger fw-semibold'>12:00AM</div>
            </div>
            <hr />
            <div className='d-flex gap-5 fs-sm px-8'>
              <div>Barry Allen</div>
              <div>Hi-fi Wireframes</div>
              <div className='text-danger fw-semibold'>19/06/2023</div>
              <div className='text-danger fw-semibold'>12:00AM</div>
            </div>
            <hr />
            <div className='d-flex gap-5 fs-sm px-8'>
              <div>Barry Allen</div>
              <div>Hi-fi Wireframes</div>
              <div className='text-danger fw-semibold'>19/06/2023</div>
              <div className='text-danger fw-semibold'>12:00AM</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Link, Outlet, useLocation } from 'react-router-dom'

// import { AvatarDropdown, SearchComponent } from '../../../../../components'
// import TeacherClassNotificationView from '../teacherClassNotificationView/TeacherClassNotificationView'

// import 'react-loading-skeleton/dist/skeleton.css'
// import style from './recentTask.module.scss' //using courses view layout !important

// const TutorClassView = () => {
//   const [title, setTitle] = useState(`Classess`)
//   const location = useLocation()

//   console.log(location)

//   useEffect(() => {
//     if (location.pathname.includes(`class`)) {
//       setTitle(`Classes`)
//     } else if (location.pathname.includes(`lesson`)) {
//       setTitle(`Lessons`)
//     }
//   }, [])

//   return (
//     <section className={`${style.classView}  h-100`}>
//       <div className={style.dashboardDisplay}>
//         <div className={style.header}>
//           <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>{title}</h4>
//           <div className='d-flex align-items-center gap-3'>
//             <div
//               className={`input-group border rounded overflow-hidden ${style.searchInput}`}
//             >
//               <SearchComponent />
//             </div>
//             <div>
//               <Link to={`/tutor/class/lesson/create`}>
//                 <button className='btn btn-primary fs-sm'>
//                   Add new Lesson
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className='mt-10'>
//           <div className='mt-5 d-flex flex-column gap-5'>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//       <div className={`${style.notification}`}>
//         <div className='d-flex justify-content-end'>
//           <AvatarDropdown />
//         </div>
//         <TeacherClassNotificationView mobile={false} />
//       </div>
//     </section>
//   )
// }

// export default TutorClassView
