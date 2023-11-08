import GalleryIndex from '../../../components/global/carousel/Gallery/GalleryIndex'
import { ExternalLayout, Navbar } from '../../../layout'

import Hero from './sections/hero'
import SectionFive from './sections/sectionFive'
import SectionFour from './sections/sectionFour'
import SectionSeven from './sections/sectionSeven'
import SectionSix from './sections/sectionSix'
import SectionThree from './sections/sectionThree'
import SectionTwo from './sections/sectionTwo'
import { HOME_CONTENT } from './content'

// import { Whatsapp } from '../../../components'

const Home = () => {
  const { hero, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix, sectionSeven } = HOME_CONTENT

  return (
    <div>
      <ExternalLayout>
        <Navbar bg={`transparent`} keepColor />
        <>
          <Hero content={hero} />
          <SectionTwo content={sectionTwo} />
          <SectionThree content={sectionThree} />
          <SectionFour content={sectionFour} />
          <SectionFive content={sectionFive} />
          <GalleryIndex />
          <SectionSeven data={sectionSeven.upcomingClasses} />
          <SectionSix content={sectionSix} />
        </>
      </ExternalLayout>
    </div>
  )
}

export default Home
