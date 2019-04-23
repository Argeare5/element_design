import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

const timeout = 250
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transformStyle: `preserve-3d`,
    transform: `rotateY(40deg)`,
  },
  entered: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 1,
    transformStyle: `preserve-3d`,
    transform: `rotateY(0deg)`,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
    transformStyle: `preserve-3d`,
    transform: `rotateY(-40deg)`,
  },
}

const PageTransition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}>
        {status => (
          <div
            id="app"
            style={{
              ...getTransitionStyles[status],
            }}>
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default PageTransition
