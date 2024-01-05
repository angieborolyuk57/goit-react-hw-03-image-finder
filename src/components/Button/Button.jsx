import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
      <button
        type="button"
        className={css.Button}
        onClick={() => {
          onLoadMore();
        }}
      >
        Load more
      </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;