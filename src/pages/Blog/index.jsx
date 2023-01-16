import React from 'react'
import {
  BlogHero,
  BlogSectionThree,
  BlogSectionTwo,
  SectionThree,
} from '../../components'
import { ExternalLayout } from '../../layout'

import { HOME_CONTENT } from '../Home/content'
import { BLOG_CONTENT } from './content'

const Home = () => {
  const { sectionThree } = HOME_CONTENT
  const { hero, sectionThree_blog } = BLOG_CONTENT
  return (
    <ExternalLayout>
      <BlogHero content={hero} />
      <BlogSectionTwo />
      <BlogSectionThree content={sectionThree_blog} />
      <SectionThree content={sectionThree} />
    </ExternalLayout>
  )
}

export default Home
