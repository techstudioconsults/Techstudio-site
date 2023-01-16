// // REACT DEFAULTS
// import { render, screen, cleanup } from '@testing-library/react'
// import { MemoryRouter } from 'react-router-dom'

// // COMPONENTS
// import App from './App'
// import About from './pages/About'
// import LandingPage from './pages/LandingPage'
// import Pricing from './pages/Pricing'
// import Contact from './pages/Contact'
// import Customers from './pages/Customers'
// import HowItWorks from './pages/HowItWorks'
// import PrivacyPolicy from './pages/PrivacyPolicy'

// const renderPage = (element) => {
//   if (element) {
//     return render(<MemoryRouter>{element}</MemoryRouter>)
//   }
// }

// describe('Render All External Pages Correctly', () => {
//   afterEach(cleanup)

//   // HOME PAGE
//   it('Should Rendered Home Page', () => {
//     render(<App />)
//     const HomePage = screen.getByTestId(/tickedHomePage/i)
//     expect(HomePage).toBeInTheDocument()
//   })

//   // LANDING PAGE
//   it('Should Rendered Landing Page', () => {
//     renderPage(<LandingPage />)
//     const LandingPageElement = screen.getByTestId(/tickedLandingPage/i)
//     expect(LandingPageElement).toBeTruthy()
//   })

//   // ABOUT PAGE
//   it('Should Rendered About Page', () => {
//     renderPage(<About />)
//     // const AboutPage = screen.getByText(/About Us/i)
//     const AboutPage = screen.getByTestId(/tickedAboutPage/i)
//     expect(AboutPage).toBeTruthy()
//   })

//   // PRICING PAGE
//   it('Should Rendered Pricing Page', () => {
//     renderPage(<Pricing />)
//     const PricingPage = screen.getByTestId(/tickedPricingPage/i)
//     expect(PricingPage).toBeTruthy()
//   })

//   // CONTACT PAGE
//   it('Should Rendered Contact Page', () => {
//     renderPage(<Contact />)
//     const ContactPage = screen.getByTestId(/tickedContactPage/i)
//     expect(ContactPage).toBeTruthy()
//   })

//   // CUSTOMERS PAGE
//   it('Should Rendered Customers Page', () => {
//     renderPage(<Customers />)
//     const CustomersPage = screen.getByTestId(/tickedCustomersPage/i)
//     expect(CustomersPage).toBeTruthy()
//   })

//   // HOW IT WORKS PAGE
//   it('Should Rendered HowItWorks Page', () => {
//     renderPage(<HowItWorks />)
//     const HowItWorksPage = screen.getByTestId(/tickedHowItWorksPage/i)
//     expect(HowItWorksPage).toBeTruthy()
//   })

//   // PRICING PAGE
//   it('Should Rendered PrivacyPolicy Page', () => {
//     renderPage(<PrivacyPolicy />)
//     const PrivacyPolicyPage = screen.getByTestId(/tickedPrivacyPolicyPage/i)
//     expect(PrivacyPolicyPage).toBeTruthy()
//   })
// })
