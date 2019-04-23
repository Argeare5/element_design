import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'

import Ink from 'react-ink'

import './style.sass'

const DefaultButton = ({ button, type, text, link, className, ...props }) => (
  <React.Fragment>
    {button ? (
      // eslint-disable-next-line
      <button {...props} type={type} className={classNames('DefaultButton', className)}>
        <span>{text}</span>
        <Ink />
      </button>
    ) : (
      <Link to={link} className={classNames('DefaultButton', className)}>
        <span>{text}</span>
        <Ink />
      </Link>
    )}
  </React.Fragment>
)

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.bool,
  type: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
}

DefaultButton.defaultProps = {
  button: false,
  type: 'button',
  link: '/',
  className: '',
}

export default DefaultButton
