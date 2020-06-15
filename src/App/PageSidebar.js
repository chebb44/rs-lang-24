import React from 'react';
import { PageSideBarView } from '../components/PageSideBarView/PageSideBarView';
import { sideBarLinksList } from './constants/sideBarLinksList';

export const PageSideBar = () => {
  return <PageSideBarView sideBarLinksList={sideBarLinksList} />;
};
