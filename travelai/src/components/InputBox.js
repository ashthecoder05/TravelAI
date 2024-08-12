import React from 'react';
import './InputBox.css';

const STYLES = ['input--primary', 'input--outline'];

const SIZES = ['input--medium', 'input--large'];

export const InputBox = ({
  placeholder,
  value,
  onChange,
  inputStyle,
  inputSize,
  type = 'text',
  style = {width: '500px', height: '100px', fontSize: '16px'}
}) => {
  const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

  const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0];

  return (
    <input
      type={type}
      className={`input-box ${checkInputStyle} ${checkInputSize}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};
