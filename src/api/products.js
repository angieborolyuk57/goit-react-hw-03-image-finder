import axios from "axios";
import baseUrl from './api.js';

/**
 *  Gets array of objects from server
 * @function getImages
 * @param {string} searchQuery
 * @returns {Promise} Promise
 */
const getImages = async (search_query, page) => {
  const { data } = await axios.get(
    `${baseUrl.url}?key=36587014-7f3f795310e69f6b2134ce178&q=${search_query}
      &image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return data;
};

export { getImages };