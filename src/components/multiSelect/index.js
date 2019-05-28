import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import * as R from 'ramda';
import makeAnimated from 'react-select/lib/animated';
// import 'react-select/dist/react-select.css';
const { Option, MultiValue  } = components;
const IconOption = (props) => {
  return (
    <Option {...props}>
      {props.data.iconUrl && <img src={props.data.iconUrl} width="16px" />}&nbsp;
      {props.data.label}
    </Option>
)};

const ValueOption = props => {
  return (
    <MultiValue {...props} style> 
        {props.data.iconUrl && 
          <img 
            src={props.data.iconUrl} width="16px"/>}&nbsp;
        {" "+(props.data.label || '')} 
    </MultiValue>
  )
}

const SearchSelect = (props) => {
  const { isValid } = props;
  let style = {};
  if (isValid !== null) {
    const color = isValid ? '#3c763d' : '#a94442';
    style = { borderColor: color };
  }

  return (
    <Select
      closeMenuOnSelect={false}
      components={{Option: IconOption, MultiValue: ValueOption  }}
      {...props}
      style={style}
      isMulti
      name="colors"
      className="basic-multi-select"
      classNamePrefix="select"
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