import React from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { SCALE_ANIMATION } from '../../../gsap'
import Gsap from '../../../hooks/Gsap'
import { Container } from '../../../layout'
import style from './stepper.module.scss'

const ShortStepper = ({ lists, isCourses }) => {
  const { pathname } = useLocation()
  const uniqueCourse = pathname === '/course/instagram-marketing' ? ' align-items-center' : ''

  const listsDisplay = lists.map((list) => {
    return (
      <Gsap key={list.id} animationFuncion={() => SCALE_ANIMATION(list.classname)}>
        <section
          style={{ background: list.id % 2 === 0 ? list.bgColor : 'null' }}
          className={[list.id % 2 === 0 ? `bg-${list.bgColor} ${style.section}` : null, list.bgColor === 'blue' ? 'text-white' : 'text-blue'].join(' ')}
        >
          <Container paddingBlock={0}>
            <div className={[style.step, list.id % 2 === 0 ? style.completed : null].join(' ')}>
              <div className={style.vStepper}>
                <div className={`${style.circle} ${list.classname}`}></div>
                <div className={style.line}></div>
              </div>
              <div className={[style.content, isCourses ? style.contentFlex : null, uniqueCourse].join(' ')}>
                <div className={style.bgwrapper}>
                  <p className={`${style.caption} small-text fw-bold text-primary ${list.classname}`}>{list.caption}</p>
                  <h3
                    className={`${style.title} ${list.classname}`}
                    style={{
                      color: list.id === 4 || list.id === 8 ? 'white' : 'null',
                    }}
                    key={list.id}
                  >
                    {list.title}
                  </h3>
                  <div className={style.textMobile}>
                    <img className={`${list.classname}`} src={list.img} alt='pic' />
                  </div>
                  <p className={`mt-2 mb-10 lh-lg small-text ${list.classname}`}>{list.desc}</p>
                  <div className='d-flex flex-colum flex-wrap gap-2 gap-lg-5'>
                    {list?.tagAttr?.map((tag, index) => {
                      return <TagBox classname={list.classname} key={index} color={tag?.bgColor} img={tag?.img} text={tag?.text} />
                    })}
                  </div>
                </div>
                <div className={style.text}>
                  <img className={`${list.classname}`} src={list.img} alt='pic' />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Gsap>
    )
  })

  return <div className={style.stepper}>{listsDisplay}</div>
}

ShortStepper.propTypes = {
  lists: PropTypes.array,
  isCourses: PropTypes.bool,
}

export default ShortStepper

export const TagBox = ({ text, img, color, classname }) => {
  return (
    <section
      className={`d-flex ${classname} bg-${color} ${
        color === 'blue' ? 'text-white' : 'text-black'
      } align-items-center justify-content-center gap-2 py-3 px-5 rounded`}
    >
      <Icon icon={img} alt='logo' className='' />
      <p className='fw-bold small-text'>{text}</p>
    </section>
  )
}
