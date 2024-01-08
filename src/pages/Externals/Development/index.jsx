import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

import { BannerII, Button } from '../../../components'
import CourseBanner from '../../../components/global/banners/CourseBanner'
import { Container, ExternalLayout, Navbar } from '../../../layout'
import SectionTwo from '../Faqs/sections/sectionTwo'
import { HOME_CONTENT } from '../Home/content'
import SectionFour from '../Home/sections/sectionFour'

import CourseHero from './course/courseHero'
import CourseSectionFour from './course/sectionFour/CourseSectionFour'
import CourseSectionTwo from './course/sectionTwo/CourseSectionTwo'

const baseUrl = import.meta.env.VITE_BASE_URL

const Development = ({ content, job, query, name, courseID }) => {
  const dispatch = useDispatch()
  const { hero, sectionTwo, sectionFour, duration } = content
  const {
    sectionFour: { articleOne, header, body },
  } = HOME_CONTENT

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
      <CourseHero content={hero} courseName={name} courseID={courseID} />
      <section style={style} className='m-auto mt-10 mt-lg-0'>
        <CourseBanner name={name} duration={duration} />
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
            <div className='ms-lg-40 text-white py-xl-0 px-5 py-5 px-lg-0'>
              <span>Want to start a career as a {job} ?</span>
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

Development.propTypes = {
  content: PropTypes.object.isRequired,
  job: PropTypes.string,
}

export default Development
