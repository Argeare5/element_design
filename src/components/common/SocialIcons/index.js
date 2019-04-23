import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.sass'

import InstIcon from './image/instIcon.inline.svg'
// import VkIcon from './image/vkIcon.inline.svg'
// import FaceIcon from './image/faceIcon.inline.svg'

const SocialIconLinks = [
  {
    link: 'https://www.instagram.com/element_buro/?utm_source=ig_profile_share&igshid=1j39kwgcv4hsu',
    image: <InstIcon />,
    title: 'Instagram',
  },
  // { link: '/', image: <VkIcon />, title: 'Vk' },
  // { link: '/', image: <FaceIcon />, title: 'Faceboock' },
]

const SocialIcons = ({ inRight }) => (
  <ul className={classNames('SocialIcons', { SocialIconsRight: inRight })}>
    {SocialIconLinks.map((link, index) => (
      <li key={index}>
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          {link.image}
        </a>
      </li>
    ))}
  </ul>
)

SocialIcons.propTypes = {
  inRight: PropTypes.bool,
}

SocialIcons.defaultProps = {
  inRight: false,
}

export default SocialIcons
