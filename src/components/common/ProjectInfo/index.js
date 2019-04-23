import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { SimpleImg } from 'react-simple-img'

import BasicSlider from '../BasicSlider'
import SampleSliderArrow from '../SampleSliderArrow'
import Preloader from '../Preloader'

import './style.sass'

class ProjectInfo extends React.Component {
  sliders = {}

  constructor(props) {
    super(props)
    this.state = { activeImages: {}, ready: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true })
    }, 1500)
  }

  handleActiveImageChange(index, current) {
    this.setState(state => ({ activeImages: { ...state.activeImages, ...(state.activeImages[index] = current) } })) // eslint-disable-line
  }

  render() {
    const { items, initial } = this.props
    const { activeImages, ready } = this.state

    const allSliderSetting = {
      nextArrow: <SampleSliderArrow text="Следующий проект" next />,
      prevArrow: <SampleSliderArrow text="Предыдущий проект" prev />,
    }

    return (
      <div className="ProjectInfo">
        <Preloader ready={ready} type="modal">
          <BasicSlider
            className="ProjectInfo__slider-all"
            initialSlide={initial}
            touchMove={false}
            nextArrow={allSliderSetting.nextArrow}
            prevArrow={allSliderSetting.prevArrow}>
            {items.map((item, index) => (
              <div className="ProjectInfo__all-item" key={index}>
                <div className="ProjectInfo__left-inner">
                  {/* eslint-disable */}
                    <Slider
                      className="ProjectInfo__slider-big"
                      ref={slider => (this.sliders[index] = slider)}
                      infinite={false}
                      onInit={() => this.handleActiveImageChange(index, 1)}
                      beforeChange={(current, next) => this.handleActiveImageChange(index, next + 1)}>
                      {item.images.map((image, i) => (
                        <div className="ProjectInfo__slider-item" key={i}>
                          <SimpleImg
                            className="ProjectInfo__slider-item__image"
                            src={image}
                            alt={item.subTitle}
                            placeholder='false' />
                        </div>
                      ))}
                    </Slider>
                  {/* eslint-enable */}
                </div>

                <div className="ProjectInfo__right-inner">
                  <div className="ProjectInfo__small-images">
                    {item.images.map((image, i) => (
                      <SimpleImg
                        className={activeImages[index] === i + 1 ? 'active' : ''}
                        src={image}
                        onClick={() => this.sliders[index].slickGoTo(i)}
                        key={i}
                        alt={item.subTitle}
                        placeholder="false"
                      />
                    ))}
                  </div>
                  <div className="ProjectInfo__description">
                    <strong>{item.subTitle}</strong>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </BasicSlider>
        </Preloader>
      </div>
    )
  }
}

ProjectInfo.propTypes = {
  items: PropTypes.array.isRequired,
  initial: PropTypes.number.isRequired,
}

export default ProjectInfo
