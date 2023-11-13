import React from 'react'
import PropTypes from 'prop-types'

import { genericAnimation, SCALE_ANIMATION } from '../../../../gsap'
import Gsap from '../../../../hooks/Gsap'

const CourseCard = ({ card }) => {
  return (
    <div className='d-flex flex-column text-center'>
      <Gsap animationFuncion={() => SCALE_ANIMATION(`scale`)}>
        <div className='imgContainer mb-7 scale'>
          <img src={card.img} alt='number' />
        </div>
      </Gsap>
      <Gsap animationFuncion={() => genericAnimation(`text`)}>
        <p className='card-text text'>{card.text}</p>
      </Gsap>
    </div>
  )
}

CourseCard.propTypes = {
  card: PropTypes.object.isRequired,
}

export default CourseCard
