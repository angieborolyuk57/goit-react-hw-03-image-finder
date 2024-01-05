import { Notify } from 'notiflix';

const baseUrl = {
  url: 'https://pixabay.com/api/',
};

export default baseUrl;

/**
 * Shows a message in case of an error
 *@function onError
 * @param {string} error
 */
export const onError = error => {
  Notify.failure(`Please, try again later. Error: ${error}`, {
    width: '280px',
    showOnlyTheLastOne: true,
    position: 'center-center',
    timeout: 3000,
    fontSize: '13px',
    borderRadius: '8px',
    cssAnimationStyle: 'from-top',
  });
};
/**
 * Shows a message if the input field is empty
 *@function onInputEmpty
 */
export const onInputEmpty = () => {
  Notify.failure('The search field cannot be empty, please try again.', {
    width: '280px',
    showOnlyTheLastOne: true,
    position: 'center-center',
    timeout: 2000,
    fontSize: '15px',
    borderRadius: '8px',
    cssAnimationStyle: 'from-top',
  });
  return '';
};
/**
 * Shows a message if the request is the same
 *@function onSameRequest
 * @param {string} request
 */
export const onSameRequest = request => {
  Notify.info(
    `Wanna see more "${request}" images? Just click "Load more" button!`,
    {
      width: '280px',
      showOnlyTheLastOne: true,
      position: 'center-center',
      timeout: 3000,
      fontSize: '15px',
      borderRadius: '8px',
      cssAnimationStyle: 'from-top',
    }
  );
  return '';
};
/**
 * Checks server response, shows messages, hides/shows loadmore button
 *@function checkResponse
 * @param {promise} response
 * @param {number} page
 */
export const checkResponse = (response, page) => {
  if (response.totalHits === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
      {
        width: '260px',
        showOnlyTheLastOne: true,
        position: 'center-center',
        timeout: 2000,
        fontSize: '15px',
        borderRadius: '8px',
        cssAnimationStyle: 'from-top',
      }
    );
    return;
  } else if (response.totalHits >= 1 && response.totalHits < 12) {
    Notify.success('Your images were successfully fetched!', {
      width: '260px',
      showOnlyTheLastOne: true,
      position: 'center-center',
      timeout: 2000,
      fontSize: '15px',
      borderRadius: '8px',
      cssAnimationStyle: 'from-top',
    });
  } else if (response.totalHits / 12 <= page) {
    Notify.failure(
      `We're sorry, but you've reached the end of search results.`,
      {
        width: '260px',
        showOnlyTheLastOne: true,
        position: 'center-center',
        timeout: 2000,
        fontSize: '15px',
        borderRadius: '8px',
        cssAnimationStyle: 'from-top',
      }
    );
  } else {
    Notify.success('Your images were successfully fetched!', {
      width: '260px',
      showOnlyTheLastOne: true,
      position: 'center-center',
      timeout: 2000,
      fontSize: '15px',
      borderRadius: '8px',
      cssAnimationStyle: 'from-top',
    });
  }
};