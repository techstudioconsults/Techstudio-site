import React from 'react'
import { ContactHero, ContactSectionTwo } from '../../../components'
import { ExternalLayout, Navbar } from '../../../layout'
import { CONTACT_CONTENT } from './content'
import Map from './Map'

const index = () => {
  const { hero, location } = CONTACT_CONTENT
  const mapLocation = {
    address: 'yemsays map',
    lat: 6.53577,
    lng: 3.36596,
  }

  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <ContactHero content={hero} />
      <ContactSectionTwo content={location} />
      <section style={{ width: `100%`, height: `50rem`, background: `green` }}>
        <Map location={mapLocation} />
      </section>
    </ExternalLayout>
  )
}

export default index
