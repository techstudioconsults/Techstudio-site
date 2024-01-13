import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import { selectExternalCourses } from '../api/externalSlice'
import { HOME_CONTENT } from '../Home/content'
import { BannerII, Button } from '../../../components'
import CourseBanner from '../../../components/global/banners/CourseBanner'
import { Container, ExternalLayout, Navbar } from '../../../layout'
import SectionFour from '../Home/sections/sectionFour'
import CourseHero from '../Development/course/courseHero'
import SectionTwo from '../Faqs/sections/sectionTwo'
import CourseSectionFour from '../Development/course/sectionFour/CourseSectionFour'
import CourseSectionTwo from '../Development/course/sectionTwo/CourseSectionTwo'
import { DEVELOPMENT_CONTENT } from '../Development/content'

const baseUrl = import.meta.env.VITE_BASE_URL

const UiUxDevelopment = () => {
    const dispatch = useDispatch()
    const upcomingCourse = useSelector(selectExternalCourses)
  
    const filterCourse = (upcomingCourse, title) => {
      return upcomingCourse.filter((course) => course.title.toLowerCase().includes(title))
    }
    const productDesign = filterCourse(upcomingCourse, 'product design ui/ux')
    // console.log(productDesign)
    const [courseData] = productDesign
  //   const name = courseData.title
    // console.log(courseData)
    const {
      sectionFour: { articleOne, header, body },
    } = HOME_CONTENT
  
    
    // console.log(DEVELOPMENT_CONTENT.UIUXDevelopment)
  
    const courseDetails = DEVELOPMENT_CONTENT.UIUXDevelopment
    // console.log(courseDetails)
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
  <CourseHero content={hero} courseName={productDesign.title} courseID={productDesign.id} />
  <section style={style} className='m-auto mt-10 mt-lg-0'>
    <CourseBanner name={productDesign.title} duration={duration} />
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
          <span>Want to start a career as a Product Designer?</span>
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


export default UiUxDevelopment