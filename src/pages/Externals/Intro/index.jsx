import React, { useCallback, useEffect, useState } from 'react'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import AppContext from '../../../contexts/AppProvider'
import { Footer, Navbar } from '../../../layout'

import IntroBody from './sections/introBody/IntroBody'
import IntroHeader from './sections/introHeader/IntroHeader'
const baseUrl = import.meta.env.VITE_BASE_URL

const Intro = () => {
  const { courseID, getCourseID } = useContext(AppContext)
  const [courses, setCourses] = useState([])

  console.log(courseID)

  const getCourses = useCallback(async () => {
    const res = await axios.get(`${baseUrl}/external/courses`)
    getCourseID(res.data.data[0].id)
    setCourses(res.data.data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getFilteredCourse = courses.filter((course) => {
    return course.id === courseID
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
