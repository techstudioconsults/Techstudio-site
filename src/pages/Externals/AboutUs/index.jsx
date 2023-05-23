import React from 'react'
import {
  AboutHero,
  AboutSectionFour,
  AboutSectionThree,
  // AboutSectionTwo,
  SectionSix,
} from '../../../components'

import { ExternalLayout, Navbar } from '../../../layout'
import { HOME_CONTENT } from '../Home/content'
import { ABOUT_CONTENT } from './content'

const About = () => {
  const {
    hero,
    // sectionTwo,
    sectionThree,
    sectionFour,
  } = ABOUT_CONTENT
  const { sectionSix } = HOME_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack />
      <AboutHero content={hero} />
      {/* <AboutSectionTwo content={sectionTwo} /> */}
      <AboutSectionThree content={sectionThree} />
      <AboutSectionFour content={sectionFour} />
      <SectionSix content={sectionSix} />
    </ExternalLayout>
  )
}

export default About
