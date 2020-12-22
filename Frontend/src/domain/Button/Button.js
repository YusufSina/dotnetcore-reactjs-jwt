import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnType, float, text, onClick }) {
  return (
    <button type="button" className={`btn btn-${btnType} float-${float}`} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  btnType: PropTypes.string,
  float: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnType: 'light',
  float: 'center',
  onClick: null,
};

export default Button;
