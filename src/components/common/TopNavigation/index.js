import React from 'react'
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './style.sass'

const TopNavigationLinks = [
  { link: '#PortfolioSection', name: 'Портфолио' },
  { link: '#AboutAuthorSection', name: 'О нас' },
  { link: '#ServicesSection', name: 'Услуги' },
  { link: '#Contacts', name: 'Контакты' },
]

const TopNavigation = ({ onClick }) => (
  <nav className="TopNavigation">
    <ul>
      {TopNavigationLinks.map((link, index) => (
        <li key={index}>
          <AnchorLink href={link.link} onClick={onClick}>
            {link.name}
          </AnchorLink>
        </li>
      ))}
    </ul>
  </nav>
)

TopNavigation.propTypes = {
  onClick: PropTypes.func,
}

TopNavigation.defaultProps = {
  onClick: null,
}

export default TopNavigation
