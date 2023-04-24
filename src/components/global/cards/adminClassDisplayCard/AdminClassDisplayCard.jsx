/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from '@iconify/react'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from './adminClassDisplay.module.scss'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useGetTutorsMutation } from '../../../../pages/Dashboard/Admin/courses/api/coursesApiSlice'
import { useDispatch } from 'react-redux'
import Portal from '../../POTAL/Portal'
import DeleteModal from '../../modals/DeleteModal'

const weeks = [
  { id: 1, week: `Monday` },
  { id: 2, week: `Tuesday` },
  { id: 3, week: `Wednesday` },
  { id: 4, week: `Thursday` },
  { id: 5, week: `Friday` },
  { id: 6, week: `Saturday` },
  { id: 7, week: `Sunday` },
]

const AdminClassDisplayCard = ({ singleClass }) => {
  const [getTutors] = useGetTutorsMutation()
  const [classTutors, setClassTutors] = useState([])
  const { courseID } = useParams()
  const dispatch = useDispatch()

  // const findTutors = useCallback(async () => {
  //   const res = await getTutors().unwrap()
  //   const tutors = res.data.tutors.map((tutor) => {
  //     return { value: tutor.id, label: `${tutor.firstName} ${tutor.lastName}` }
  //   })
  //   tutors.map((tutor) => {
  //     singleClass.tutors.map((classTutorID) => {
  //       tutor.value === classTutorID
  //         ? setClassTutors((prevState) => {
  //             return [...prevState, tutor]
  //           })
  //         : null
  //     })
  //   })
  // }, [getTutors, singleClass.tutors])

  // useEffect(() => {
  //   findTutors()
  // }, [findTutors])

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  // const convertWeekToReadable = (date) => {
  //   let dateSet = new Date(date).toUTCString().split(',')
  //   let weekData = weeks.filter((week) => {
  //     if (week.week.includes(dateSet[0])) {
  //       return week.week
  //     }
  //   })
  //   return `${weekData[0].week}`
  // }

  const showClassDetails = () => {
    console.log(`details`)
    dispatch({ type: 'classes/setClassDetails', payload: singleClass })
  }

  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`${singleClass.id}`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            title: `${`Are you sure you want to delete this class?`}`,
            desc: `${singleClass.title} class has successfully being deleted. Kindly click continue to exit this page.`,
            classID: singleClass.id,
            courseID: courseID,
            action: `delete-class`,
          }}
        />
      </Portal>
      <button
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}x
        onClick={showClassDetails}
        className={`btn btn-lg h-100 d-flex justify-content-between align-items-start text-dark border p-0 py-5 ps-2 rounded-0 ${style.courseList}`}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-3'>
              <div className={style.tableHeadTitle}>
                <p className='fw-bold fs-sm text-start'>{singleClass?.title}</p>
                {/* <p className='fs-xs text-start text-danger'>{id}</p> */}
              </div>
            </div>
            <div className='col-3'>
              <div className={`${style.tableHead} h-100 text-end`}>
                <p className='fs-sm text-muted fw-semibold'>
                  Start Date:{' '}
                  <span className='text-primary'>
                    {convertDateToReadable(singleClass?.startDate)}
                  </span>
                </p>
                <p className='fs-sm text-muted fw-semibold'>
                  End Date:{' '}
                  <span className='text-danger'>
                    {convertDateToReadable(singleClass?.endDate)}
                  </span>
                </p>
              </div>
            </div>
            <div className='col-2'>
              <div
                className={`${style.tableHead} h-100 fs-sm fw-semibold text-muted text-end`}
              >
                <span>{singleClass?.preference}</span>
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
                <span className='fw-semibold text-muted'>
                  {singleClass?.tutors[0]?.name}
                </span>
              </div>
            </div>
            <div className='col-1'>
              <div className='dropdown'>
                <div
                  className='dropdown-toggle p-0'
                  data-bs-toggle='dropdown'
                  data-bs-offset='-270,10'
                  aria-expanded='false'
                >
                  <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
                </div>
                <ul className={`dropdown-menu`}>
                  {/* <div className='d-flex align-items-center text-primary px-3'>
                    <Link
                      to={`/admin/class/${courseID}/lesson/create`}
                      state={singleClass}
                    >
                      <Icon
                        width={`1.1rem`}
                        icon={`healthicons:i-training-class`}
                        className='me-3'
                      />
                      <span>Create Lesson</span>
                    </Link>
                  </div> */}
                  <hr className='my-2' />
                  <div className='d-flex align-items-center px-3'>
                    {/* <Link to={`/admin/courses/${id}/edit`} state={{ course }}> */}
                    <Link
                      to={`/admin/class/${singleClass.id}/edit`}
                      state={singleClass}
                    >
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
                    onClick={handleDeleteModal}
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

AdminClassDisplayCard.propTypes = {
  singleClass: PropTypes.object,
}

export default AdminClassDisplayCard
