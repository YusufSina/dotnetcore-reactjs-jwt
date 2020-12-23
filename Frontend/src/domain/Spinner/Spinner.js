import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

function Spinner({ active }) {
  if (active) {
    return (
      <div className="spinner-container text-center">
        <div className="spinner-border text-primary align-middle" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return null;
}

Spinner.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Spinner;
