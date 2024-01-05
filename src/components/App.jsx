import React, { Component } from 'react';
import Searchbar from './SearchBar/SearchBar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import Modal from './Modal/Modal.jsx';
import Loader from './Loader.jsx';
import { getImages } from 'api/products.js';
import {
  checkResponse,
  onError,
  onInputEmpty,
  onSameRequest,
} from 'api/api.js';

export default class App extends Component {
  state = {
    modal: { isOpen: false, visibleData: null },
    images: [],
    isLoading: false,
    searchQuery: 'love',
    page: 1,
    totalImages: 0,
  };

  async componentDidMount() {
    this.fetchImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }
  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const response = await getImages(searchQuery, page);
      checkResponse(response, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        totalImages: response.totalHits,
      }));
    } catch (error) {
      onError(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onOpenModal = data => {
    this.setState({
      modal: {
        isOpen: true,
        visibleData: data,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: { isOpen: false, visibleData: null },
    });
  };

  
  onSubmit = (searchQuery, form) => {
    if (!searchQuery) {
      onInputEmpty();
      return;
    }
    if (searchQuery === this.state.searchQuery) {
      onSameRequest(this.state.searchQuery);
      form.reset();
      return;
    }
    this.setState({
      searchQuery: searchQuery,
      images: [],
      page: 1,
      totalImages: 0,
    });
    form.reset();
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, images, modal, totalImages } = this.state;
    const showButton = !isLoading && totalImages !== images.length;
    return (
      <div>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        {images.length > 0 ? (
          <ImageGallery imagesArray={images} onOpenModal={this.onOpenModal} />
        ) : null}
        {showButton ? <Button onLoadMore={this.onLoadMore} /> : null}
        {modal.isOpen && (
          <Modal
            visibleData={modal.visibleData}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}