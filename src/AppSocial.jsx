// REACT DEFAULTS
import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from './components'
import Facebook from './pages/Facebook'

const AppSocial = () => {
  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Routes>
        <Route index element={<Facebook />} />
      </Routes>
    </Suspense>
  )
}

export default AppSocial
