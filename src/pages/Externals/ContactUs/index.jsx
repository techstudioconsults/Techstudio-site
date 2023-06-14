import React from 'react'

// import { ContactHero, ContactSectionTwo } from '../../../components'
import { ExternalLayout, Navbar } from '../../../layout'
import ContactSection3 from '../ContactUs/sections/ContactSection3/ContactSection3'

import ContactHero from './sections/ContactHero/ContactHero'
import ContactSection1 from './sections/ContactSection1/ContactSection1'
import Map from './sections/ContactSection2/Map'
import { CONTACT_CONTENT } from './content'

const index = () => {
  const { hero, location } = CONTACT_CONTENT
  const mapLocation = {
    address: 'yemsays map',
    lat: 6.53577,
    lng: 3.36596,
    header: 'hello',
  }
  const form = {
    header: 'hello header',
    address: 'hello address',
  }

  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <ContactHero content={hero} />
      <ContactSection1 content={location} />
      <section className='mt-10'>
        <Map location={mapLocation} />
      </section>
    </ExternalLayout>
  )
}

export default index
