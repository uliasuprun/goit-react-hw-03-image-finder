import { Component } from 'react';
import { OverlayWindow, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    handleBackdropClick: PropTypes.func,
    handleKeyDown: PropTypes.func,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <OverlayWindow onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} loading="lazy" />
        </ModalWindow>
      </OverlayWindow>,
      modalRoot
    );
  }
}

export default Modal;