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

// import React from 'react';
// import chroma from 'chroma-js';
// import Select from 'react-select';

// const colourStyles = {
//   control: styles => ({ ...styles, backgroundColor: 'white' }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? null
//         : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
//       color: isDisabled
//         ? '#ccc'
//         : isSelected
//           ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
//           : data.color,
//       cursor: isDisabled ? 'not-allowed' : 'default',
//     };
//   },
//   multiValue: (styles, { data }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: color.alpha(0.1).css(),
//     };
//   },
//   multiValueLabel: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//   }),
//   multiValueRemove: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//     ':hover': {
//       backgroundColor: data.color,
//       color: 'white',
//     },
//   }),
// };

// const SearchSelect = (props) => {
//   return (
//     <Select
//       closeMenuOnSelect={false}
//       isMulti
//       {...props}
//       styles={colourStyles}
//     />
//     )
//   };

//   export default SearchSelect