import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

import AppContext from '../../../contexts/AppProvider'
import { Footer, Navbar } from '../../../layout'
import { selectExternalCourses } from '../api/externalSlice'

import IntroBody from './sections/introBody/IntroBody'
import IntroHeader from './sections/introHeader/IntroHeader'

const Intro = () => {
  const { courseID, getCourseID } = useContext(AppContext)
  const upcomingCourses = useSelector(selectExternalCourses)

  const getFilteredCourse = upcomingCourses.filter((course) => {
    return course?.id === courseID
  })

  useEffect(() => {
    getCourseID(upcomingCourses[0]?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upcomingCourses])

  return (
    <main>
      <Navbar bg={`transparent`} setTextColorBlack />
      <IntroHeader courses={upcomingCourses} />
      <IntroBody courseDetails={getFilteredCourse?.[0]} />
      <Footer />
    </main>
  )
}

export default Intro
