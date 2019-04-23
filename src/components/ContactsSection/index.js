import React from 'react'
import GoogleMapReact from 'google-map-react'

import Container from '../common/Container'
import SocialIcons from '../common/SocialIcons'
import DefaultForm from '../common/DefaultForm'

import './style.sass'

import MapMarker from './image/mapMarker.inline.svg'

const mapStyles = [{ featureType: 'all', stylers: [{ saturation: -100, gamma: 0.5 }] }]

const Marker = () => (
  <div className="MapMarker">
    <MapMarker />
  </div>
)

const ContactsSection = () => {
  const email = 'info@elementburo.ru'
  const phone = '+7 904 605 69 55'

  return (
    <section className="Contacts" id="Contacts">
      <Container>
        <div className="Contacts__map">
          <GoogleMapReact
            options={{ styles: mapStyles }}
            bootstrapURLKeys={{ key: 'AIzaSyAhk20Gxo6q9lz-sYsP-wzB_wPwX6IlnGQ' }}
            defaultCenter={{ lat: 59.9425894, lng: 30.348131400000057 }}
            defaultZoom={13}>
            <Marker lat={59.9425894} lng={30.348131400000057} />
          </GoogleMapReact>
        </div>
        <div className="Contacts__right-inner">
          <div className="Contact__address">
            <p>Москва, Большой Саввинский пер.,12</p>
            <p>Санкт-Петербург, Литейный пр., 23</p>
          </div>
          <div className="Contact__info">
            <a href={`mailto: ${email}`}>{email}</a>
            <br />
            <a href={`tel: ${phone}`}>{phone}</a>
          </div>
          <SocialIcons />
          <DefaultForm />
        </div>
      </Container>
    </section>
  )
}

ContactsSection.propTypes = {}

export default ContactsSection
