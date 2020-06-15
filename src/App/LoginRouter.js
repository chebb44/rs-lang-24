import React from 'react';
import './LoginRouter.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { App } from './App';
import { routes } from './constants/routes';

export const LoginRouter = () => {
  return (
    <div className="root-container flex-grow-1">
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.loginPage} component={LoginPage} />
          <Route path={routes.mainApp} component={App} />
          <Route path="/">
            <h3>Page not found</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
