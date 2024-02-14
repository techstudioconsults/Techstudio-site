import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'

import { COURSE_BANNER_ANIMATION } from '../../../gsap'
import IntersectionObserver from '../../../hooks/Gsap'
import { selectExternalCourses } from '../../../pages/Externals/api/externalSlice'
import Button from '../Button'

const CourseBanner = ({ name, duration }) => {
  console.log(duration.weekday.date)
  const weekday = duration.weekday.date
  const weekend = duration.weekend.date
  console.log(weekday, weekend)
  // const upcomingCourses = useSelector(selectExternalCourses)
  const banner = useRef()

  // const courseDuration = upcomingCourses.filter((course) => {
  //   return course.title === name
  // })
  // console.log(courseDuration);

  // const convertDateToReadable = (date) => {
  //   let dateSet = new Date(date).toUTCString().split(' ')
  //   return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  // }

  // console.log(convertDateToReadable(weekday));

  return (
    <IntersectionObserver animationFuncion={() => COURSE_BANNER_ANIMATION(banner)}>
      <section ref={banner}>
        <section
          style={{
            borderRadius: `8.33846px`,
          }}
          className='cc-shadow p-10 m-auto bg-white courseBanner d-flex flex-column text-center text-md-start'
        >
          <p className='d-flex align-items-center justify-content-center justify-content-md-start gap-1 fw-bold'>
            <Icon icon={`solar:calendar-linear`} />
            Next Cohort:
          </p>
          <section className='d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
            <div>
              <h2 className='m-0 text-primary'>{!duration.weekend.date ? `N/A` : `${weekday}`}</h2>
              <p className='m-0 text-dark small-text fw-bold'>Weekend Class, Online Class: {duration?.span?.weekend} </p>
            </div>
            <div>
              <h2 className='m-0 text-primary'>{!duration.weekend.date ? `N/A` : `${weekend}`}</h2>
              <p className='m-0 text-dark small-text fw-bold'>Weekday Class: {duration?.span?.weekday} </p>
            </div>
            <div className=''>
              <Button linkHref='/student/register' linkText='Register Now' solidBtn navBtn width={`10`} />
            </div>
          </section>
        </section>
      </section>
    </IntersectionObserver>
  )
}

export default CourseBanner
