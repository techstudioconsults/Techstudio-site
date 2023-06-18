import React from 'react'
import PropTypes from 'prop-types'

import { BannerII, Button } from '../../../components'
import Brands from '../../../components/global/brands/Brands'
import { Container, ExternalLayout, Navbar } from '../../../layout'
import { HOME_CONTENT } from '../Home/content'
import SectionFour from '../Home/sections/sectionFour'

import CourseHero from './course/courseHero'
import CourseSectionFour from './course/sectionFour/CourseSectionFour'
import CourseSectionTwo from './course/sectionTwo/CourseSectionTwo'

const index = ({ content, job }) => {
  const { hero, sectionTwo, sectionFour } = content
  const {
    sectionFour: { articleOne, header, body },
  } = HOME_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} />
      <CourseHero content={hero} />
      <CourseSectionTwo content={sectionTwo} />
      <CourseSectionFour content={sectionFour} />
      <Container>
        {/* <Brands /> */}
        <SectionFour isDevelopmentView content={{ articleOne, header, body }} />
      </Container>
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

index.propTypes = {
  content: PropTypes.object.isRequired,
  job: PropTypes.string,
}

export default index
