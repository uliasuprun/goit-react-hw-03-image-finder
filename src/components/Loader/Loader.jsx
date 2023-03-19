import { Bars } from 'react-loader-spinner';
import { PositionLoader } from './Loader.styled';

const Loader = () => {
  return (
    <PositionLoader>
      <Bars
        height="80"
        width="80"
        color="darkred"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </PositionLoader>
  );
};

export default Loader;