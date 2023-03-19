import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import { ImgGalleryItem, ImgGalleryItemImg } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func,
    isOpenModal: PropTypes.bool,
  };

  toggleModal = () => {
    this.setState(({ isOpenModal }) => ({
      isOpenModal: !isOpenModal,
    }));
  };

  render() {
    // const isOpenModal = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <ImgGalleryItem>
        <ImgGalleryItemImg
          src={webformatURL}
          alt={tags}
          loading="lazy"
          onClick={this.toggleModal}
        />
        {this.state.isOpenModal && (
          <Modal
            tags={tags}
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </ImgGalleryItem>
    );
  }
}

export default ImageGalleryItem;