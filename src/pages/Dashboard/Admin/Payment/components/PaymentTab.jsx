import React, { useCallback, useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import style from '../style/payment.module.scss'
import PropTypes from 'prop-types'
import { useGetStudentPaymentRecordsByIDsMutation } from '../api/paymentApiSlice'
import { useSelector } from 'react-redux'
import { selectClasses } from '../../classes/api/classSlice'

const PaymentTab = ({ courses }) => {
  const location = useLocation()
  const classes = useSelector(selectClasses)
  const [getStudentPaymentRecordsByIDs] =
    useGetStudentPaymentRecordsByIDsMutation()
  let { courseID } = useParams()
  const redirect = useNavigate()

  const activeRoute = useCallback(
    (routeName) => {
      return location.pathname.includes(routeName)
    },
    [location.pathname]
  )

  console.log(classes, courseID)

  const getStudentPaymentDetails = useCallback(async () => {
    // if (courseID) {
    await getStudentPaymentRecordsByIDs({
      courseID: courseID,
      status: null,
      classID: null,
    }).unwrap()
    // await getStudentsByCourseID(courseID).unwrap()
    // }
  }, [courseID, getStudentPaymentRecordsByIDs])

  useEffect(() => {
    if (!courseID) {
      redirect(`/admin/payment/courses/${courses[0]?.id}`)
      getStudentPaymentDetails()
    }
    activeRoute(courseID)
  }, [activeRoute, courseID, courses, getStudentPaymentDetails, redirect])

  useEffect(() => {
    getStudentPaymentDetails()
  }, [courseID, getStudentPaymentDetails])

  const coursesNav = courses?.map((course) => {
    return (
      <li key={course?.id} className={['nav-item', style.link].join(' ')}>
        <NavLink
          onClick={getStudentPaymentDetails}
          to={`/admin/payment/courses/${course?.id}`}
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
        {coursesNav}
        <hr className={`${style.hr} my-0`} />
      </ul>

      <div className='tab-content py-6' id='tabContent'>
        {/* {classArgs?.isLoading ? <SpinnerComponent /> : <Outlet />} */}
        {<Outlet />}
      </div>
    </section>
  )
}

PaymentTab.propTypes = {
  courses: PropTypes.array,
  // feedback: PropTypes.node,
}

export default PaymentTab
