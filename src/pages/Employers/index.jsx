import React from 'react'
import { EmployersHero, EmployersSectionTwo } from '../../components'
import { ExternalLayout, Navbar } from '../../layout'
import { EMPLOPYERS_CONTENT } from './content'

const index = () => {
  const { hero, sectionTwo } = EMPLOPYERS_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack isEmployersRoute />
      <EmployersHero content={hero} />
      <EmployersSectionTwo content={sectionTwo} />
    </ExternalLayout>
  )
}

export default index
