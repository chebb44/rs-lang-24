import React, { useCallback } from 'react';
import { PageHeaderView } from '../components/PageHeaderView/PageHeaderView';
import { useDispatch } from 'react-redux';
import { actionLogOutUser } from '../reducers/currentUser/currentUserActions';

export const PageHeader = () => {
  const dispatch = useDispatch();
  const logoutCallback = useCallback(() => {
    dispatch(actionLogOutUser());
  }, [dispatch]);
  return <PageHeaderView logoLink="/app" logOut={logoutCallback} />;
};
