import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.sass'

const SampleSliderDots = props => {
  const { dots, vertical } = props

  return <ul className={classNames('SampleSliderDots', { SampleSliderDots__vertical: vertical })}>{dots}</ul>
}

SampleSliderDots.propTypes = {
  vertical: PropTypes.bool,
  dots: PropTypes.array,
}

SampleSliderDots.defaultProps = {
  vertical: false,
  dots: [],
}

export default SampleSliderDots
