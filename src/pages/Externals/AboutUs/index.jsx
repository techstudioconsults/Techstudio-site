import React from 'react'

import { BannerII, Button } from '../../../components'
import GalleryIndex from '../../../components/global/carousel/Gallery/GalleryIndex'
import { Container, ExternalLayout, Navbar } from '../../../layout'

// import { HOME_CONTENT } from '../Home/content'
import { ABOUT_CONTENT } from './content/index'
import AboutHero from './sections/AboutHero/AboutHero'
import AboutSection2 from './sections/AboutSection2/AboutSection2'
import AboutSection3 from './sections/AboutSection3/AboutSection3'
import AboutSection4 from './sections/AboutSection4/AboutSection4'

const index = () => {
  const { hero, sectionTwo, sectionThree, sectionFour } = ABOUT_CONTENT
  // const { sectionSix } = HOME_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack />
      {/* <AboutHero content={hero} /> */}
      <AboutHero content={hero} />
      <AboutSection2 content={sectionTwo} />
      <AboutSection3 content={sectionThree} />
      <GalleryIndex />
      <AboutSection4 content={sectionFour} />
      <section className='my-lg-32'>
        <Container>
          <BannerII>
            <div className='ms-10 ms-lg-40 text-white py-20 py-xl-0 '>
              <span>Want to start a career in Tech ?</span>
              <h3 className='mt-3 mb-10 fw-bold text-white'>Get started with TechStudio</h3>
              <div className='w-50'>
                <Button linkHref='/our-courses' linkText='Explore Courses' solidBtn navBtn width={`14`} />
              </div>
            </div>
          </BannerII>
        </Container>
      </section>
    </ExternalLayout>
  )
}

export default index
