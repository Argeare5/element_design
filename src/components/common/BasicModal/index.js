import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import './style.sass'

const BasicModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button className="BasicModal__close" type="button" onClick={onRequestClose}>
        <span />
      </button>
      <div className="BasicModal__inner">{children}</div>
    </Modal>
  )
}

BasicModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}

BasicModal.defaultProps = {
  isOpen: false,
  children: false,
}

export default BasicModal
