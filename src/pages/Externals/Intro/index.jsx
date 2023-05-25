import React from 'react'
import { IntroBody, IntroHeader } from '../../../components'
import MinimalFooter from '../../../layout/MinimalFooter'
import { Footer, Navbar } from '../../../layout'

const index = () => {
  return (
    <main>
      <Navbar bg={`transparent`} />
      <IntroHeader />
      <IntroBody />
      <Footer />
    </main>
  )
}

export default index
