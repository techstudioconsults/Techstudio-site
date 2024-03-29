import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { useDashboardAllResourcesMutation } from '../../../pages/Dashboard/Admin/api/dashboardApiSlice'
import {
  useDeleteClassMutation,
  useDeleteLessonMutation,
  useGetClassByCourseIDMutation,
  useGetLessonByCourseIDMutation,
} from '../../../pages/Dashboard/Admin/classes/api/classApiSlice'
import {
  useDeleteCourseMutation,
  useViewAllCoursesMutation,
} from '../../../pages/Dashboard/Admin/courses/api/coursesApiSlice'
import {
  useDeleteResourceMutation,
  useGetAllResourcesMutation,
  useGetResourcesByCourseIDMutation,
} from '../../../pages/Dashboard/Admin/resources/api/resourceApiSlice'

const DeleteModal = ({ content }) => {
  const [isDeleted, setDeleted] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  // const { toast } = useToast()
  const [deleteCourse, deleteCourseArgs] = useDeleteCourseMutation()
  const [deleteClass, deleteClassArgs] = useDeleteClassMutation()
  const [deleteLesson, deleteLessonArgs] = useDeleteLessonMutation()
  const [deleteResource, deleteResourceArgs] = useDeleteResourceMutation()
  const [viewAllCourses] = useViewAllCoursesMutation()
  const [getClassByCourseID] = useGetClassByCourseIDMutation()
  const [getLessonByCourseID] = useGetLessonByCourseIDMutation()
  const [getResourcesByCourseID] = useGetResourcesByCourseIDMutation()
  const [dashboardAllResources] = useDashboardAllResourcesMutation()
  const [getAllResource] = useGetAllResourcesMutation()
  const dispatch = useDispatch()

  const stopPropagation = async (event) => {
    event.stopPropagation()
    setErrorMessage(``)
    switch (content.action) {
      case `delete-course`:
        await viewAllCourses().unwrap()
        dispatch({
          type: `courses/setCourseDetails`,
          payload: { courseDetails: null },
        })
        dispatch({
          type: `app/setCourseDetailOpen`,
          payload: true,
        })
        break
      case `delete-class`:
        await getClassByCourseID(content.courseID).unwrap()
        dispatch({ type: 'app/setClassDetailOpen', payload: true })
        break
      case `delete-lesson`:
        await getLessonByCourseID(content.courseID).unwrap()
        dispatch({ type: 'app/setClassDetailOpen', payload: true })
        break
      case `delete-resource`:
        if (content.courseID !== `all`) {
          await getResourcesByCourseID(content.courseID).unwrap()
          await dashboardAllResources(content.courseID).unwrap()
        } else {
          await getAllResource().unwrap()
        }
        break
      default:
        break
    }
  }
  let handleDelete = null

  if (content.action === `delete-class`) {
    handleDelete = async () => {
      setDeleted(false)
      try {
        const res = await deleteClass(content.classID).unwrap()
        if (res.success) {
          setDeleted(true)
        }
      } catch (err) {
        console.log(err.data.message)
        setErrorMessage(err.data.message)
      }
    }
  } else if (content.action === `delete-lesson`) {
    handleDelete = async () => {
      setDeleted(false)
      const res = await deleteLesson(content.lessonID).unwrap()
      if (res.success) {
        setDeleted(true)
      }
    }
  } else if (content.action === `delete-resource`) {
    handleDelete = async () => {
      setDeleted(false)
      const res = await deleteResource(content.resourceID).unwrap()

      if (res.success) {
        setDeleted(true)
      }
    }
  } else {
    handleDelete = async () => {
      setDeleted(false)
      try {
        const res = await deleteCourse(content.courseID).unwrap()
        if (res.success) {
          setDeleted(true)
        }
      } catch (err) {
        console.log(err.data.message)
        setErrorMessage(err.data.message)
      }
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <>
      <div
        // onClick={stopPropagation}
        className='modal fade delete-modal'
        id={
          content.action === `delete-class`
            ? `${content.classID}`
            : content.action === `delete-lesson`
            ? `${content.lessonID}`
            : content.action === `delete-resource`
            ? `${content.resourceID}`
            : content.action === `delete-course`
            ? `del-${content.courseID}-modal`
            : null
        }
        // id={
        //   content.action === `delete-class`
        //     ? content.classID
        //     : content.action === `delete-lesson`
        //     ? content.lessonID
        //     : content.courseID
        // }
        tabIndex='-1'
        aria-labelledby='delete-modal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
      >
        <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-md modal-dialog-centered'>
          <div className='modal-content'>
            <div
              className={[
                'modal-body d-flex flex-column align-items-center text-center py-10',
              ].join(' ')}
            >
              <div className=''>
                <h4 className='fw-bold text-blue pt-5 px-10'>
                  {!isDeleted
                    ? content.title
                    : content.action === `delete-class`
                    ? `Class Deleted Successfully`
                    : content.action === `delete-resource`
                    ? `resource Deleted Successfully`
                    : `Course Deleted Successufully`}
                </h4>
                <p hidden={!isDeleted} className='px-10'>
                  {content.desc}
                </p>
              </div>
              <div
                className={`d-flex flex-column align-items-center gap-5 w-100 mt-10`}
              >
                <button
                  disabled={
                    deleteCourseArgs.isLoading ||
                    deleteClassArgs.isLoading ||
                    deleteLessonArgs.isLoading ||
                    deleteResourceArgs.isLoading
                  }
                  hidden={isDeleted}
                  onClick={handleDelete}
                  className={`btn btn-primary w-50`}
                >
                  <div
                    hidden={
                      !deleteCourseArgs.isLoading ||
                      !deleteClassArgs.isLoading ||
                      !deleteLessonArgs.isLoading ||
                      !deleteResourceArgs.isLoading
                    }
                    className='spinner-border spinner-border-sm me-5 text-white'
                    role='status'
                  />
                  {deleteCourseArgs.isLoading ||
                  deleteClassArgs.isLoading ||
                  deleteLessonArgs.isLoading ||
                  deleteResourceArgs.isLoading
                    ? `Please wait...`
                    : `Yes`}
                </button>
                <button
                  onClick={stopPropagation}
                  hidden={isDeleted}
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  className={`btn btn-outline-danger w-50 dont-delete-btn`}
                >
                  No
                </button>
                <button
                  onClick={stopPropagation}
                  hidden={!isDeleted}
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  className={`btn btn-primary w-50`}
                >
                  Continue
                </button>
              </div>
            </div>
            <div className='modal-footer justify-content-center'>
              <p className='text-danger fs-xs fw-semibold'>{errorMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

DeleteModal.propTypes = {
  ref: PropTypes.any,
  content: PropTypes.object.isRequired,
}

export default DeleteModal
