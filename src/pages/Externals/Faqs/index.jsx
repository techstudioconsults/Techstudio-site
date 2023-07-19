import React from 'react'

import { ExternalLayout, Navbar } from '../../../layout'

import SectionOne from './sections/sectionOne'
import SectionTwo from './sections/sectionTwo'
// import { FAQ_CONTENT } from './content'

const index = () => {
  // const { accordions } = FAQ_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <SectionOne />
      <SectionTwo />
    </ExternalLayout>
  )
}

export default index
