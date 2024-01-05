import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  onOpenModal,
}) => {
  return (
    <li className={css.GalleryItem}>
      <img
        className={css.ItemImage}
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={() => {
          onOpenModal({ largeImageURL, tags });
        }}
      />

      <div className={css.info}>
        <p className={css.infoItem}>
          <b>Likes</b>
          <span>{likes}</span>
        </p>
        <p className={css.infoItem}>
          <b>Views</b>
          <span>{views}</span>
        </p>
        <p className={css.infoItem}>
          <b>Comments</b>
          <span>{comments}</span>
        </p>
        <p className={css.infoItem}>
          <b>Downloads</b>
          <span>{downloads}</span>
        </p>
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
