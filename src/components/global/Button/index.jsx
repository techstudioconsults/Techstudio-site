// REACT DEFAULTS
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// STYLES
import styles from './Button.module.scss'

const Button = ({
  textColor,
  linkHref,
  solidBtn,
  textBtn,
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
      } ${navBtn ? styles.navBtn : ''} ${textBtn ? styles.textBtn : null}
      ${full ? styles.fullWidth : ''} ${
        transparentBtn ? styles.transparentBtn : ''
      } ${btnRef ? styles.hoverState : ''}`}
      style={{
        minWidth: `${width}rem`,
        paddingInline: `${paddingInline}rem`,
        color: textColor,
      }}
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
  textBtn: PropTypes.bool,
  btnRef: PropTypes.bool,
  textColor: PropTypes.string,
}

export default Button
