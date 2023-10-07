import { useRef } from 'react'

import UserRegistrationFormTab from './userRegistrationFormTab/UserRegistrationFormTab'

// eslint-disable-next-line react/prop-types
const UserRegistrationFormModal = () => {
  const cancelButtonRef = useRef(null)
  return (
    <div
      className='modal fade'
      id='user-form-modal'
      tabIndex='-1'
      aria-labelledby='user-form-modal'
    >
      <div className='modal-dialog modal-fullscreen-md-down modal-lg modal-dialog-centered'>
        <div className='modal-content p-10'>
          <div className='d-flex justify-content-end'>
            <button
              style={{ visibility: `collapse` }}
              ref={cancelButtonRef}
              type='button'
              className='btn-close p-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <header className={`text-center`}>
            <h2 className='fs-2xl'>Register A User</h2>
            <p>Create an account for new students, tutors, or an admin.</p>
          </header>
          {/* tab section (tutors, student and admin) */}
          <section className='mt-10 modal-body'>
            <UserRegistrationFormTab cancelBtn={cancelButtonRef} />
          </section>
        </div>
      </div>
    </div>
  )
}

// StartAClass.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]).isRequired,
//   title: PropTypes.string,
// }

export default UserRegistrationFormModal
