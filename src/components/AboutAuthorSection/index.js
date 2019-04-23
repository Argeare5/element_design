import React from 'react'
import { SimpleImg } from 'react-simple-img'

import Container from '../common/Container'

import './style.sass'

import image from './image/img1.jpg'

const AboutAuthorSection = () => {
  const info = {
    image,
    caption: 'Vadim CHE',
    description:
      'То, чем мы с командой Element buro занимаемся каждый день - не просто работа - это наш стимул к собственному росту, наше вдохновение! В стремлении создать особенный, комфортный и по-настоящему интересный интерьер, мы активно взаимодействуем с заказчиками, прислушиваемся к их мнению, стараемся для них. Мы следим за тенденциями и современными технологиями, воплощаем их в проектах, привнося своё видение, стараясь сохранить почерк студии. Наша цель - сделать счастливым и уверенным в своем деле каждого, кто решит идти с нами!',
    descriptionTwo:
      '«Один из самых востребованных дизайнеров интерьеров в Петербурге известен безупречным чувством стиля и точным подбором деталей. Сегодня мастер увлечен не только авторскими проектами, но и реставрацией парадной собственного дома», - читайте последнее интервью с Вадимом для петербургского издания',
    link: 'http://www.sobaka.ru/lifestyle/gadgets/83379',
  }

  return (
    <section className="AboutAuthorSection" id="AboutAuthorSection">
      <Container>
        <div className="LeftInner">
          <SimpleImg className="LeftInner__image" src={info.image} alt={info.caption} placeholder="false" />
        </div>
        <div className="RightInner">
          <h2>{info.caption}</h2>
          <p>{info.description}</p>
          <p>
            {info.descriptionTwo}{' '}
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              «Собака.ру»
            </a>{' '}
            по ссылке.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default AboutAuthorSection
