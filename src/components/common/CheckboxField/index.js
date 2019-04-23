import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'

import './style.sass'

const CheckboxField = ({ checked, onChangeFunc, error }) => {
  return (
    <div className="CheckboxField">
      <Checkbox
        checked={checked}
        onChange={onChangeFunc}
        id="checkbox"
        classes={{ root: 'MyCheckbox', checked: 'MyCheckboxChecked' }}
      />
      <label htmlFor="checkbox">Я согласен на обработку персональных данных.</label>
      {error && <span className="CheckboxField__error">{error}</span>}
    </div>
  )
}

CheckboxField.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  error: PropTypes.string,
}

CheckboxField.defaultProps = {
  error: '',
}

export default CheckboxField
