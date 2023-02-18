// REACT DEFAULTS
import React from 'react'
import ReactDOM from 'react-dom/client'

// STYLES
import './index.scss'
// COMPONENTS
import App from './App'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import { AppProvider } from './contexts/AppProvider'
import ScrollToTop from './components/global/scroll-to-top/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
