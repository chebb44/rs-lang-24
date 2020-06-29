import './PageSideBarView.scss';
import React from 'react';
import { SideBarItem } from './../SideBarItem/SideBarItem';

export const PageSideBarView = ({ sideBarLinksList, hideSidebar }) => {
  return (
    <div className="app-sidebar d-flex">
      <ul className="sidebar-link-list flex-grow-1">
        {sideBarLinksList.map((item, index) => (
          <SideBarItem key={index} item={item} hideSidebar={hideSidebar}/>
        ))}
      </ul>
    </div>

  );
};
