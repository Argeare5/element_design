import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const Container = ({ children }) => <div className="Container">{children}</div>

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
