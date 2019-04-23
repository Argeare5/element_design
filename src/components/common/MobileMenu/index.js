import React from 'react'
import classNames from 'classnames'

import { slide as Menu } from 'react-burger-menu'

import TopNavigation from '../TopNavigation'

import './style.sass'

class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <div
        className={classNames('MobileMenu', {
          MobileMenu__open: this.state.menuOpen,
        })}>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          width={190}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          bodyClassName="menuOpen">
          <TopNavigation onClick={() => this.closeMenu()} />
        </Menu>
        <button className="BurgerButton" type="button" onClick={() => this.toggleMenu()}>
          <span className="BurgerButton__icon" />
        </button>
      </div>
    )
  }
}

export default MobileMenu
