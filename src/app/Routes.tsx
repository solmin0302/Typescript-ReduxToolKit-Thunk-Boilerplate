import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import BasePage from './BasePage';

export default function Routes(): JSX.Element {
  const isAuthorized = true;

  return (
    <Switch>
      {!isAuthorized ? (
        <Route>
          <div>needAuthPage</div>
        </Route>
      ) : (
        <Redirect from="/auth" to="/" />
      )}
      {/* <Route path="/error" component={ErrorsPage} /> */}
      {!isAuthorized ? (
        /* Redirect to `/auth` when user is not authorized */
        <Redirect to="/auth/login" />
      ) : (
        // <Layout>
        //   <BasePage />
        // </Layout>
        <BasePage />
      )}
    </Switch>
  );
}
