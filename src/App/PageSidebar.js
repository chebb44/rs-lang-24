import React, { useCallback } from 'react';
import { PageSideBarView } from '../components/PageSideBarView/PageSideBarView';
import { sideBarLinksList } from './constants/sideBarLinksList';
import { useDispatch } from 'react-redux';
import { actionToggleSideBar } from '../reducers/appState/appStateActions';

export const PageSideBar = () => {
  const dispatch = useDispatch();
  const hideSidebar = useCallback(() => {
    dispatch(actionToggleSideBar());
  }, [dispatch]);
  return (
    <PageSideBarView
      sideBarLinksList={sideBarLinksList}
      hideSidebar={hideSidebar}
    />
  );
};
