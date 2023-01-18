// REACT DEFAULTS
import React from 'react'
import { PropTypes } from 'prop-types'

//components
import SocialNav from '../../SocialNav'
import SocialFooter from '../../SocialFooter'

//styles
import styles from './socialLayout.module.scss'

const SocialLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      <SocialNav />
      {children}
      <SocialFooter />
    </main>
  )
}

export default SocialLayout

SocialLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}
