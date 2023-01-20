import React from 'react'
import { EmployersHero } from '../../components'
import { ExternalLayout, Navbar } from '../../layout'
import { EMPLOPYERS_CONTENT } from './content'

const index = () => {
  const { hero } = EMPLOPYERS_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} setTextColorBlack isEmployersRoute />
      <EmployersHero content={hero} />
    </ExternalLayout>
  )
}

export default index
