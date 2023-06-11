import React, { useCallback, useEffect, useState } from 'react'

import { ExternalLayout, Navbar } from '../../../layout'
import { HOME_CONTENT } from './content'
import Hero from './sections/hero'
import SectionTwo from './sections/sectionTwo'
import SectionThree from './sections/sectionThree'
import SectionFour from './sections/sectionFour'
import SectionFive from './sections/sectionFive'
import SectionSix from './sections/sectionSix'
import GalleryIndex from '../../../components/global/carousel/Gallery/GalleryIndex'
import SectionSeven from './sections/sectionSeven'

// import { Whatsapp } from '../../../components'

const Home = () => {
  const {
    hero,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
    sectionSeven,
  } = HOME_CONTENT

  return (
    <div>
      <ExternalLayout>
        <Navbar bg={`transparent`} keepColor />
        {/* <GalleryIndex /> */}
        <>
          <Hero content={hero} />
          <SectionTwo content={sectionTwo} />
          <SectionThree content={sectionThree} />
          <SectionFour content={sectionFour} />
          <SectionFive content={sectionFive} />
          <GalleryIndex />
          <SectionSeven data={sectionSeven.upcomingClasses} />
          <SectionSix content={sectionSix} />
        </>
      </ExternalLayout>
    </div>
  )
}

export default Home
