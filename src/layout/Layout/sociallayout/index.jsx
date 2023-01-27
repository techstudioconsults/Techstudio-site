// REACT DEFAULTS
import React from 'react'
import { PropTypes } from 'prop-types'

//components
import SocialNav from '../../SocialNav'
import SocialFooter from '../../SocialFooter'
import { RegisterModal } from '../../../components'

//styles
import styles from './socialLayout.module.scss'
import useAppProvider from '../../../hooks/useAppProvider'

const SocialLayout = ({ children }) => {
  const { registerModal } = useAppProvider()
  return (
    <>
      {registerModal && <RegisterModal />}
      <main className={styles.main}>
        <SocialNav />
        {children}
        <SocialFooter />
      </main>
    </>
  )
}

export default SocialLayout

SocialLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}
