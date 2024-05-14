import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='-#EA7E5D'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;