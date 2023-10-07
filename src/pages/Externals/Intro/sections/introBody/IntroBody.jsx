// import React from 'react'
// import { useContext } from 'react'
// import AppContext from '../../../contexts/AppProvider'
// import { Container } from '../../../layout'
// import { INTRO_CONTENT } from '../../../pages/Externals/Intro/content'
// import { useSelector } from 'react-redux'
// import IntroCard from '../../global/cards/introCard/IntroCard'
// import style from './introBody.module.scss'
// import {
//   selectCourseID,
//   selectCoursesExternal,
// } from '../../../app/api/appSlice'

// const IntroBody = () => {
//   const courses = useSelector(selectCoursesExternal)
//   const courseID = useSelector(selectCourseID)

//   const specificCourse = courses.filter((course) => {
//     return course.id === courseID
//   })

//   return (
//     <section className={style.introBody}>
//       <Container>
//         <section className={style.introBodyWrapper}>
//           <IntroCard course={specificCourse[0]} />
//         </section>
//       </Container>
//     </section>
//   )
// }

// export default IntroBody

import React from 'react'
import { useContext } from 'react'

import { IntroCard } from '../../../../../components'
import { genericAnimation } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './introBody.module.scss'

const IntroBody = ({ courseDetails }) => {
  return (
    <section className={style.introBody}>
      <Container>
        <Gsap animationFuncion={() => genericAnimation(`tagDetails`)}>
          <section className={`${style.introBodyWrapper}`}>
            <IntroCard course={courseDetails} />
          </section>
        </Gsap>
      </Container>
    </section>
  )
}

export default IntroBody
