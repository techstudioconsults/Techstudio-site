import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import SpinnerComponent from '../../../../../components/global/skeletonLoader/SpinnerComponent'
import {
  useGetAllResourcesMutation,
  useGetResourcesByCourseIDMutation,
} from '../api/resourceApiSlice'
import { setResources } from '../api/resourceSlice'

import style from '../resourceCourseTab/resourceCourseTab.module.scss'

const ResourceCourseTab = ({ courses }) => {
  const [resourcesLength, setResourceLength] = useState()
  const location = useLocation()
  let { resource } = useParams()
  const navigate = useNavigate()
  const [getAllResources, allResourcesArgs] = useGetAllResourcesMutation()
  const [getResourcesByCourseID, resourcesArgs] =
    useGetResourcesByCourseIDMutation()

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )

  const getResources = useCallback(async () => {
    // activeRoute(location?.state?.course?.id)
    activeRoute(resource)
    if (resource !== `all`) {
      const res = await getResourcesByCourseID(resource).unwrap()
      setResourceLength(res.data.resources.length)
    } else {
      navigate(`/admin/resources/${`all`}`)
      await getAllResources().unwrap()
    }
  }, [activeRoute, getAllResources, getResourcesByCourseID, navigate, resource])

  useEffect(() => {
    getResources()
  }, [getResources])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          state={{
            course: course,
            resourcesLength,
          }}
          to={`/admin/resources/${course?.id}`}
          className={[
            'nav-link',
            style.a,
            activeRoute(course.id)
              ? `border border-primary border-top-0 border-start-0 border-end-0 rounded-0 border-3`
              : null,
          ].join(' ')}
        >
          {course?.title}
        </NavLink>
      </li>
    )
  })

  return (
    <section className={`${style.tab}`}>
      <ul className={['nav hide_scrollbar', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <NavLink
            to={`/admin/resources/all`}
            className={[
              'nav-link',
              style.a,
              activeRoute(`all`)
                ? `border border-primary border-top-0 border-start-0 border-end-0 rounded-0 border-3`
                : null,
            ].join(' ')}
          >
            All Resources
          </NavLink>
        </li>
        {coursesNav}
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        {allResourcesArgs.isLoading || resourcesArgs.isLoading ? (
          <SpinnerComponent />
        ) : (
          <Outlet />
        )}
      </div>
    </section>
  )
}

ResourceCourseTab.propTypes = {
  courses: PropTypes.array,
  // feedback: PropTypes.node,
}

export default ResourceCourseTab
