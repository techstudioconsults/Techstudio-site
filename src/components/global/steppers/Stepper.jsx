import React from 'react'
import PropTypes from 'prop-types'

import { genericAnimation } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'

import style from './stepper.module.scss'

const Stepper = ({ lists, isCourses }) => {
  const listsDisplay = lists.map((list) => {
    return (
      <div
        key={list.id}
        className={[
          style.step,
          list.id % 2 === 0 ? style.completed : null,
        ].join(' ')}
      >
        <div className={style.vStepper}>
          <div className={style.circle}></div>
          <div className={style.line}></div>
        </div>

        <div
          className={[style.content, isCourses ? style.contentFlex : null].join(
            ' '
          )}
        >
          <Gsap animationFuncion={() => genericAnimation(`stepper`)}>
            <h4 className={`${style.title} stepper`}>{list.title}</h4>
            <p className={`${style.text} stepper`}>{list.desc}</p>
          </Gsap>
        </div>
      </div>
    )
  })
  return <div className={style.stepper}>{listsDisplay}</div>
}

Stepper.propTypes = {
  lists: PropTypes.array,
  isCourses: PropTypes.bool,
}

export default Stepper
