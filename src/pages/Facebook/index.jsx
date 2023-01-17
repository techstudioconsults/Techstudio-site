import React from 'react'

import { CourseSectionTwo, FacebookHero } from '../../components'
import SocialLayout from '../../layout/Layout/sociallayout'
import { FACEBOOK_CONTENT } from './content'

const Facebook = () => {
  const { heroSection, sectionTwo } = FACEBOOK_CONTENT
  return (
    <SocialLayout>
      <FacebookHero content={heroSection} />
      <CourseSectionTwo content={sectionTwo} />
    </SocialLayout>
  )
}

export default Facebook
