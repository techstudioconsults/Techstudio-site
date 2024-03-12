import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'
import { selectExternalCourses } from '../../../api/externalSlice'

// STYLE
import style from './sectionSeven.module.scss'

const SectionSeven = ({ data }) => {
  const upcomingCourses = useSelector(selectExternalCourses)
  // console.log(upcomingCourses)
  const [index, setIndex] = useState(0)
  const [classes, setClasses] = useState([])
  const carousel = useRef()
  const [dataImage, setDataImage] = useState(data[index])
  // const { image, date, duration, location, title, description } = data[index]
  const upcomingClass = classes[index]
  

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  // function calculateWeeks(startDate, endDate) {
  //   const start = new Date(startDate)
  //   const end = new Date(endDate)

  //   // Calculate the time difference in milliseconds
  //   const timeDiff = end.getTime() - start.getTime()
  //   // Calculate the number of weeks
  //   const weeks = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7))
  //   return weeks
  // }

  const getUpcomingClasses = useCallback(async () => {
    setClasses(upcomingCourses)
    console.log(upcomingCourses);
  }, [upcomingCourses])

  useEffect(() => {
    getUpcomingClasses()
  }, [getUpcomingClasses])

  const checkpage = useCallback(
    (page) => {
      if (page < 0) {
        return classes.length - 1
      }
      if (page > classes.length - 1) {
        return 0
      }
      if (page > data.length - 1) {
        setDataImage(data[index])
      }
      return page
    },
    [classes.length, data, index]
  )

  // const checkpage = useCallback(
  //   (page) => {
  //     if (page < 0) {
  //       return classes.length - 1;
  //     }
  //     if (page > classes.length - 1) {
  //       return 0;
  //     }
  //     if (page > data.length - 1) {
  //       setDataImage(data[page]); // Use 'page' instead of 'index'
  //     }
  //     return page;
  //   },
  //   [classes.length, data]
  // );
  

  const handlePreviousBtn = () => {
    setIndex((prevState) => {
      return checkpage(prevState - 1)
    })
  }
  const handleNextBtn = useCallback(() => {
    setIndex((prevState) => {
      return checkpage(prevState + 1)
    })
  }, [checkpage])

  return (
    <Container>
      <Gsap animationFuncion={() => genericAnimation(`classes`)}>
        <section ref={carousel} className={`${style.carousel} d-flex flex-column flex-lg-row gap-20 gap-lg-40 mt-lg-20`}>
          <article className={style.quoteContainer}>
            {/* the cybersecurity image breaks the code */}
            {/* <img src={dataImage.image} alt='img' className='cc-img-fluid' /> */}
            <img src='https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png' alt='img' className='cc-img-fluid' />
          </article>

          <section className={`${style.text} d-flex flex-column justify-content-between`}>
            <section className=''>
              <p className=' fw-semibold text-primary text-uppercase classes'>upcoming classes</p>
              <div>
                <h4 className=' my-5 fw-bold classes'>{upcomingClass?.classes?.weekday[0]?.title}</h4>
                <p className='classes'>{upcomingClass?.description}</p>
              </div>
            </section>
            <section className={`${style.classInfo} d-flex flex-column gap-3 my-7 classes`}>
              <div className='d-flex justify-content-between'>
                <span>
                  <Icon className='me-2' icon={`ion:location-outline`} />
                  <span>Preference</span>
                </span>
                {/* <span>{location}</span> */}
                <span>{upcomingClass?.classes?.weekday[0]?.preference}</span>
              </div>
              <div className='d-flex  justify-content-between'>
                <span>
                  <Icon className='me-2' icon={`fluent-mdl2:date-time`} />
                  <span>Start Date</span>
                </span>
                {/* <span>{date}</span> */}
                <span>{convertDateToReadable(upcomingClass?.startDate)}</span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>
                  <Icon className='me-2' icon={`game-icons:duration`} />
                  <span>Duration</span>
                </span>
                {/* <span>{duration}</span> */}
                <span>{upcomingClass?.duration} Weeks</span>
              </div>
            </section>
            <section className='d-flex classes'>
              <Link to={`/student/register`}>
                <button className='btn btn-primary px-10 btn-text'>Enroll Now</button>
              </Link>
            </section>
            <div className={`mt-5 mt-lg-0 d-flex classes ${index ? `justify-content-between` : `justify-content-end`}  justify-content-lg-end`}>
              <button
                onClick={handlePreviousBtn}
                className={`btn text fw-bold text-primary
              ${index ? `d-block` : `d-none`}`}
              >
                {`<<`} Previous
              </button>
              <button onClick={handleNextBtn} className={`btn text fw-bold text-primary`}>
                Next {`>>`}
              </button>
            </div>
          </section>
        </section>
      </Gsap>
    </Container>
  )
}

SectionSeven.propTypes = {
  data: PropTypes.array.isRequired,
}

export default SectionSeven
