import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'
import { TextBlock } from 'react-placeholder/lib/placeholders'
import 'react-placeholder/lib/reactPlaceholder.css'

import './style.sass'

const image = (
  <div>
    <TextBlock rows={1} className="PreloaderImage" color="transparent" />
  </div>
)

const modal = (
  <div className="ModalPreloader">
    <div className="LeftInner">
      <TextBlock rows={1} className="ModalBlock" color="transparent" />
    </div>
    <div className="RightInner">
      <div className="top">
        <TextBlock rows={1} className="ModalBlock" color="transparent" />
        <TextBlock rows={1} className="ModalBlock" color="transparent" />
        <TextBlock rows={1} className="ModalBlock" color="transparent" />
      </div>
      <div className="bottom">
        <TextBlock rows={1} className="ModalBlock" color="transparent" />
        <TextBlock rows={1} className="ModalBlock" color="transparent" />
        <TextBlock rows={1} className="ModalBlock" color="transparent" />
      </div>
    </div>
  </div>
)

const PageContentPreloader = ({ ready, firstLaunchOnly, children, type }) => {
  const blockType = {
    modal,
    image,
  }
  return (
    <div className="Preloader">
      <ReactPlaceholder
        color="transparent"
        ready={ready}
        customPlaceholder={blockType[type]}
        firstLaunchOnly={firstLaunchOnly}
        showLoadingAnimation>
        {children}
      </ReactPlaceholder>
    </div>
  )
}

PageContentPreloader.propTypes = {
  ready: PropTypes.bool.isRequired,
  firstLaunchOnly: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.string,
}

PageContentPreloader.defaultProps = {
  firstLaunchOnly: false,
  type: 'image',
}

export default PageContentPreloader
