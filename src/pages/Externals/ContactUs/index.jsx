import React from 'react'
// import { ContactHero, ContactSectionTwo } from '../../../components'
import { ExternalLayout, Navbar } from '../../../layout'
import { CONTACT_CONTENT } from './content'
import Map from './sections/ContactSection2/Map'
import ContactHero from './sections/ContactHero/ContactHero'
import ContactSection1 from './sections/ContactSection1/ContactSection1'

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
      {/* <ContactHero content={hero} /> */}
      {/* <ContactSectionTwo content={location} /> */}
    </ExternalLayout>
  )
}

export default index
