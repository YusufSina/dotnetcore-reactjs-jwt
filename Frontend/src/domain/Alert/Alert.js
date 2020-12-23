import React from 'react';
import PropTypes from 'prop-types';

function Alert({ active, errors }) {
  const listItems = errors.map((error, index) => <li key={index}>{error}</li>);

  if (active) {
    return (
      <div className="alert alert-danger" role="alert">
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

  return null;
}

Alert.propTypes = {
  active: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
};

export default Alert;
