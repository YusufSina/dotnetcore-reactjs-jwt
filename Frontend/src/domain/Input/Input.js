import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, placeholder, onChange, className }) {
  return (
    <div>
      <input type={type} value={value} className={`form-control ${className}`} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
};

export default Input;
