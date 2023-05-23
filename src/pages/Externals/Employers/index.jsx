import React from 'react'
import {
  AboutSectionThree,
  EmployersHero,
  EmployersSectionFour,
  EmployersSectionTwo,
  JobRequirementModal,
} from '../../../components'
import { ExternalLayout, Navbar } from '../../../layout'
import { EMPLOPYERS_CONTENT } from './content'

const index = () => {
  const { hero, sectionTwo, sectionThree, sectionFour } = EMPLOPYERS_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack isEmployersRoute />
      <EmployersHero content={hero} />
      <JobRequirementModal />
      <EmployersSectionTwo content={sectionTwo} />
      {/* using about section three component sructure */}
      <AboutSectionThree textAlignLeft content={sectionThree} />
      <EmployersSectionFour content={sectionFour} />
    </ExternalLayout>
  )
}

export default index
