import React from 'react'

import BasicSlider from '../common/BasicSlider'
import DefaultButton from '../common/DefaultButton'
import SampleSliderArrow from '../common/SampleSliderArrow'
import SampleSliderDots from '../common/SampleSliderDots'
import BasicModal from '../common/BasicModal'
import ProjectInfo from '../common/ProjectInfo'

import './style.sass'

import { kvNaNevskii, tseh85, kvNaGrafscom, restBeautyBar, spaBeauty } from '../../images'

class AboutProjectsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeSlide: 1, clickedSlide: undefined, indexSlide: undefined }
  }

  openModal = index => this.setState({ clickedSlide: index + 1, indexSlide: index })

  closeModal = e => {
    e.preventDefault()
    this.setState({ clickedSlide: undefined, indexSlide: undefined })
  }

  render() {
    const settings = {
      beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
      nextArrow: <SampleSliderArrow text="Следующий проект" next />,
      appendDots: dots => <SampleSliderDots dots={dots} vertical />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            touchMove: true,
            vertical: false,
            adaptiveHeight: true,
          },
        },
      ],
    }

    const sliderItems = [
      {
        subTitle: 'Квартира',
        title: 'На Невском',
        description:
          'Квартира в самом центре СПб с видом на Конюшенную улицу и Невский проспект. Современная эклектика в исполнении Вадима Че, особенно интересны эксперименты с фактурой стен.',
        images: kvNaNevskii,
      },
      {
        subTitle: 'Сеть',
        title: 'Пекарни «Цех 85»',
        description:
          'Петербургская сеть из более чем 50 пекарен, где Element by Vadim Che ответственны за все интерьерные решения.',
        images: tseh85,
      },
      {
        subTitle: 'Квартира',
        title: 'На Графском переулке',
        description:
          'Ещё одна уютная квартира в нашем любимом районе Санкт-Петербурга. Идеальное воплощение современного интерьера.',
        images: kvNaGrafscom,
      },
      {
        subTitle: 'Ресторан',
        title: '«Beauty Bar&Kitchen»',
        description: 'Один из последних в череде десятков ресторанных проектов by Vadim Che.',
        images: restBeautyBar,
      },
      {
        subTitle: 'Салон красоты',
        title: '«Beauty Lounge»',
        description: 'Один из ведущих центров красоты в Санкт-Петербурге.',
        images: spaBeauty,
      },
    ]

    return (
      <section className="AboutProjects" id="AboutProjects">
        <strong className="ActiveSliderNumber">/0{this.state.activeSlide}</strong>
        <BasicSlider
          className="AboutProjects__slider"
          infinite
          dots
          vertical
          touchMove={false}
          beforeChange={settings.beforeChange}
          nextArrow={settings.nextArrow}
          appendDots={settings.appendDots}
          responsive={settings.responsive}>
          {sliderItems.map((item, index) => (
            <div className="AboutProjects__item" key={index}>
              <div className="Item__left">
                <img src={item.images[0]} alt={item.subTitle} />
              </div>
              <div className="Item__right">
                <div className="Item__right-content">
                  <strong>{item.subTitle}</strong>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <DefaultButton text="Подробнее" type="button" button onClick={() => this.openModal(index)} />
                </div>
                <div className="MobileSliderNumber">
                  <p>/0{this.state.activeSlide}</p>
                </div>
              </div>
            </div>
          ))}
        </BasicSlider>

        <BasicModal isOpen={!!this.state.clickedSlide} onRequestClose={e => this.closeModal(e)}>
          {!!this.state.clickedSlide && <ProjectInfo items={sliderItems} initial={this.state.indexSlide} />}
        </BasicModal>
      </section>
    )
  }
}

export default AboutProjectsSection
