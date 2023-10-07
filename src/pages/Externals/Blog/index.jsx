import React from 'react'

import { ExternalLayout, Navbar } from '../../../layout'

import BlogHero from './sections/hero/BlogHero'
import BlogSectionThree from './sections/sectionThree'
import BlogSectionTwo from './sections/sectionTwo'
// import { HOME_CONTENT } from '../Home/content'
import { BLOG_CONTENT } from './content'

const Home = () => {
  // const { sectionThree } = HOME_CONTENT
  const { hero, sectionThree_blog } = BLOG_CONTENT
  return (
    <ExternalLayout>
      <Navbar bg={`transparent`} keepColor />
      <BlogHero content={hero} />
      <BlogSectionTwo />
      <BlogSectionThree content={sectionThree_blog} />
    </ExternalLayout>
  )
}

export default Home
