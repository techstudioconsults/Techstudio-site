import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { useGetTutorsByCourseIDMutation } from '../../../pages/Dashboard/Admin/users/api/usersApiSlice'
import { selectAllTutors } from '../../../pages/Dashboard/Admin/users/api/usersSlice'
import SpinnerComponent from '../../global/skeletonLoader/SpinnerComponent'

import ListLayout from './ListLayout'

import style from './tutorlist.module.scss'

const TutorList = () => {
  const [getTutorsByCourseID, tutorArgs] = useGetTutorsByCourseIDMutation()
  const tutors = useSelector(selectAllTutors)
  const { courseID } = useParams()

  useEffect(() => {
    getTutorsByCourseID(courseID).unwrap()
  }, [courseID, getTutorsByCourseID])

  const tutorsList = tutors?.slice(0, 6)?.map((tutor) => {
    return <ListLayout key={tutor.id} tutor={tutor} />
  })

  return (
    <div className={style.tutorList}>
      <div className='d-flex justify-content-between mb-5'>
        <p className='fw-bold'>Tutors</p>
        <Link to={`/admin/users`}>
          <p>View All</p>
        </Link>
      </div>
      {tutorArgs.isLoading ? (
        <SpinnerComponent />
      ) : (
        <div
          className={`${style.listLayout} d-flex flex-column gap-3 overflow-auto hide_scrollbar`}
        >
          {tutorsList}
        </div>
      )}
    </div>
  )
}

export default TutorList
