import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { REACT_IMG_ANIMATION } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'
import { Container } from '../../../layout'

import style from './stepper.module.scss'

const ShortStepper = ({ lists, isCourses }) => {
  const listsDisplay = lists.map((list) => {
    return (
      <section
        style={{ background: list.id % 2 === 0 ? list.bgColor : `null` }}
        className={[
          list.id % 2 === 0 ? `bg-${list.bgColor} ${style.section}` : null,
          list.bgColor === `blue` ? `text-white` : `text-blue`,
        ].join(' ')}
        key={list.id}
      >
        <Container paddingBlock={0}>
          <div
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
              className={[
                style.content,
                isCourses ? style.contentFlex : null,
              ].join(' ')}
            >
              <div className={style.bgwrapper}>
                <p className={`${style.caption} fs-xs fw-bold text-primary`}>
                  {list.caption}
                </p>
                <p className={`${style.title} fs-xl fs-lg-3xl`}>{list.title}</p>
                <p className={`mt-2 mb-10 lh-lg`}>{list.desc}</p>
                <div className='d-flex flex-column flex-md-row gap-5'>
                  {list?.tagAttr?.map((tag, index) => {
                    return (
                      <TagBox
                        key={index}
                        color={tag?.bgColor}
                        img={tag?.img}
                        text={tag?.text}
                      />
                    )
                  })}
                </div>
              </div>

              <div className={style.text}>
                <img className={`${list.className}`} src={list.img} alt='pic' />
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  })
  return (
    <Gsap animationFuncion={REACT_IMG_ANIMATION}>
      <div className={style.stepper}>{listsDisplay}</div>
    </Gsap>
  )
}

ShortStepper.propTypes = {
  lists: PropTypes.array,
  isCourses: PropTypes.bool,
}

export default ShortStepper

export const TagBox = ({ text, img, color }) => {
  return (
    <section
      className={`d-flex bg-${color} ${
        color == `blue` ? `text-white` : `text-black`
      } align-items-center justify-content-center gap-2 py-3 px-5 rounded`}
    >
      {/* <div className='fs-2xl'> */}
      <Icon icon={img} alt='logo' className='fs-3xl' />
      {/* </div> */}
      <p className='fw-bold fs-sm'>{text}</p>
    </section>
  )
}
