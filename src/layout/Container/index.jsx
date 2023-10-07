// REACT DEFAULTS
import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'

// STYLES
import styles from './container.module.scss'

const Container = ({ paddingBlock, children }) => {
  const [padding, setPadding] = useState('')

  useEffect(() => {
    setPadding(() => `${paddingBlock}rem`)
  }, [paddingBlock])

  return (
    <div
      className={styles.xContainer}
      style={{
        paddingBlock: padding ? padding : '2.5rem',


      }}
    >
      {children}
    </div>
  )
}

// Container.defaultProps = {
//   paddingBlock: '2.5rem',
// }

Container.propTypes = {
  paddingBlock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Container
