import PropTypes from 'prop-types'
import { Avatar } from '../../../../../components'
import { useLocation } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import {
  useGetAllStudentsMutation,
  useGetAllTutorsMutation,
  useGetStudentsByCourseIDMutation,
  useGetTutorsByCourseIDMutation,
} from '../api/usersApiSlice'
import { useSelector } from 'react-redux'
import { selectAllStudents, selectAllTutors } from '../api/usersSlice'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'

const AdminUserListDisplay = () => {
  const [getAllTutors] = useGetAllTutorsMutation()
  const [getAllStudents] = useGetAllStudentsMutation()
  const [getTutorsByCourseID, tutorsArgs] = useGetTutorsByCourseIDMutation()
  const [getStudentsByCourseID, studentsArgs] =
    useGetStudentsByCourseIDMutation()
  const location = useLocation()
  const courseId = location.pathname.split(`/`)[3]
  const allTutors = useSelector(selectAllTutors)
  const allStudents = useSelector(selectAllStudents)

  const getTutors = useCallback(async () => {
    if (courseId === `all`) {
      await getAllTutors().unwrap()
    } else {
      await getTutorsByCourseID(courseId).unwrap()
    }
  }, [courseId, getAllTutors, getTutorsByCourseID])

  const getStudents = useCallback(async () => {
    if (courseId === `all`) {
      const res = await getAllStudents().unwrap()
      console.log(res)
    } else {
      const res = await getStudentsByCourseID(courseId).unwrap()
      console.log(res)
    }
  }, [courseId, getAllStudents, getStudentsByCourseID])

  useEffect(() => {
    getTutors()
    getStudents()
  }, [getStudents, getTutors])

  const users =
    location?.state.type === `tutors` ? (
      tutorsArgs.isLoading ? (
        <SpinnerComponent />
      ) : (
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
                <div>
                  <p className='fs-sm text-secondary'>{tutor?.course}</p>
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
                    Remove
                  </button>
                </div>
              </section>
            </div>
          )
        })
      )
    ) : studentsArgs.isLoading ? (
      <SpinnerComponent />
    ) : (
      allStudents?.map((student, index) => {
        return (
          <div
            key={index}
            className='row align-items-center border border-1 p-2'
          >
            <section className='col col-4'>
              <div className='d-flex'>
                <div>
                  <p className='fw-bold text-blue'>{student?.fullName}</p>
                </div>
              </div>
            </section>
            <section className='col col-3'>
              <div>
                <p className='fs-sm text-secondary'>{student?.course}</p>
              </div>
            </section>
            <section className='col col-3'>
              <div>
                <p className='fs-sm text-primary fw-semibold'>
                  {student?.email}
                </p>
              </div>
            </section>
            <section className='col col-2'>
              <div>
                <p className='fs-sm text-danger fw-semibold'>
                  {student?.phoneNumber}
                </p>
              </div>
            </section>
            {/* <section className='col col-1'>
                <div className='text-danger' style={{ cursor: `pointer` }}>
                  <button
                    className={`text-danger btn btn-outline btn-sm fw-semibold`}
                  >
                    Remove
                  </button>
                </div>
              </section> */}
          </div>
        )
      })
    )

  return (
    <>
      <section className='container d-flex flex-column gap-5'>{users}</section>
    </>
  )
}

AdminUserListDisplay.propTypes = {
  file: PropTypes.object,
  course: PropTypes.string,
}

export default AdminUserListDisplay
