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

const StudentListDisplay = () => {
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

  return (
    <>
      <section className='container d-flex flex-column gap-5'>
        {studentsArgs.isLoading ? (
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
        )}
      </section>
    </>
  )
}

StudentListDisplay.propTypes = {
  file: PropTypes.object,
  course: PropTypes.string,
}

export default StudentListDisplay
