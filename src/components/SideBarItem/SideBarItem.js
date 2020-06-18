import './SideBarItem.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItemLinks } from '../SidebarItemLinks/SidebarItemLinks';

export const SideBarItem = ({ item }) => {
  const { head, headLink, items } = item;
  return (
    <li className="sidebar-parts">
      {headLink ? (
        <Link to={headLink}>
          <button className="btn part-header-btn">{head}</button>
        </Link>
      ) : (
        <span className="part-header">{head}</span>
      )}
      <SidebarItemLinks items={items} />
    </li>
  );
};
