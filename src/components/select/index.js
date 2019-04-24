import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const SearchSelect = (props) => {
  const { isValid } = props;
  let style = {};
  if (isValid !== null) {
    const color = isValid ? '#3c763d' : '#a94442';
    style = { borderColor: color };
  }

  return (
    <Select
      {...props}
      style={style}
    />
  );
};

SearchSelect.propTypes = {
  isValid: PropTypes.bool,
};

SearchSelect.defaultProps = {
  isValid: null,
};

export default SearchSelect;
