import './PageSideBarView.scss';
import React from 'react';
import { SideBarItem } from './../SideBarItem/SideBarItem';

export const PageSideBarView = ({ sideBarLinksList }) => {
  return (
    <div className="app-sidebar d-flex border border-info bg-info">
      <ul className="flex-grow-1 p-0 d-flex flex-column justify-content-center align-items-center">
        {sideBarLinksList.map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
