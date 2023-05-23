import React from 'react'
import { ContactHero, ContactSectionTwo } from '../../../components'
import { ExternalLayout, Navbar } from '../../../layout'
import { CONTACT_CONTENT } from './content'

const index = () => {
  const { hero, location } = CONTACT_CONTENT

  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <ContactHero content={hero} />
      <ContactSectionTwo content={location} />
    </ExternalLayout>
  )
}

export default index
