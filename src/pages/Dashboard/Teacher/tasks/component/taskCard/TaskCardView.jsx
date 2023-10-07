/* Code generated with AutoHTML Plugin for Figma */
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { OffCanvas } from '../../../../../../components'

import styles from './TaskCardView.module.scss'

export const TaskCardView = ({ ...props }) => {
  return (
    <div className='border p-5'>
      <div className=''>
        <div className='d-flex gap-5 my-3'>
          <div className='text-blue fw-bold'>Fundamentals of Design</div>
          <Link
            to={`/tutor/tasks/submission`}
            className='fs-sm text-lightBlue fw-semibold'
          >
            View Submissions
          </Link>
        </div>

        <div>
          <div className='fs-sm'>
            Lorem ipsum dolor sit amet consectetur. Aliquam sed ultrices
            ultricies euismod ut porta. Nec ultrices eget turpis cursus em elit
            amet aliquet. Faucibus erat congue tincidunt hac rhoncus natoque.
            Lobortis enim vivamus lorem ut.
          </div>

          <div className='mt-5'>
            <div className='d-flex align-items-center justify-content-betwee gap-3'>
              <Icon
                className='fs-xl text-primary'
                icon={`heroicons:folder-plus`}
              />
              <div className='d-flex fs-sm text-danger justify-content-between w-100'>
                <div>CSS Styling 2: Internal &amp; External.pdf</div>

                <div>CSS Styling 2: Internal &amp; External.pdf</div>

                <div>CSS Styling 2: Internal &amp; External.pdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
