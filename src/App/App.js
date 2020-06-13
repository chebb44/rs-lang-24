import React from 'react';
import './PageSelector.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { DictionaryPage } from '../pages/DictionaryPage/DictionaryPage';

export const App = () => {
  return (
    <div className="root-app-container">
      <BrowserRouter>
        <header>APP HEADER</header>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dictionary" component={DictionaryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
