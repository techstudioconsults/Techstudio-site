import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonLoader = () => {
  const skl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((count) => {
    return (
      <div
        key={count}
        className='d-flex justify-content-between border rounded-3 p-3 mb-5'
      >
        <div className='flex-fill'>
          <Skeleton width={200} />
        </div>
        <div className='flex-fill d-flex flex-column gap-4'>
          <Skeleton width={100} />
          <Skeleton width={100} />
          <Skeleton width={100} />
        </div>
        <div className='flex-fill d-flex flex-column gap-4'>
          <Skeleton width={100} />
          <Skeleton width={100} />
          <Skeleton width={100} />
        </div>
        <div className='flex-fill'>
          <Skeleton circle width={30} height={30} />
          <Skeleton circle width={30} height={30} />
          <Skeleton circle width={30} height={30} />
        </div>
        <div className='flex'>
          <Skeleton circle width={10} height={10} />
        </div>
      </div>
    )
  })
  return <section>{skl}</section>
}

export default SkeletonLoader

export const SkeletonLoaderII = () => {
  return (
    <div className='d-flex flex-column border rounded-3 gap-10 p-5 mb-5 h-100'>
      <Skeleton width={465} height={150} />
      <table className='table'>
        {/* <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>
              <Skeleton width={150} />
            </td>
            <td>
              <Skeleton circle width={20} height={20} />
            </td>
            <td>
              <Skeleton width={150} />
            </td>
          </tr>
          <tr>
            <td>
              <Skeleton width={150} />
            </td>
            <td>
              <Skeleton circle width={20} height={20} />
            </td>
            <td>
              <Skeleton width={150} />
            </td>
          </tr>
          <tr>
            <td>
              <Skeleton width={150} />
            </td>
            <td>
              <Skeleton circle width={20} height={20} />
            </td>
            <td>
              <Skeleton width={150} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
