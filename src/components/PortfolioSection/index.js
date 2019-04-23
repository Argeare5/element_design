import React from 'react'

import Container from '../common/Container'
import BasicSlider from '../common/BasicSlider'
import SampleSliderArrow from '../common/SampleSliderArrow'
import SampleSliderDots from '../common/SampleSliderDots'
import FilterButton from '../common/FilterButton'
import BasicModal from '../common/BasicModal'
import ProjectInfo from '../common/ProjectInfo'

import './style.sass'

import {
  kvAleksandriya,
  kvMirozdanie,
  kvNaGrafscom,
  kvNaGriboedova,
  kvNaNevskii,
  kvNaRubenshteine,
  kvOstrov,
  kvResidens,
  restRegatta,
  restBeautyBar,
  restDlinnuiHvost,
  restMoshno,
  restParusaNaKrushe,
  restSanday,
  tseh85,
  spaAveda,
  spaAvedaCharisma,
  spaBeauty,
} from '../../images'

class PortfolioSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'В ЖК «Александрия»',
          images: kvAleksandriya,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'В ЖК «Мироздание»',
          images: kvMirozdanie,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'На Графском переулке',
          images: kvNaGrafscom,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'На Канале Грибоедова',
          images: kvNaGriboedova,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'На Невском',
          images: kvNaNevskii,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'На улице Рубинштейна',
          images: kvNaRubenshteine,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'В ЖК «Остров»',
          images: kvOstrov,
        },
        {
          group: 'apartment',
          subTitle: 'Квартира',
          title: 'В ЖК «Residence»',
          images: kvResidens,
        },
        {
          group: 'other',
          subTitle: 'Сеть',
          title: 'Пекарни «Цех 85»',
          images: tseh85,
        },
        {
          group: 'beauty_saloon',
          subTitle: 'Салон красоты',
          title: '«Aveda Charisma»',
          images: spaAveda,
        },
        {
          group: 'beauty_saloon',
          subTitle: 'Салон красоты',
          title: '«Aveda Charisma»',
          images: spaAvedaCharisma,
        },
        {
          group: 'beauty_saloon',
          subTitle: 'Салон красоты',
          title: '«Beauty Lounge»',
          images: spaBeauty,
        },
        {
          group: 'restaurant',
          subTitle: 'Ресторан',
          title: '«Regatta»',
          images: restRegatta,
        },
        {
          group: 'restaurant',
          subTitle: 'Ресторан',
          title: '«Beauty Bar&Kitchen»',
          images: restBeautyBar,
        },
        {
          group: 'restaurant',
          subTitle: 'Ресторан',
          title: '«Длинный хвост»',
          images: restDlinnuiHvost,
        },
        {
          group: 'restaurant',
          subTitle: 'Ресторан',
          title: '«Можно»',
          images: restMoshno,
        },
        {
          group: 'restaurant',
          subTitle: 'Ресторан',
          title: '«Паруса на крыше»',
          images: restParusaNaKrushe,
        },
        {
          group: 'restaurant',
          subTitle: 'Ресторан',
          title: '«Sunday Ginza»',
          images: restSanday,
        },
      ],
      filteredItems: [],
      clickedSlide: undefined,
      indexSlide: undefined,
    }
  }

  componentDidMount() {
    this.setState({ filteredItems: this.state.items })
  }

  handleFilterChange = param => {
    this.setState({ filteredItems: this.state.items.filter(item => item.group === param) })
  }

  openModal = index => this.setState({ clickedSlide: index + 1, indexSlide: index })

  closeModal = e => {
    e.preventDefault()
    this.setState({ clickedSlide: undefined, indexSlide: undefined })
  }

  render() {
    const { filteredItems, clickedSlide, indexSlide } = this.state

    const settings = {
      nextArrow: <SampleSliderArrow text="Далее" next />,
      appendDots: dots => <SampleSliderDots dots={dots} />,
      rows: 2,
      slidesPerRow: 3,
      responsive: [
        {
          breakpoint: 1059,
          settings: {
            rows: 3,
            slidesPerRow: 2,
          },
        },
      ],
    }

    return (
      <section className="PortfolioSection" id="PortfolioSection">
        <Container>
          <div className="PortfolioSection__wrapper">
            <div className="PortfolioSection__left-inner">
              <ul>
                <li>
                  <FilterButton
                    filteredItems={filteredItems}
                    param="apartment"
                    text="Квартиры"
                    func={this.handleFilterChange}
                  />
                </li>
                <li>
                  <FilterButton
                    filteredItems={filteredItems}
                    param="other"
                    text="Другие"
                    func={this.handleFilterChange}
                  />
                </li>
                <li>
                  <FilterButton
                    filteredItems={filteredItems}
                    param="beauty_saloon"
                    text="Салоны красоты"
                    func={this.handleFilterChange}
                  />
                </li>
                <li>
                  <FilterButton
                    filteredItems={filteredItems}
                    param="restaurant"
                    text="Рестораны"
                    func={this.handleFilterChange}
                  />
                </li>
              </ul>
            </div>

            <div className="PortfolioSection__right-inner">
              <BasicSlider
                className="PortfolioSection__slider"
                infinite
                dots
                adaptiveHeight
                rows={settings.rows}
                slidesPerRow={settings.slidesPerRow}
                responsive={settings.responsive}
                nextArrow={settings.nextArrow}
                appendDots={settings.appendDots}>
                {filteredItems.map((item, index) => (
                  <div className="PortfolioSection__item" key={index} onClick={() => this.openModal(index)}>
                    <div className="Item__image">
                      <img src={item.images[0]} alt={item.subTitle} />
                    </div>
                    <div className="Item__title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </BasicSlider>
            </div>
          </div>
        </Container>

        <BasicModal isOpen={!!clickedSlide} onRequestClose={e => this.closeModal(e)}>
          {!!clickedSlide && <ProjectInfo items={filteredItems} initial={indexSlide} />}
        </BasicModal>
      </section>
    )
  }
}

export default PortfolioSection
