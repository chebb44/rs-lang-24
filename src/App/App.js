import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { DictionaryPage } from './../pages/DictionaryPage/DictionaryPage';
import { useSelector, useDispatch } from 'react-redux';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';
import { PageHeader } from './PageHeader';
import { PageSideBar } from './PageSidebar';
import { LearnPage } from '../pages/LearnPage/LearnPage';
import { Page404 } from '../pages/Page404/Page404';
import { StatisticPage } from '../pages/StatisticPage/StatisticPage';
import './App.scss';
import { appStateSelector } from './../reducers/appState/appStateReducer';
import { routes } from './constants/routes';
import { actionInitApp } from '../store/actionsForSaga';
import { CSSTransition } from 'react-transition-group';
// import {
//   getAllUserWords,
//   getWordById,
//   updateUserWord,
//   getWordsByPageAndGroup,
// } from '../utilities/network/wordsAPI';
// import {
//   createUserWord,
//   getUserWordById,
//   deleteUserWord,
// } from './../utilities/network/wordsAPI';
// import { HARD_WORD } from '../sagas/constants';
// import { LEARNED_WORD, DELETED_WORD } from './../sagas/constants';

export const App = () => {
  let { path } = useRouteMatch();
  const { token, id: userId } = useSelector(currentUserSelector);
  const { isSideBarShow, initDone } = useSelector(appStateSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionInitApp());
  }, [dispatch, token, userId]);
  return token ? (
    <div className="app-container">
      <PageHeader />
      <div className="main-container d-flex">
        <CSSTransition in={isSideBarShow} timeout={300} classNames="slide-left">
          <PageSideBar />
        </CSSTransition>
        {initDone ? (
          <div className="content-wrap flex-grow-1">
            <Switch>
              <Route path={routes.learn} component={LearnPage} />
              <Route path={routes.dictionary} component={DictionaryPage} />
              <Route path={routes.stats} component={StatisticPage} />
              <Route exact path={path}>
                <h1>Main Page</h1>
              </Route>
              <Route path="/">
                <Page404 />
              </Route>
            </Switch>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
