import toast, { Toaster } from 'react-hot-toast';

import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { MainWrapper } from './App.styled';

import { fetchImgGallery } from '../api/api';
class App extends Component {
  state = {
    images: [],
    nameRequest: '',
    page: 1,
    isLoading: false,
    error: null,
    totalHits: null,
  };

  getSearchNameForm = searchName => {
    this.setState({
      nameRequest: searchName,
      page: 1,
      images: [],
      totalHits: null,
    });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.nameRequest !== this.state.nameRequest
    ) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImgGallery(
          this.state.nameRequest,
          this.state.page
        );

        const arrImages = images.hits.map(
          ({ id, webformatURL, tags, largeImageURL }) => ({
            id,
            webformatURL,
            tags,
            largeImageURL,
          })
        );

        if (images.totalHits === 0) {
          return toast.error('Sorry, didn`t find, try another');
        }
        if (this.state.page >= 2) {
          return this.setState({
            images: [...prevState.images, ...arrImages],
            totalHits: images.totalHits,
          });
        }

        this.setState({
          images: arrImages,
          totalHits: images.totalHits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  showBtnLoadMore = () => {
    const ShowBtn = this.state.totalHits - this.state.page * 12;
    if (ShowBtn > 0 && !this.state.isLoading) {
      return true;
    }
    return false;
  };
  render() {
    const { isLoading, images, totalHits } = this.state;

    return (
      <MainWrapper>
        <Searchbar onSubmit={this.getSearchNameForm} />
        {/* <div>{isLoading && <div>Please wait... </div>}</div> */}

        {totalHits > 0 ? <ImageGallery foundImages={images} /> : null}

        {isLoading && <Loader />}
        {this.showBtnLoadMore() && <Button loadMore={this.loadMore} />}
        <Toaster position="top-right" reverseOrder={false} />
      </MainWrapper>
    );
  }
}

export default App;