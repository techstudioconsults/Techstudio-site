import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { Footer, Navbar } from '../../../layout'

import IntroBody from './sections/introBody/IntroBody'
import IntroHeader from './sections/introHeader/IntroHeader'
const baseUrl = import.meta.env.VITE_BASE_URL

const Intro = () => {
  const dispatch = useDispatch()
  const [courses, setCourses] = useState([])

  const getCourses = useCallback(async () => {
    const res = await axios.get(`${baseUrl}/external/courses`)
    dispatch({ type: `app/setCourses`, payload: res.data.data })
    dispatch({ type: `app/setCourseID`, payload: res.data.data[0].id })
    setCourses(res.data.data)
  }, [dispatch])

  useEffect(() => {
    getCourses()
  }, [getCourses])
  return (
    <main>
      <Navbar bg={`transparent`} setTextColorBlack />
      <IntroHeader courses={courses} />
      <IntroBody />
      <Footer />
    </main>
  )
}

export default Intro
