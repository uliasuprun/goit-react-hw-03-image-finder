import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  HeaderSearch,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchName: '',
  };
  static propTypes = {
    searchName: PropTypes.string,
    handleFormChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
  };
  handleFormChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      return toast.error('Write search name');
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;
    return (
      <HeaderSearch>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <ImSearch />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="searchName"
            value={searchName}
            onChange={this.handleFormChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearch>
    );
  }
}

export default Searchbar;