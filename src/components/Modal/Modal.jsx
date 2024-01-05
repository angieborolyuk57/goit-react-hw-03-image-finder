import React, { Component } from 'react';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
  state = {
    isLoaded: false,
  };

  onImageLoad = () => {
    this.setState({ isLoaded: true });
  };

  onCloseModal = () => {
    this.setState({ isLoaded: false });
  };

  render() {
    const { isLoaded } = this.state;
    const { visibleData, onCloseModal } = this.props;
    return (
      <div className={css.overlay}>
        <button
          type="button"
          className={css.modalCloseBtn}
          onClick={onCloseModal}
        >
          x
        </button>
        <div>
          {!isLoaded && <Loader />}
          <div className={!isLoaded ? css.hidden : css.modal}>
            <img
              className={css.largeImage}
              src={visibleData.largeImageURL}
              alt={visibleData.tags}
              onLoad={() => {
                this.onImageLoad();
              }}
            />
            <div className={css.tags}>{visibleData.tags}</div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  visibleData: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onCloseModal: PropTypes.func.isRequired,
};