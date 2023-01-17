// REACT DEFAULTS
import React from 'react'
import { PropTypes } from 'prop-types'

//components
import SocialNav from '../../SocialNav'
import Footer from '../../Footer'

//styles
import styles from './socialLayout.module.scss'

const SocialLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      <SocialNav />
      {children}
      <Footer />
    </main>
  )
}

export default SocialLayout

SocialLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}
