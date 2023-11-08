// REACT DEFAULTS
import { PropTypes } from 'prop-types'

// import { routeAnimation } from '../../gsap'
// import Gsap from '../../hooks/Gsap'
// COMPONENTS
import Footer from '../Footer'

// STYLES
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    // <Gsap animationFuncion={routeAnimation}>
    <>
      <main className={`${styles.main} route`}>
        {children}
        <Footer />
      </main>
    </>
    // </Gsap>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default Layout
