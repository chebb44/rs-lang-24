import React, { useCallback } from 'react';
import { PageHeaderView } from '../components/PageHeaderView/PageHeaderView';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogOutUser } from '../reducers/currentUser/currentUserActions';
import { actionToggleSideBar } from '../reducers/appState/appStateActions';
import { appStateSelector } from './../reducers/appState/appStateReducer';

export const PageHeader = () => {
  const dispatch = useDispatch();
  const logoutCallback = useCallback(() => {
    dispatch(actionLogOutUser());
  }, [dispatch]);
  const burgerClickHandler = useCallback(() => {
    dispatch(actionToggleSideBar());
  }, [dispatch]);
  const { isSideBarShow } = useSelector(appStateSelector);
  return (
    <PageHeaderView
      isSidebarShow={isSideBarShow}
      logoLink="/app"
      logOut={logoutCallback}
      burgerClickHandler={burgerClickHandler}
    />
  );
};
