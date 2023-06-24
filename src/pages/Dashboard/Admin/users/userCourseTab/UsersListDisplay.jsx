import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Avatar } from '../../../../../components'
import Feedback from '../../../../../components/global/feedbacks/Feedback'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'
import {
  useGetAllTutorsMutation,
  useGetTutorsByCourseIDMutation,
} from '../api/usersApiSlice'
import { selectAllTutors } from '../api/usersSlice'

const AdminUserListDisplay = () => {
  const [getAllTutors] = useGetAllTutorsMutation()
  const [getTutorsByCourseID, tutorsArgs] = useGetTutorsByCourseIDMutation()
  const location = useLocation()
  const courseId = location.pathname.split(`/`)[3]
  const allTutors = useSelector(selectAllTutors)

  const getTutors = useCallback(async () => {
    if (courseId === `all`) {
      await getAllTutors().unwrap()
    } else {
      await getTutorsByCourseID(courseId).unwrap()
    }
  }, [courseId, getAllTutors, getTutorsByCourseID])

  useEffect(() => {
    getTutors()
  }, [getTutors])

  return (
    <>
      <section className='container d-flex flex-column gap-5'>
        {tutorsArgs.isLoading ? (
          <SpinnerComponent />
        ) : allTutors?.length ? (
          allTutors?.map((tutor, index) => {
            return (
              <div
                key={index}
                className='row align-items-center border border-1 px-2 py-1'
              >
                <section className='col col-3'>
                  <div className='d-flex gap-3'>
                    <Avatar />
                    <div>
                      <p className='fw-bold text-blue'>{tutor?.fullName}</p>
                    </div>
                  </div>
                </section>
                <section className='col col-3'>
                  <div hidden={courseId !== `all`}>
                    <p className='fs-sm text-secondary'>{tutor?.course[0]}</p>
                  </div>
                </section>
                <section className='col col-3'>
                  <div>
                    <p className='fs-sm text-primary fw-semibold'>
                      {tutor?.email}
                    </p>
                  </div>
                </section>
                <section className='col col-2'>
                  <div>
                    <p className='fs-sm text-primary fw-semibold'>
                      {tutor?.phoneNumber}
                    </p>
                  </div>
                </section>
                <section className='col col-1'>
                  <div className='text-danger' style={{ cursor: `pointer` }}>
                    <button
                      className={`text-danger btn btn-outline btn-sm fw-semibold`}
                    >
                      {tutor?.status}
                    </button>
                  </div>
                </section>
              </div>
            )
          })
        ) : (
          <Feedback message={`No Tutor Registered For This Course`} />
        )}
      </section>
    </>
  )
}

AdminUserListDisplay.propTypes = {
  file: PropTypes.object,
  course: PropTypes.string,
}

export default AdminUserListDisplay
