import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import SamplePage from './pages/SamplePage';

export default function BasePage(): JSX.Element {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/sample" />
        <Route path="/sample" component={SamplePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </div>
  );
}
