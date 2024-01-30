import React from 'react'
import { Link } from 'react-router-dom'
import map from '@assets/images/location.png'

// import { ContactHero, ContactSectionTwo } from '../../../components'
import { ExternalLayout, Navbar } from '../../../layout'

import ContactHero from './sections/ContactHero/ContactHero'
import ContactSection1 from './sections/ContactSection1/ContactSection1'
// import Map from './sections/ContactSection2/Map'
import { CONTACT_CONTENT } from './content'

const index = () => {
  const { hero, location } = CONTACT_CONTENT
  // const mapLocation = {
  //   address: 'yemsays map',
  //   lat: 6.53577,
  //   lng: 3.36596,
  //   header: 'hello',
  // }
  // const form = {
  //   header: 'hello header',
  //   address: 'hello address',
  // }

  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <ContactHero content={hero} />
      <ContactSection1 content={location} />
      <Link
        className='cc-link-hover-img'
        target='_blank'
        style={{ display: `block`, width: `100%` }}
        to={`https://www.google.com/maps/place/Tech+Studio+Academy+%7C+Tech+Training+Institute+in+Lagos/@6.5355864,3.3653758,19z/data=!3m1!4b1!4m6!3m5!1s0x103b8dba7bad97cb:0xae0bc176821041e5!8m2!3d6.5355851!4d3.3660195!16s%2Fg%2F11h4zqnp1s?authuser=0&entry=ttu`}
      >
        <section style={{ height: `20rem` }}>
          <img
            style={{
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `contain`,
            }}
            width={`100%`}
            height={`100%`}
            className='cc-img-fluid'
            src={map}
            alt={`map`}
          />
          {/* <Map location={mapLocation} /> */}
        </section>
      </Link>
    </ExternalLayout>
  )
}

export default index
