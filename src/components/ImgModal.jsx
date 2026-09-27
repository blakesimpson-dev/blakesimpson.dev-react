import PropTypes from 'prop-types'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import '../styles/modal.scss'

Modal.setAppElement('#root')

const ImgModal = ({ innerRef, src, isImgModalOpen, closeImgModal }) => {
  return (
    <Modal
      ref={innerRef}
      isOpen={isImgModalOpen}
      onRequestClose={closeImgModal}
      className="modal__panel"
      overlayClassName="modal__overlay"
    >
      <div className="overlay__header">
        <h1>{src}</h1>
        <button className="button--cancel" onClick={closeImgModal} autoFocus>
          <FaTimes />
        </button>
      </div>
      <div className="modal__content">
        <img src={src} />
      </div>
    </Modal>
  )
}

ImgModal.displayName = 'ImgModal'

ImgModal.propTypes = {
  innerRef: PropTypes.object,
  src: PropTypes.string,
  isImgModalOpen: PropTypes.bool,
  closeImgModal: PropTypes.func,
}

export default ImgModal
