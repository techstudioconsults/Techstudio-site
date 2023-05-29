import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
// STYLE
import style from './sectionSeven.module.scss'
import { Icon } from '@iconify/react'
import { Container } from '../../../../../layout'

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
        {/* <article className={style.controls}>
        <button onClick={handlePreviousBtn} className={style.previousBtn}>
          prev
        </button>
        <div className={style.imgContainer}>
          <img src={img} alt='avatar' />
        </div>
        <button onClick={handleNextBtn} className={style.nextBtn}>
          next
        </button>
      </article> */}
        <article className={style.quoteContainer}>
          <img src={image} alt='img' className='img-fluid' />
        </article>
        <section
          className={`${style.text} d-flex flex-column justify-content-between`}
        >
          <section className=''>
            <p className='fs-sm text-primary text-uppercase'>
              upcoming classes
            </p>
            <div>
              <h4 className='fs-3xl fw-semibold'>{title}</h4>
              <p className=''>{description}</p>
            </div>
          </section>
          <section className='d-flex flex-column gap-5 my-10'>
            <div className='d-flex gap-10 gap-lg-52'>
              <span>
                <Icon className='me-2' icon={`ion:location-outline`} />
                <span>location</span>
              </span>
              <span>{location}</span>
            </div>
            <div className='d-flex gap-10 gap-lg-52'>
              <span>
                <Icon className='me-2' icon={`fluent-mdl2:date-time`} />
                <span>Start Date</span>
              </span>
              <span>{date}</span>
            </div>
            <div className='d-flex gap-10 gap-lg-52'>
              <span>
                <Icon className='me-2' icon={`game-icons:duration`} />
                <span>Duration</span>
              </span>
              <span>{duration}</span>
            </div>
          </section>
          <section>
            <button className='btn btn-primary px-10'>Enroll Now</button>
          </section>
          <div className='d-flex justify-content-end'>
            <button
              onClick={handlePreviousBtn}
              className={`btn text fw-bold text-primary ${
                index ? `d-block` : `d-none`
              }`}
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
