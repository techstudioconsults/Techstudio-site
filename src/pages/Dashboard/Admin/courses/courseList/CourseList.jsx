/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AvatarStack } from '../../../../../components'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'
import {
  useDeleteCourseMutation,
  useViewCoursesDetailsMutation,
} from '../api/coursesApiSlice'

const CourseList = ({ course }) => {
  // const [active, setActive] = useState(null)
  const { id, title, duration, tutors } = course
  const { imageList } = DASHBOARD_CONTENT

  const [viewCoursesDetails] = useViewCoursesDetailsMutation()
  const [deleteCourse] = useDeleteCourseMutation()

  const handleClick = async () => {
    // setActive(id)
    await viewCoursesDetails(id).unwrap()
  }

  const handleDeleteCourse = async () => {
    const res = await deleteCourse(id).unwrap()
    console.log(res)
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      id={id}
      onClick={handleClick}
      className={`d-flex justify-content-between align-items-cente border p-3`}
    >
      <div className={style.tableHeadTitle}>
        <p className='fw-bold fs-sm'>{title}</p>
      </div>
      <div className={style.tableHead}>
        <ul className='d-flex flex-column justify-content-between'>
          <li>
            <span className='fw-bold'>{duration?.online} weeks</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>{duration?.weekday} weeks</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>{duration?.weekend} weeks</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
        </ul>
      </div>
      <div className={style.tableHead}>
        <ul className='d-flex flex-column justify-content-between'>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
          <li>
            <span className='fw-bold'>N/A</span>{' '}
            {/* <span className='text-primary'>(weekend)</span> */}
          </li>
        </ul>
      </div>
      <div className={style.tableHead}>
        <ul>
          <li>
            <AvatarStack
              tutors={tutors?.online}
              dontShowMore
              imageList={imageList}
            />
          </li>
          <li>
            <AvatarStack
              tutors={tutors?.weekday}
              dontShowMore
              imageList={imageList}
            />
          </li>
          <li>
            <AvatarStack
              tutors={tutors?.weekend}
              dontShowMore
              imageList={imageList}
            />
          </li>
        </ul>
      </div>
      <div className='dropdown' onClick={(event) => event.stopPropagation()}>
        <div
          className='dropdown-toggle p-0'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
        </div>
        <ul className={`dropdown-menu ${style.dropdown}`}>
          <div className='d-flex align-items-center px-3'>
            <Link to={`/admin/courses/edit`}>
              <Icon
                width={`1.1rem`}
                icon={`material-symbols:edit`}
                className='me-3'
              />
              <span>Edit course</span>
            </Link>
          </div>
          <hr className='my-2' />
          <div
            onClick={handleDeleteCourse}
            className='d-flex align-items-center text-danger px-3'
          >
            <Icon
              width={`1.1rem`}
              icon={`material-symbols:delete-outline-rounded`}
              className='me-3'
            />
            <span>Delete course</span>
          </div>
        </ul>
      </div>
    </div>
  )
}

CourseList.propTypes = {
  course: PropTypes.object.isRequired,
}

export default CourseList
