// REACT DEFAULTS
import { PropTypes } from 'prop-types'

// STYLES
import styles from './loading.module.scss'

const Loading = ({ text }) => {
  return (
    <section className={styles.Loading}>
      {text ? (
        <h4 className={styles.loading__text}>{text}</h4>
      ) : (
        <img className={styles.Loading__img} alt='logo' src={null} />
      )}
    </section>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Loading
