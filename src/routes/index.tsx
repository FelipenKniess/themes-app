import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CreateTheme from '../Pages/CreateTheme';

const Routes:React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create" component={CreateTheme} />
  </Switch>
);

export default Routes;
