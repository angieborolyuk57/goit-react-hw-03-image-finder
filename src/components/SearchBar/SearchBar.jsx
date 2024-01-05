import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form_element = event.currentTarget;
    const searchQuery = form_element.elements.searchQuery.value.trim();
    onSubmit(searchQuery, form_element);
  };
  return (
      <div className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder="Search images and photos..."
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Go
          </button>
        </form>
      </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;