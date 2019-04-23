import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { SimpleImg } from 'react-simple-img'

import Container from '../common/Container'

import './style.sass'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'

class ServicesSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabIndex: 0 }
  }

  handleTabIndexChange = tabIndex => {
    this.setState({ tabIndex })
  }

  render() {
    const tabContent = [
      {
        caption: 'Проектирование жилых помещений',
        description:
          'На нашем счету сотни разнообразных интерьеров квартир и мини-отелей. Идеальное планирование и учет «жизненности» и эргономичности интерьера - основа нашего подхода.',
        price: 'Стоимость - от 4500 руб. за кв. метр.',
        image: img1,
      },
      {
        caption: 'Проектирование интерьеров общественных помещений',
        description:
          'Рестораны ведущих московских и петербургских холдингов, торговые сети, фотостудии, салоны красоты - мы всегда несём ответственность за результат и четко учитываем коммерческую составляющую проектов!',
        price: 'Стоимость - от 4500 руб. за кв. метр.',
        image: img2,
      },
      {
        caption: 'Декорирование интерьеров',
        description: 'Мы точно знаем как с помощью деталей и косметических изменений преобразовать любой интерьер!',
        price: 'Стоимость - обсуждается индивидуально.',
        image: img3,
      },
      {
        caption: 'Ремонтно-строительные работы',
        description:
          'За годы работы в индустрии мы научились точно и качественно воплощать любой, даже самый сложный дизайнерский проект!',
        price: 'Стоимость - обсуждается индивидуально.',
        image: img4,
      },
    ]

    return (
      <section className="ServicesSection" id="ServicesSection">
        <Container>
          <Tabs
            className="ServicesSection__tabs-wrapper"
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.handleTabIndexChange(tabIndex)}>
            <TabList className="ServicesSection__tabs-list">
              {tabContent.map((tab, index) => (
                <Tab className="ServicesSection__tab" selectedClassName="ServicesSection__tab-active" key={index}>
                  <h2>{tab.caption}</h2>
                  <p>{tab.description}</p>
                  <strong>{tab.price}</strong>
                </Tab>
              ))}
            </TabList>
            {tabContent.map((tab, index) => (
              <TabPanel className="ServicesSection__content" key={index}>
                <SimpleImg className="ServicesSection__image" src={tab.image} alt={tab.caption} placeholder="false" />
              </TabPanel>
            ))}
          </Tabs>
        </Container>
      </section>
    )
  }
}

export default ServicesSection
