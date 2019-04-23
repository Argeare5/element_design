import React from 'react'
import axios from 'axios'
import classNames from 'classnames'
import 'url-search-params-polyfill'

import CheckboxField from '../CheckboxField'
import DefaultButton from '../DefaultButton'

const initialState = {
  name: '',
  email: '',
  text: '',
  checked: false,
  checkboxError: '',
}

class DefaultForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...initialState, successMessage: false }
  }

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onCheckboxChange = () => {
    this.setState({ checked: !this.state.checked })
    if (!this.state.checked) {
      this.setState({ checkboxError: '' })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const { name, email, text } = this.state
    const params = new URLSearchParams()
    params.append('name', name)
    params.append('email', email)
    params.append('text', text)

    if (!this.state.checked) {
      this.setState({
        checkboxError: 'Вы не согласились на обработку персональных данных',
      })
    } else {
      this.setState({ successMessage: true })
      setTimeout(() => {
        this.setState({ successMessage: false })
      }, 2000)
      axios.post('./formSend/mail.php', params).then(() => {
        this.setState(initialState)
      })
    }
  }

  render() {
    const { name, email, text, successMessage } = this.state
    return (
      <form className="DefaultForm" onSubmit={this.onSubmit}>
        <div className={classNames('success', { active: successMessage })}>
          <span>Спасибо, мы с вами обязательно свяжемся!</span>
        </div>

        <div className="inputs-inner">
          <input type="text" name="name" placeholder="Имя" required value={name} onChange={this.onChangeValue} />
          <input type="email" name="email" placeholder="Email" required value={email} onChange={this.onChangeValue} />

          <textarea name="text" value={text} onChange={this.onChangeValue} placeholder="Сообщение" />

          <CheckboxField
            onChangeFunc={this.onCheckboxChange}
            checked={this.state.checked}
            error={this.state.checkboxError}
          />
        </div>

        <DefaultButton type="submit" text="Отправить" button />
      </form>
    )
  }
}

export default DefaultForm
