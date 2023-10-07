import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'

// import useToast from '../../../../hooks/useToast'
import { useSendLogoutMutation } from '../../../../pages/Auth/api/authApiSlice'
import { selectCurrentRefreshToken } from '../../../../pages/Auth/api/authSlice'
// import ToastComponent from '../../toast/ToastComponent'
import Avatar from '../Avatar'

const AvatarDropdown = () => {
  // const [errorMessage, setErrorMessage] = useState(null)
  const refreshToken = useSelector(selectCurrentRefreshToken)
  // mutations
  const [sendLogout] = useSendLogoutMutation()

  //hooks
  // const { toast } = useToast()

  const logout = async () => {
    try {
      await sendLogout({
        refreshToken,
      }).unwrap()
    } catch (err) {
      console.log(err)
      // setErrorMessage(err.data.message)
      // toast.show()
    }
  }
  return (
    <div className='dropdown'>
      <div
        className='dropdown-toggle d-flex gap-8 align-items-center'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <div
          style={{ width: `2rem`, height: `2rem` }}
          className='d-flex align-items-center justify-content-center fs-2xl rounded rounded-circle border p-1 text-primary'
        >
          <Icon icon={`mdi:bell-notification-outline`} />
        </div>
        <Avatar />
      </div>
      <ul className='dropdown-menu mt-3'>
        <li>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            onClick={logout}
            className='dropdown-item text-danger fs-sm fw-bold'
          >
            <Icon icon={`material-symbols:logout`} width={`1.5rem`} /> Logout
            {/* <ToastComponent errorMessage={errorMessage} /> */}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AvatarDropdown
