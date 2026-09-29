import {FaTimes} from 'react-icons/fa';
import Modal from 'react-modal';
import '../styles/modal.scss';

Modal.setAppElement('#root');

export interface ModalImage {
  src: string;
  alt: string;
}

interface ImgModalProps {
  image: ModalImage | null;
  onClose: () => void;
}

export function ImgModal({image, onClose}: ImgModalProps) {
  return (
    <Modal
      isOpen={image !== null}
      onRequestClose={onClose}
      className="modal__panel"
      overlayClassName="modal__overlay"
    >
      {image && (
        <>
          <div className="overlay__header">
            <h1>{image.alt}</h1>
            <button className="button--cancel" onClick={onClose} autoFocus>
              <FaTimes />
            </button>
          </div>
          <div className="modal__content">
            <img src={image.src} alt={image.alt} />
          </div>
        </>
      )}
    </Modal>
  );
}
