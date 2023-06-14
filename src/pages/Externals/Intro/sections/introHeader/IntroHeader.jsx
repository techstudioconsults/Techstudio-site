import React from 'react'
import { useContext } from 'react'

import AppContext from '../../../../../contexts/AppProvider'
import { Container } from '../../../../../layout'

// import logo from '../../../assets/icons/logo.png'
import style from './introHeader.module.scss'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectCoursesExternal } from '../../../app/api/appSlice'

const IntroHeader = () => {
  const { index, getCourseDetails } = useContext(AppContext)

  const handleClick = (e) => {
    let name = e.target.name
    getCourseDetails(name)
  }

  // const tags = courses.map((course) => {
  //   return (
  //     <button
  //       id={course.id}
  //       key={course.id}
  //       onClick={handleClick}
  //       name={courses.id}
  //       className={[style.courseBtn].join(' ')}
  //     >
  //       {course.title}
  //     </button>
  //   )
  // })

  return (
    <div className={style.introHeader}>
      <Container>
        <section className={style.introHeaderWapper}>
          <div className={style.text}>
            <h2 className={style.title}>Our Courses</h2>
            <p className={style.subTitle}>
              Select any of our courses to get started on your tech journey
            </p>
          </div>
          <div
            className={`${style.btnGroup} d-flex flex-column flex-lg-row gap-3 gap-lg-5`}
          >
            <button
              onClick={handleClick}
              name={0}
              className={[
                style.courseBtn,
                index === 0 ? style.active : null,
              ].join(' ')}
            >
              Product Design
            </button>
            <button
              onClick={handleClick}
              name={1}
              className={[
                style.courseBtn,
                index === 1 ? style.active : null,
              ].join(' ')}
            >
              Fullstack Development
            </button>
            <button
              onClick={handleClick}
              name={2}
              className={[
                style.courseBtn,
                index === 2 ? style.active : null,
              ].join(' ')}
            >
              Data Science
            </button>
            <button
              disabled
              onClick={handleClick}
              name={3}
              className={[
                style.courseBtn,
                index === 3 ? style.active : null,
              ].join(' ')}
            >
              Frontend Development
            </button>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default IntroHeader
