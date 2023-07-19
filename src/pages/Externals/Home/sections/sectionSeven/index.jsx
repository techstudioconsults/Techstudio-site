import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

// STYLE
import style from './sectionSeven.module.scss'

const SectionSeven = ({ data }) => {
  const [index, setIndex] = useState(0)
  const [classes, setClasses] = useState([])
  const carousel = useRef()
  const { image, date, duration, location } = data[index]

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  function calculateWeeks(startDate, endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)

    // Calculate the time difference in milliseconds
    const timeDiff = end.getTime() - start.getTime()
    // Calculate the number of weeks
    const weeks = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7))
    return weeks
  }

  const getUpcomingClasses = useCallback(async () => {
    const res = await axios.get(
      `https://api.techstudio.academy/api/v1/external/classes`
    )
    setClasses(res.data.data)
  }, [])

  useEffect(() => {
    getUpcomingClasses()
  }, [getUpcomingClasses])

  const checkpage = useCallback(
    (page) => {
      if (page < 0) {
        return classes.length - 1
      }
      if (page > classes.length - 1 || page > data.length - 1) {
        return 0
      }
      return page
    },
    [classes.length, data.length]
  )

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
        <section
          ref={carousel}
          className={`${style.carousel} d-flex flex-column flex-lg-row gap-20 gap-lg-40`}
        >
          <article className={style.quoteContainer}>
            <img src={image} alt='img' className='cc-img-fluid' />
          </article>
          <section
            className={`${style.text} d-flex flex-column justify-content-between`}
          >
            <section className=''>
              <p className='fs-sm fw-semibold text-primary text-uppercase classes'>
                upcoming classes
              </p>
              <div>
                <h4 className='fs-2xl my-5 fw-bold classes'>
                  {classes[index]?.courseTitle}
                </h4>
                <p className='classes'>{classes[index]?.description}</p>
              </div>
            </section>
            <section
              className={`${style.classInfo} d-flex flex-column gap-3 my-7 classes`}
            >
              <div className='d-flex justify-content-between'>
                <span>
                  <Icon className='me-2' icon={`ion:location-outline`} />
                  <span>Preference</span>
                </span>
                <span>{classes[index]?.preference}</span>
              </div>
              <div className='d-flex  justify-content-between'>
                <span>
                  <Icon className='me-2' icon={`fluent-mdl2:date-time`} />
                  <span>Start Date</span>
                </span>
                <span>{convertDateToReadable(classes[index]?.startDate)}</span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>
                  <Icon className='me-2' icon={`game-icons:duration`} />
                  <span>Duration</span>
                </span>
                <span>{duration}</span>
              </div>
            </section>
            <section className='d-flex classes'>
              <Link to={`/student/register`}>
                <button className='btn btn-primary px-10'>Enroll Now</button>
              </Link>
            </section>
            <div
              className={`mt-5 mt-lg-0 d-flex classes ${
                index ? `justify-content-between` : `justify-content-end`
              }  justify-content-lg-end`}
            >
              <button
                onClick={handlePreviousBtn}
                className={`btn text fw-bold text-primary
              ${index ? `d-block` : `d-none`}`}
              >
                {`<<`} Previous
              </button>
              <button
                onClick={handleNextBtn}
                className={`btn text fw-bold text-primary`}
              >
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
