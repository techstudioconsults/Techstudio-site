import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useGetResourcesByCourseIDMutation } from '../../../pages/Dashboard/Admin/resources/api/resourceApiSlice'

const Save = ({ content }) => {
  const navigate = useNavigate()
  const [getResourcesByCourseID] = useGetResourcesByCourseIDMutation()

  const getData = async (action) => {
    switch (action) {
      case `course`:
        navigate(`/admin/courses`)
        break
      case `class`:
        navigate(`/admin/classes/${content.courseID}`)
        break
      case `lesson`:
        navigate(`/admin/classes/${content.courseID}`, { state: `lesson` })
        break
      case `resource`:
        navigate(`/admin/resources/${content?.courseID}`)
        await getResourcesByCourseID(content?.courseID).unwrap()
        break
      default:
        break
    }
  }

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
              <button
                onClick={() => getData(content.action)}
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-primary w-50`}
              >
                Continue
              </button>
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
