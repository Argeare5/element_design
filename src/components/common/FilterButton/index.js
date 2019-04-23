import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.sass'

const FilterButton = ({ filteredItems, text, func, param }) => (
  <button
    type="button"
    className={classNames('FilterButton', { active: !!filteredItems.filter(item => item.group === param).length })}
    onClick={() => func(param)}>
    {text}
  </button>
)

FilterButton.propTypes = {
  filteredItems: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  param: PropTypes.string.isRequired,
}

export default FilterButton
