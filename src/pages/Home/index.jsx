import React from 'react'
import {
  Hero,
  SectionSix,
  SectionFive,
  SectionFour,
  SectionThree,
  SectionTwo,
} from '../../components'
import { ExternalLayout } from '../../layout'
import { HOME_CONTENT } from './content'

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
      <Hero content={hero} />
      <SectionTwo content={sectionTwo} />
      <SectionThree content={sectionThree} />
      <SectionFour content={sectionFour} />
      <SectionFive content={sectionFive} />
      <SectionSix content={sectionSix} />
    </ExternalLayout>
  )
}

export default Home
