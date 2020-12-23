import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function PrivateRouter({ Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (auth === true ? <Component {...props} />
        : <Redirect to="/login" />)}
    />
  );
}

PrivateRouter.propTypes = {
  Component: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

export default PrivateRouter;
