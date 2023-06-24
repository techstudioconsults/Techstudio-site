import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { BannerII, Button } from '../../../components'
import CourseBanner from '../../../components/global/banners/CourseBanner'
import Brands from '../../../components/global/brands/Brands'
import { Container, ExternalLayout, Navbar } from '../../../layout'
import SectionTwo from '../Faqs/sections/sectionTwo'
import { HOME_CONTENT } from '../Home/content'
import SectionFour from '../Home/sections/sectionFour'

import CourseHero from './course/courseHero'
import CourseSectionFour from './course/sectionFour/CourseSectionFour'
import CourseSectionTwo from './course/sectionTwo/CourseSectionTwo'

const Development = ({ content, job }) => {
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

  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <CourseHero content={hero} />
      <section style={style} className='m-auto mt-10 mt-lg-0'>
        <CourseBanner duration={duration} />
      </section>
      <CourseSectionTwo content={sectionTwo} />
      <CourseSectionFour content={sectionFour} />
      {/* <Container> */}
      {/* <Brands /> */}
      <SectionFour isDevelopmentView content={{ articleOne, header, body }} />
      {/* </Container> */}
      {/* faq */}
      <section>
        <Container>
          <h3 className='text-center'>{hero.title} FAQs</h3>
          <SectionTwo />
        </Container>
      </section>
      <section className='my-lg-32'>
        <Container>
          <BannerII>
            <div className='ms-3 ms-lg-40 text-white py-20 py-xl-0'>
              <span>Want to start a career as a {job} ?</span>
              <h3 className='mt-7 fw-bold text-white fs-2xl'>
                Get started with TechStudio
              </h3>
              <div className='w-50'>
                <Button
                  linkHref='/student/register'
                  linkText='Register Now'
                  solidBtn
                  navBtn
                  width={`14`}
                />
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
