import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { DictionaryPage } from './../pages/DictionaryPage/DictionaryPage';

export const App = () => {
  let { path, url } = useRouteMatch();
  console.log('App -> url', url);
  console.log('App -> path', path);
  return (
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
  );
};
