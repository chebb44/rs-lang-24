import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { DictionaryPage } from './../pages/DictionaryPage/DictionaryPage';
import { useSelector } from 'react-redux';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';
import { PageHeader } from './PageHeader';
import { PageSideBar } from './PageSidebar';
import './App.scss';
import { appStateSelector } from './../reducers/appState/appStateReducer';

export const App = () => {
  let { path } = useRouteMatch();
  const { token } = useSelector(currentUserSelector);
  const { isSideBarShow } = useSelector(appStateSelector);

  return token ? (
    <div className="app-container">
      <PageHeader />
      <div className="main-container d-flex">
        {isSideBarShow && <PageSideBar />}
        <div className="content-wrap flex-grow-1">
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
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
