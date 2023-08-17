import React, { useCallback, useEffect, useState } from 'react'
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
  const [courses, setCourses] = useState([])

  const getCourses = useCallback(() => {
    getCourseID(upcomingCourses[0]?.id)
    setCourses(upcomingCourses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getFilteredCourse = courses.filter((course) => {
    return course?.id === courseID
  })

  useEffect(() => {
    getCourses()
  }, [getCourses])
  return (
    <main>
      <Navbar bg={`transparent`} setTextColorBlack />
      <IntroHeader courses={courses} />
      <IntroBody courseDetails={getFilteredCourse?.[0]} />
      <Footer />
    </main>
  )
}

export default Intro
