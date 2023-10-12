// REACT DEFAULTS
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'lazysizes'
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

// import { PersistGate } from 'redux-persist/integration/react'
import { store } from './app/store'
import ScrollToTop from './components/global/scroll-to-top/ScrollToTop'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import { AppProvider } from './contexts/AppProvider'
import MetaPixel from './util/meta/metaPixel'
// COMPONENTS
import App from './App'
import { Whatsapp } from './components'

// STYLES
import './index.scss'
import './scss/custom/bs-custom.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <MetaPixel />
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <Whatsapp />
        <App />
      </AppProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
)
