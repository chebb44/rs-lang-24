import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { DictionaryPage } from './../pages/DictionaryPage/DictionaryPage';
import { useSelector } from 'react-redux';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';

export const App = () => {
  let { path } = useRouteMatch();
  const { token } = useSelector(currentUserSelector);
  console.log("App -> token", token)
  return token ? (
    <div className="app-container">
      <header>Page Header </header>
      <Switch>
        <Route path={`${path}dictionary`} component={DictionaryPage} />
        <Route exact path={path}>
          <h1>Main Page</h1>
        </Route>
        <Route path="/">
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
