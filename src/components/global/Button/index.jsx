// REACT DEFAULTS
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// STYLES
import styles from './Button.module.scss'

const Button = ({
  linkHref,
  solidBtn,
  navBtn,
  linkText,
  full,
  width,
  transparentBtn,
  paddingInline,
  btnRef,
}) => {
  return (
    <Link
      to={linkHref}
      className={`${styles.btn} ${
        solidBtn ? styles.solidBtn : styles.lightBtn
      } ${navBtn ? styles.navBtn : ''}
      ${full ? styles.fullWidth : ''} ${
        transparentBtn ? styles.transparentBtn : ''
      } ${btnRef ? styles.hoverState : ''}`}
      style={{ minWidth: `${width}rem`, paddingInline: `${paddingInline}rem` }}
    >
      {linkText}
    </Link>
  )
}

Button.propTypes = {
  linkHref: PropTypes.string.isRequired,
  navBtn: PropTypes.bool,
  full: PropTypes.bool,
  transparentBtn: PropTypes.bool,
  paddingInline: PropTypes.number,
  solidBtn: PropTypes.bool,
  width: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  btnRef: PropTypes.bool,
}

export default Button
