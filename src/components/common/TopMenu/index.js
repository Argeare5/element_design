import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Container from '../Container'
import TopNavigation from '../TopNavigation'
import SocialIcons from '../SocialIcons'

import './style.sass'

import Logo from './image/logo.inline.svg'
import textLogo from './image/textLogo.jpg'

const TopMenu = () => (
  <Container>
    <div className="TopMenu">
      <div className="TopMenu__left-inner">
        <TopNavigation />
      </div>
      <div className="TopMenu__right-inner">
        <AnchorLink href="#AboutProjects" className="TopMenu__logo">
          <Logo />
          <img src={textLogo} alt="Element" />
        </AnchorLink>
        <SocialIcons inRight />
      </div>
    </div>
  </Container>
)

export default TopMenu
