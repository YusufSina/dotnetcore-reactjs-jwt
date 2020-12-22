import React from 'react';
import PropTypes from 'prop-types';

function Label({ text }) {
  return (
    <label>{text}</label>
  );
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
