import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-scroll-parallax'

import './style.sass'

import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

const ParallaxImage = ({ className, paralaxFrom, paralaxTo, img1, img2, img3 }) => {
  return (
    <Parallax className={className} y={[paralaxFrom, paralaxTo]} tagOuter="figure">
      {img1 && <img src={image1} alt="Element" />}
      {img2 && <img src={image2} alt="Element" />}
      {img3 && <img src={image3} alt="Element" />}
    </Parallax>
  )
}

ParallaxImage.propTypes = {
  className: PropTypes.string,
  paralaxFrom: PropTypes.number,
  paralaxTo: PropTypes.number,
  img1: PropTypes.bool,
  img2: PropTypes.bool,
  img3: PropTypes.bool,
}

ParallaxImage.defaultProps = {
  className: 'ParallaxImage',
  paralaxFrom: 20,
  paralaxTo: -20,
  img1: false,
  img2: false,
  img3: false,
}

export default ParallaxImage
