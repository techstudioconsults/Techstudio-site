import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import {
  useGetAllStudentsMutation,
  useGetStudentsByCourseIDMutation,
} from '../api/usersApiSlice'
import { useSelector } from 'react-redux'
import { selectAllStudents } from '../api/usersSlice'
import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'

const StudentListDisplay = () => {
  const [getAllStudents] = useGetAllStudentsMutation()
  const [getStudentsByCourseID, studentsArgs] =
    useGetStudentsByCourseIDMutation()
  const location = useLocation()
  const courseId = location.pathname.split(`/`)[3]
  const allStudents = useSelector(selectAllStudents)

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
    getStudents()
  }, [getStudents])

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
