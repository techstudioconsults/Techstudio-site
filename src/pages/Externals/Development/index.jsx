import React from 'react'
import PropTypes from 'prop-types'
import { Container, ExternalLayout, Navbar } from '../../../layout'
import {
  BannerII,
  Button,
  CourseHero,
  CourseSectionFour,
  CourseSectionTwo,
} from '../../../components'

const index = ({ content }) => {
  const { hero, sectionTwo, sectionFour } = content
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack />
      <CourseHero content={hero} />
      <CourseSectionTwo content={sectionTwo} />
      <section className='my-lg-32'>
        <Container>
          <BannerII>
            <div className='ms-3 ms-lg-40 text-white py-20 py-xl-0'>
              <span>Want to start a career in {hero.title} ?</span>
              <h3 className='mt-7 fw-bold text-white'>
                Get started with Techstudio
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
      <CourseSectionFour content={sectionFour} />
    </ExternalLayout>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
