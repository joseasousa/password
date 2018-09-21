import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter as Router } from 'connected-react-router';

import history from './history';

import Home from './views/Home';
import Login from './views/Login';
import Cad from './views/Cad';
import CadSite from './views/Home/CadSite';
import NotFound from './views/NotFound';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/cadastro" render={() => <Cad />} />
      <Route path="/cadSite" render={() => <CadSite />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
