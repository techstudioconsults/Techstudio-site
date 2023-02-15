import React from 'react'
import { MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'

const AvatarDropdown = () => {
  return (
    <div className='dropdown'>
      <div
        className='dropdown-toggle'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <Avatar />
      </div>
      <ul className='dropdown-menu mt-3'>
        <li>
          <Link to={`/`} className='dropdown-item text-danger fs-sm fw-bold'>
            <MdLogout size={`1.5rem`} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AvatarDropdown
