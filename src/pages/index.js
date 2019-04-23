import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout'
import SEO from '../Layout/SEO'

import TopMenu from '../components/common/TopMenu'
import AboutProjectsSection from '../components/AboutProjectsSection'
import AboutAuthorSection from '../components/AboutAuthorSection'
import PortfolioSection from '../components/PortfolioSection'
import ServicesSection from '../components/ServicesSection'
import ContactsSection from '../components/ContactsSection'
import Footer from '../components/Footer'

import ParalaxImage from '../components/common/ParalaxImage'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Main" keywords={[`element`, `design`]} />
    <TopMenu />
    <AboutProjectsSection />
    <ParalaxImage img1 />
    <AboutAuthorSection />
    <PortfolioSection />
    <ParalaxImage className="ParallaxImage2" img2 paralaxFrom={30} paralaxTo={-30} />
    <ServicesSection />
    <ParalaxImage className="ParallaxImage3" img3 paralaxFrom={30} paralaxTo={-30} />
    <ContactsSection />
    <Footer />
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
