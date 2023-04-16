import UserRegistrationFormTab from './userRegistrationFormTab/UserRegistrationFormTab'

// eslint-disable-next-line react/prop-types
const UserRegistrationFormModal = () => {
  return (
    <div
      className='modal fade'
      id='user-form-modal'
      tabIndex='-1'
      aria-labelledby='user-form-modal'
    >
      <div className='modal-dialog modal-fullscreen-md-down modal-lg '>
        <div className='modal-content p-10'>
          <header className={`text-center`}>
            <h2>Register A User</h2>
            <p>Create an account for new students, tutors, or an admin.</p>
          </header>
          {/* tab section (tutors, student and admin) */}
          <section className='mt-10'>
            <UserRegistrationFormTab />
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
