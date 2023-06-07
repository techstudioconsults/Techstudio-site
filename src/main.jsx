// REACT DEFAULTS
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// STYLES
import './index.scss'
import './scss/custom/bs-custom.css'
// COMPONENTS
import App from './App'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import { AppProvider } from './contexts/AppProvider'
import ScrollToTop from './components/global/scroll-to-top/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
// import { PersistGate } from 'redux-persist/integration/react'
import { store } from './app/store'
import { Whatsapp } from './components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
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
