import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CoursesCarousel } from '../../../../../components'
import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './sectioniThree.module.scss'

const SectionThree = ({ content }) => {
  const { header } = content
  return (
    <section className={`${style.sectionThree}`}>
      <div className={style.banner}>
        <Container>
          <section className='d-flex flex-column justify-content-center align-items-center'>
            <p className={`${style.title} sectionThree`}>{header.title}</p>
            <h2 className={`${style.subTitle} sectionThree`}>{header.topic}</h2>
            <p className={`${style.desc} sectionThree`}>{header.description}</p>
          </section>
          <section className='mt-14 mb-8'>
            <CoursesCarousel />
          </section>
        </Container>
      </div>
    </section>
  )
}

export const SectionThreeCard = ({ content }) => {
  return (
    // <Gsap animationFuncion={() => genericAnimation(`sectionThree`)}>
    <div className={`${style.sectionThreeCard} d-flex flex-column align-items-center justify-content-between sectionThree`}>
      <div className={style.cardImg}>
        {/* <img src={content.image} alt='card-img' className='img-fluid' /> */}
        <img alt='card-img' data-sizes='auto' src={content.imageLow} data-src={content.image} className='lazyload img-fluid' />
      </div>
      <div className={`text-center`}>
        <h3 className='mt-5'>{content.title}</h3>
        <p className='fs-sm'>{content.description}</p>
      </div>
      <Link className='mt-5' to={content.path}>
        <button style={{ border: `2px solid #0266f4` }} className='btn btn-outline-primary px-10 py-0 fw-semibold btn-text'>
          View Course
        </button>
      </Link>
    </div>
    // </Gsap>
  )
}

SectionThree.propTypes = {
  content: PropTypes.object.isRequired,
}
SectionThreeCard.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionThree
