import { useRef } from 'react'
import { Icon } from '@iconify/react'

import { COURSE_BANNER_ANIMATION } from '../../../gsap'
import IntersectionObserver from '../../../hooks/Gsap'
import Button from '../Button'

const CourseBanner = ({ duration }) => {
  const banner = useRef()
  return (
    <IntersectionObserver
      animationFuncion={() => COURSE_BANNER_ANIMATION(banner)}
    >
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
              <h2 className='m-0 fs-3xl text-primary'>
                {duration?.weekday?.date}
              </h2>
              <p className='m-0 fs-xs text-dark fw-bold'>
                Weekday Class, Online Class; {duration?.span?.weekday}{' '}
              </p>
            </div>
            <div>
              <h2 className='m-0 fs-3xl text-primary'>
                {duration?.weekend?.date}
              </h2>
              <p className='m-0 fs-xs text-dark fw-bold'>
                Weekend Class, {duration?.span?.weekend}{' '}
              </p>
            </div>
            <div className=''>
              <Button
                linkHref='/student/register'
                linkText='Register Now'
                solidBtn
                navBtn
                width={`10`}
              />
            </div>
          </section>
        </section>
      </section>
    </IntersectionObserver>
  )
}

export default CourseBanner
