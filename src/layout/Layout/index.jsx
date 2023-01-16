// REACT DEFAULTS
import { PropTypes } from 'prop-types'

// COMPONENTS
import NavBar from '../Navbar'
import Footer from '../Footer'

// STYLES
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Layout
