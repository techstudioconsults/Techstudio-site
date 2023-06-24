import React from 'react'

import { ExternalLayout, Navbar } from '../../../layout'

import EmployersHero from './sections/hero/EmployerHero'
import EmployersSectionFour from './sections/sectionFour'
import EmployersSectionTwo from './sections/sectionTwo'
import { EMPLOPYERS_CONTENT } from './content'

const index = () => {
  const { hero, sectionTwo, sectionThree, sectionFour } = EMPLOPYERS_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack />
      <EmployersHero content={hero} />
      <EmployersSectionTwo content={sectionTwo} />
      {/* using about section three component sructure */}
      {/* <AboutSectionThree textAlignLeft content={sectionThree} /> */}
      <EmployersSectionFour content={sectionFour} />
    </ExternalLayout>
  )
}

export default index
