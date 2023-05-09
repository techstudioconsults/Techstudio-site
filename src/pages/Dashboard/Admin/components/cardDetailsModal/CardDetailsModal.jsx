/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Icon } from '@iconify/react'
import React from 'react'

const CardDetailsModal = ({ content, children }) => {
  // const coursesNav = courses?.map((course) => {
  //   return (
  //     <li key={course?.id} className={['nav-item', style.link].join(' ')}>
  //       <NavLink
  //         to={`/admin/dashboard/details`}
  //         className={[
  //           'nav-link',
  //           style.a,
  //           activeRoute(course.id)
  //             ? `border border-primary border-top-0 border-start-0 border-end-0 rounded-0 border-3`
  //             : null,
  //         ].join(' ')}
  //       >
  //         {course?.title}
  //       </NavLink>
  //     </li>
  //   )
  // })

  return (
    <div
      className='modal fade'
      //   data-bs-backdrop='static'
      id={`${content.modalID}`}
      tabIndex='-1'
      aria-labelledby='card-details-modal-label'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl'>
        <div className='modal-content p-5'>
          <div className='modal-body p-2'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailsModal
