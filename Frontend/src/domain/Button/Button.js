import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnType, float, text, onClick, disabled }) {
  return (
    <button type="button" className={`btn btn-${btnType} float-${float}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  btnType: PropTypes.string,
  float: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  btnType: 'light',
  float: 'center',
  onClick: null,
  disabled: false,
};

export default Button;
