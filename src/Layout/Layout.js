import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
import Modal from 'react-modal'

import PageTransition from './PageTransition'
import MobileMenu from '../components/common/MobileMenu'

import './globalStyle.sass'

Modal.setAppElement('#___gatsby')

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'Element',
              content: 'Element',
            },
          ]}>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet" />
        </Helmet>
        <div id="outer-container">
          <MobileMenu />
          <div id="page-wrap">
            <ParallaxProvider>
              <PageTransition location={location}>{children}</PageTransition>
            </ParallaxProvider>
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
