import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../Layout'
import SEO from '../Layout/SEO'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404" />
    <div className="NotFound__page">
      <h2 className="margin">Такой страницы не существует</h2>
      <Link to="/" activeClassName="active">
        Вернутся на главную
      </Link>
    </div>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
