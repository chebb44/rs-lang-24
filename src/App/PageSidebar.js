import React from 'react';
import { PageSideBarView } from '../components/PageSideBarView/PageSideBarView';
import { sideBarLinksList } from './sideBarLinksList';

export const PageSideBar = () => {
  return <PageSideBarView linkList={sideBarLinksList} />;
};
