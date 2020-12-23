import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history/history';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import PrivateRouter from './PrivateRouter';

function PublicRouter() {
  const auth = localStorage.getItem('token') !== null;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRouter Component={Dashboard} path="/dashboard" auth={auth} />
      </Switch>
    </Router>
  );
}

export default PublicRouter;
