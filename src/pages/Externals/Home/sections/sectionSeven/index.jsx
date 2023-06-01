import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
// STYLE
import style from './sectionSeven.module.scss'
import { Icon } from '@iconify/react'
import { Container } from '../../../../../layout'
import { Link } from 'react-router-dom'

const SectionSeven = ({ data }) => {
  const [index, setIndex] = useState(0)
  const carousel = useRef()
  const { image, title, description, location, date, duration } = data[index]

  const checkpage = useCallback(
    (page) => {
      if (page < 0) {
        return data.length - 1
      }
      if (page > data.length - 1) {
        return 0
      }
      return page
    },
    [data.length]
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
            <p className='fs-sm fw-semibold text-primary text-uppercase'>
              upcoming classes
            </p>
            <div>
              <h4 className='fs-3xl my-5 fw-semibold'>{title}</h4>
              <p className=''>{description}</p>
            </div>
          </section>
          <section
            className={`${style.classInfo} d-flex flex-column gap-3 my-10`}
          >
            <div className='d-flex justify-content-between'>
              <span>
                <Icon className='me-2' icon={`ion:location-outline`} />
                <span>location</span>
              </span>
              <span>{location}</span>
            </div>
            <div className='d-flex  justify-content-between'>
              <span>
                <Icon className='me-2' icon={`fluent-mdl2:date-time`} />
                <span>Start Date</span>
              </span>
              <span>{date}</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span>
                <Icon className='me-2' icon={`game-icons:duration`} />
                <span>Duration</span>
              </span>
              <span>{duration}</span>
            </div>
          </section>
          <section className='d-flex'>
            <Link to={`/student/register`}>
              <button className='btn btn-primary px-10'>Enroll Now</button>
            </Link>
          </section>
          <div
            className={`mt-5 mt-lg-0 d-flex ${
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
    </Container>
  )
}

SectionSeven.propTypes = {
  data: PropTypes.array.isRequired,
}

export default SectionSeven
