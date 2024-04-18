import React from 'react'
import { useContext } from 'react'

import AppContext from '../../../../../contexts/AppProvider'
// import { genericAnimation } from '../../../../../gsap'
// import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

// import logo from '../../../assets/icons/logo.png'
import style from './introHeader.module.scss'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectCoursesExternal } from '../../../app/api/appSlice'

const IntroHeader = ({ courses }) => {
  const { courseID, getCourseID } = useContext(AppContext)

  const handleClick = (e) => {
    let id = e.target.id
    getCourseID(id)
  }

  const displayCourses = courses.map((course) => {
    return (
      <button
        key={course.id}
        onClick={handleClick}
        id={course.id}
        className={[style.courseBtn, `tag small-text `, courseID === course.id ? style.active : null].join(' ')}
      >
        {course.title}
      </button>
    )
  })

  return (
    // <Gsap animationFuncion={() => genericAnimation(`tag small-text`)}>
    <div className={style.introHeader}>
      <Container>
        <section className={style.introHeaderWapper}>
          <div className={`${style.text} tag small-text`}>
            <h2 className={`${style.title} mt-10`}>Our Courses</h2>
            <p className={style.subTitle}>Select any of our courses to get started on your tech journey</p>
          </div>
          <div className={`${style.btnGroup} d-flex flex-column flex-lg-row gap-3 gap-lg-5 tag small-text`}>{displayCourses}</div>
        </section>
      </Container>
    </div>
    // </Gsap>
  )
}

export default IntroHeader
