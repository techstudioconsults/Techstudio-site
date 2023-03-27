import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../avatar/Avatar'
import style from './adminClassDisplay.module.scss'

const AdminClassDisplayCard = () => {
  return (
    <>
      {/* <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            title: `${`Are you sure you want to delete this course?`}`,
            desc: `${title} Course has successfully being deleted. Kindly click continue to exit this page.`,
            courseID: id,
          }}
        />
      </Portal> */}
      <button
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onClick={handleClick}
        className={`btn btn-lg h-100 d-flex justify-content-between align-items-start text-dark border p-0 py-5 ps-2 rounded-0 ${style.courseList}`}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-3'>
              <div className={style.tableHeadTitle}>
                <p className='fw-bold fs-sm text-start'>
                  Javascript Fullstack January 2023
                </p>
                {/* <p className='fs-xs text-start text-danger'>{id}</p> */}
              </div>
            </div>
            <div className='col-3'>
              <div className={`${style.tableHead} h-100 text-end`}>
                <p className='fs-sm text-muted fw-semibold'>
                  Start Date: <span className='text-primary'>Jan 18, 2023</span>
                </p>
                <p className='fs-sm text-muted fw-semibold'>
                  End Date: <span className='text-danger'>Jan 18, 2023</span>
                </p>
              </div>
            </div>
            <div className='col-2'>
              <div
                className={`${style.tableHead} h-100 fs-sm fw-semibold text-muted text-end`}
              >
                <span>Wednesday</span>
              </div>
            </div>
            <div className='col-3'>
              <div
                className={`${style.tableHead} fs-sm d-flex align-items-center justify-content-end gap-2`}
              >
                <div className={`${style.avatarWrapper} bg-primary `}>
                  <img
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`}
                    alt='img'
                    className='cc-img-fluid'
                  />
                </div>
                <span className='fw-semibold text-muted'>Ibori James</span>
              </div>
            </div>
            <div className='col-1'>
              <div
                // hidden={showStatus}
                className='dropdown'
                // onClick={(event) => event.stopPropagation()}
              >
                <div
                  className='dropdown-toggle p-0'
                  data-bs-toggle='dropdown'
                  data-bs-offset='-140,10'
                  aria-expanded='false'
                >
                  <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
                </div>
                <ul className={`dropdown-menu`}>
                  <div className='d-flex align-items-center px-3'>
                    {/* <Link to={`/admin/courses/${id}/edit`} state={{ course }}> */}
                    <Link to={`/admin/class/edit`}>
                      <Icon
                        width={`1.1rem`}
                        icon={`material-symbols:edit`}
                        className='me-3'
                      />
                      <span>Edit class</span>
                    </Link>
                  </div>
                  <hr className='my-2' />
                  <div
                    // onClick={handleDeleteModal}
                    className='d-flex align-items-center text-danger px-3'
                  >
                    <Icon
                      width={`1.1rem`}
                      icon={`material-symbols:delete-outline-rounded`}
                      className='me-3'
                    />
                    <span>Delete class</span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

export default AdminClassDisplayCard
