import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

import { BannerII, Button } from '../../../components'
import CourseBanner from '../../../components/global/banners/CourseBanner'
import { Container, ExternalLayout, Navbar } from '../../../layout'
import { selectExternalCourses } from '../api/externalSlice'
import { DEVELOPMENT_CONTENT } from '../Development/content'
import CourseHero from '../Development/course/courseHero'
import CourseSectionFour from '../Development/course/sectionFour/CourseSectionFour'
import CourseSectionTwo from '../Development/course/sectionTwo/CourseSectionTwo'
import SectionTwo from '../Faqs/sections/sectionTwo'
import { HOME_CONTENT } from '../Home/content'
import SectionFour from '../Home/sections/sectionFour'

const baseUrl = import.meta.env.VITE_BASE_URL
const DigitalMarketing = () => {
  const [weekday, setWeeekday] = useState('')
  const [weekend, setWeeekend] = useState('')
  const [formattedStartDate, setFormattedStartDate] = useState('')
  const [formattedPriorDate, setFormattedPriorDate] = useState('')
  const dispatch = useDispatch()
  const upcomingCourse = useSelector(selectExternalCourses)

  const filterCourse = (upcomingCourse, title) => {
    return upcomingCourse?.filter((course) => course.title.toLowerCase().includes(title))
  }
  const digitalMarketing = filterCourse(upcomingCourse, 'digital marketing ')

  const [courseData] = digitalMarketing
  const name = 'digital marketing'

  const courseID = courseData?.id
  const courseName = courseData?.title

  // Function to convert date to a readable format
  const formatDate = (date) => {
    if (!date) return '' // Handle null or undefined case
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
  }

  // Function to get two days prior to the given date for weekend class
  const getTwoDaysPrior = (startDate) => {
    if (!startDate) return null // Handle null or undefined case
    const newDate = new Date(startDate)
    newDate.setDate(newDate.getDate() - 2)
    return newDate
  }

  useEffect(() => {
    // Get the start date
    const startDate = courseData?.startDate

    // Convert start date to readable format
    const formattedStartDate = formatDate(startDate)
    setFormattedStartDate(formattedStartDate)

    // Get two days prior to the start date
    const priorDate = getTwoDaysPrior(startDate)
    const formattedPriorDate = formatDate(priorDate)
    setFormattedPriorDate(formattedPriorDate)
  }, [courseData?.startDate]) // Run only when courseData?.startDate changes

  // Update weekday and weekend accordingly
  useEffect(() => {
    setWeeekday(formattedStartDate)
    setWeeekend(formattedPriorDate)
  }, [formattedStartDate, formattedPriorDate])

  console.log(weekday, weekend)

  const {
    sectionFour: { articleOne, header, body },
  } = HOME_CONTENT

  //   const { hero, sectionTwo, sectionFour, duration } = DEVELOPMENT_CONTENT
  // console.log(DEVELOPMENT_CONTENT.cyberSecurity)

  const courseDetails = DEVELOPMENT_CONTENT.digitalMarketing
  const { hero, sectionTwo, sectionFour, duration } = courseDetails

  // console.log(sectionTwo);

  const style = useMemo(() => {
    const baseStyle = {
      borderRadius: `8.33846px`,
      transform: `translateY(-50%)`,
      position: `relative`,
      maxWidth: `1080px`,
    }

    if (window.innerWidth <= 767) {
      baseStyle.transform = `static`
      baseStyle.width = `90%`
    }
    return baseStyle
  }, [])

  const getFAQ = useCallback(async () => {
    try {
      // const res = await axios.get(`${baseUrl}/external/faq?search=${query}`)
      const res = await axios.get(`${baseUrl}/external/faq`)
      dispatch({ type: `app/setFAQ`, payload: res.data.data })
      // setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [dispatch])

  useEffect(() => {
    getFAQ()
  }, [getFAQ])

  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <CourseHero content={hero} courseName={courseName} courseID={courseID} />
      <section style={style} className='m-auto mt-10 mt-lg-0'>
        <CourseBanner name={name} duration={duration} weekday={weekday} weekend={weekend} />
      </section>
      <CourseSectionTwo content={sectionTwo} />
      <CourseSectionFour content={sectionFour} />
      <SectionFour isDevelopmentView content={{ articleOne, header, body }} />
      <section>
        <Container>
          <h3 className='text-center'>
            {/* {hero.title} */}
            FAQs
          </h3>
          <SectionTwo />
        </Container>
      </section>
      <section className='my-lg-32 my-sm-3'>
        <Container>
          <BannerII>
            <div className='ms-lg-40 text-white py-5 py-xl-0 px-5 px-lg-0'>
              <span>Want to start a career as Digital Marketer?</span>
              <h3 className='mt-7 fw-bold text-white'>Get started with TechStudio</h3>
              <div className='w-50'>
                <Button linkHref='/student/register' linkText='Register Now' solidBtn navBtn width={`14`} />
              </div>
            </div>
          </BannerII>
        </Container>
      </section>
    </ExternalLayout>
  )
}

export default DigitalMarketing
