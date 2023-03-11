import React from 'react'
import { AvatarStack } from '../../../../../components'
import { Icon } from '@iconify/react'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'
import style from '../adminCourse.module.scss'

const CourseDetails = () => {
  const { imageList } = DASHBOARD_CONTENT
  return (
    <div className={style.courseDetails}>
      <div className={style.courseBanner}>
        <p className={`${style.title} fw-bold mb-3`}>
          Javascript Fullstack Web Development
        </p>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur. Tristique sagittis nibh sit
          facilisis malesuada. Augue massa ultricies a donec. Odio sed augue.
          Lorem ipsum dolor sit amet consectetur. Tristique sagittis nibh sit
          facilisis malesuada. Augue massa ultricies a donec. Odio sed augue.
        </p>
      </div>
      <div>
        <table className='table'>
          <thead className='text-white'>
            <tr>
              <th scope='col'>
                <span className='me-1'>
                  <Icon
                    width={`1.5rem`}
                    height={`1.5rem`}
                    icon='mdi:clock-time-five-outline'
                  />
                </span>
                Duration
              </th>
              <th scope='col'>
                <span className='me-1'>
                  <Icon
                    width={`1.5rem`}
                    height={`1.5rem`}
                    icon='la:chalkboard-teacher'
                  />
                </span>
                Tutor
              </th>
              <th scope='col'>
                <span className='me-1'>
                  <Icon
                    width={`1.5rem`}
                    height={`1.5rem`}
                    icon='ic:baseline-laptop-mac'
                  />
                </span>
                Classes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='text-white'>4 Months</div>
                <div>(online)</div>
              </td>
              <td>
                <AvatarStack dontShowMore imageList={imageList} />
                {/* <span>(online)</span> */}
              </td>
              <td>
                <div className='text-white'>4 Classes</div>
                <div>(online)</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='text-white'>4 Months</div>
                <div>(online)</div>
              </td>
              <td>
                <AvatarStack dontShowMore imageList={imageList} />
                {/* <span>(online)</span> */}
              </td>
              <td>
                <div className='text-white'>2 Classes</div>
                <div>(online)</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='text-white'>6 Months</div>
                <div>(online)</div>
              </td>
              <td>
                <AvatarStack dontShowMore imageList={imageList} />
                {/* <span>(online)</span> */}
              </td>
              <td>
                <div className='text-white'>2 Classes</div>
                <div>(online)</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CourseDetails
