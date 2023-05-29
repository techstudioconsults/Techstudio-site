import React from 'react'
import { IntroBody, IntroHeader } from '../../../components'
import { Footer, Navbar } from '../../../layout'

const index = () => {
  return (
    <main>
      <Navbar bg={`transparent`} setTextColorBlack />
      <IntroHeader />
      <IntroBody />
      <Footer />
    </main>
  )
}

export default index
