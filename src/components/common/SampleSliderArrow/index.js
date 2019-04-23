import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.sass'

const SampleSliderArrow = props => {
  const { text, className, onClick, prev, next } = props

  return (
    <div
      className={classNames('SampleSliderArrow__inner', {
        SampleArrow__prevInner: prev,
        SampleArrow__nextInner: next,
      })}>
      <button
        type="button"
        className={classNames('SampleSliderArrow', className, { SampleArrow__prev: prev, SampleArrow__next: next })}
        onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

SampleSliderArrow.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  prev: PropTypes.bool,
  next: PropTypes.bool,
}

SampleSliderArrow.defaultProps = {
  onClick: null,
  className: '',
  prev: false,
  next: false,
}

export default SampleSliderArrow
