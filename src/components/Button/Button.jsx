import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return <LoadMoreBtn onClick={() => loadMore()}>Load more</LoadMoreBtn>;
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;