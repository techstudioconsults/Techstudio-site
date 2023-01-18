import React from 'react'

import styles from './facebook.module.scss'
import {
  CourseSectionFour,
  CourseSectionTwo,
  FacebookHero,
  FacebookSectionFour,
  FacebookSectionSeven,
} from '../../components'
import SocialLayout from '../../layout/Layout/sociallayout'
import { FACEBOOK_CONTENT } from './content'

const Facebook = () => {
  const { heroSection, sectionTwo, sectionThree, sectionFour, sectionSeven } =
    FACEBOOK_CONTENT
  return (
    <SocialLayout>
      <FacebookHero content={heroSection} />
      <CourseSectionTwo content={sectionTwo} />
      <section className={styles.sectionFour}>
        <CourseSectionFour content={sectionThree} />
      </section>
      <FacebookSectionFour content={sectionFour} />
      <FacebookSectionSeven content={sectionSeven} />
    </SocialLayout>
  )
}

export default Facebook
