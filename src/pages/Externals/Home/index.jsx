import React from 'react'

import { ExternalLayout, Navbar } from '../../../layout'
import { HOME_CONTENT } from './content'
import Hero from './sections/hero'
import SectionTwo from './sections/sectionTwo'
import SectionThree from './sections/sectionThree'
import SectionFour from './sections/sectionFour'
import SectionFive from './sections/sectionFive'
import SectionSix from './sections/sectionSix'
import GalleryIndex from '../../../components/global/Gallery/GalleryIndex'

const Home = () => {
  const {
    hero,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
  } = HOME_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <Hero content={hero} />
      <SectionTwo content={sectionTwo} />
      <SectionThree content={sectionThree} />
      <SectionFour content={sectionFour} />
      <SectionFive content={sectionFive} />
      <SectionSix content={sectionSix} />
      <GalleryIndex />
    </ExternalLayout>
  )
}

export default Home
