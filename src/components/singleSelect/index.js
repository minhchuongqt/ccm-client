import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/lib/animated';
// import 'react-select/dist/react-select.css';
const { Option, SingleValue  } = components;
const IconOption = (props) => {
  return (
    <Option {...props}>
      {props.data.iconUrl && <img src={props.data.iconUrl} width="16px" />}&nbsp;
      {props.data.label}
    </Option>
)};

const ValueOption = props => {
  return (
    <SingleValue {...props}> 
        {props.data.iconUrl && 
          <img 
            src={props.data.iconUrl} width="16px"/>}&nbsp;
        {" "+(props.data.label || '')} 
    </SingleValue>
  )
}

const SearchSelect = (props) => {
  const { isValid } = props;
  let style = {...props.style};
  if (isValid !== null) {
    const color = isValid ? '#3c763d' : '#a94442';
    style = { borderColor: color };
  }

  return (
    <Select
      closeMenuOnSelect={true}
      components={makeAnimated()}
      {...props}
      style={style}
      name="colors"
      components={ {Option: IconOption, SingleValue: ValueOption  } }
      // className="basic-multi-select"
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