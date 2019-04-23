import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

class BasicSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { browser: false }
  }

  componentDidMount() {
    this.setState({ browser: true })
  }

  render() {
    const { children, className, infinite, ...settings } = this.props
    const { browser } = this.state

    const baseSettings = {
      className,
      dots: false,
      infinite: infinite && browser,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const currentSettings = { ...baseSettings, ...settings }

    return (
      <React.Fragment>
        {/* eslint-disable */}
        <Slider ref={c => (this.slider = c)} {...currentSettings}>
          {browser ? children : React.Children.toArray(children).slice(0, currentSettings.slidesToShow)}
        </Slider>
        {/* eslint-enable */}
      </React.Fragment>
    )
  }
}

BasicSlider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  infinite: PropTypes.bool,
}

BasicSlider.defaultProps = {
  className: 'Slider',
  infinite: false,
}

export default BasicSlider
