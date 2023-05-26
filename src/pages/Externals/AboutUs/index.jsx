import React from 'react'
import AboutHero from '../AboutUs/sections/AboutHero/AboutHero'
import AboutSection2 from './sections/AboutSection2/AboutSection2'
import AboutSection3 from './sections/AboutSection3/AboutSection3'
import AboutSection4 from './sections/AboutSection4/AboutSection4'

import { ExternalLayout, Navbar } from '../../../layout'
// import { HOME_CONTENT } from '../Home/content'
import { ABOUT_CONTENT } from './content/index'
import GalleryIndex from '../../../components/global/Gallery/GalleryIndex'

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
      {/* <AboutSectionTwo content={sectionTwo} /> */}
      {/* <AboutSectionThree content={sectionThree} /> */}
      {/* <AboutSectionFour content={sectionFour} /> */}
      {/* <SectionSix content={sectionSix} /> */}
    </ExternalLayout>
  )
}

export default index
