import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useGetResourcesByCourseIDMutation } from '../../../pages/Dashboard/Admin/resources/api/resourceApiSlice'

const Save = ({ content }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [route, setRoute] = useState()
  const [getResourcesByCourseID] = useGetResourcesByCourseIDMutation()

  useEffect(() => {
    async function getData() {
      switch (content.action) {
        case `course`:
          setRoute(`/admin/courses`)
          break
        case `class`:
          setRoute(`/admin/classes/${content.courseID}`)
          break
        case `lesson`:
          setRoute(`/admin/classes/${content.courseID}`)
          break
        case `resource`:
          setRoute(`/admin/resources/${content?.courseID}`)
          await getResourcesByCourseID(content?.courseID).unwrap()
          break

        default:
          break
      }
    }
    getData()
  }, [
    content.action,
    content.courseID,
    getResourcesByCourseID,
    location.pathname,
    navigate,
  ])

  return (
    <div
      className='modal fade'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      id={'save-success'}
      tabIndex='-1'
      aria-labelledby='save-success'
    >
      <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-md'>
        <div className='modal-content'>
          {/* <div className='modal-header d-flex justify-content-end'>
            <MdClose
              size={`1.5rem`}
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div> */}
          <div
            className={[
              'modal-body d-flex flex-column align-items-center text-center py-20',
            ].join(' ')}
          >
            <div className='px-5'>
              <h4 className='fw-bold text-blue pt-5'>{content.title}</h4>
              <p className='px-8'>{content.desc}</p>
            </div>
            <div className={`w-100 text-center mt-10`}>
              <Link to={route} state={{ from: content.action }}>
                <button
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  className={`btn btn-primary w-50`}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Save.propTypes = {
  ref: PropTypes.any,
  content: PropTypes.object.isRequired,
}

export default Save
