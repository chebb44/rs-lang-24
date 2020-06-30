import './SideBarItem.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItemLinks } from '../SidebarItemLinks/SidebarItemLinks';

export const SideBarItem = ({ item, hideSidebar }) => {
  const { head, headLink, items } = item;
  console.log(head, headLink, items);
  return (
    <li className="sidebar-parts">
      {headLink ? (
        <Link to={headLink}>
          <button onClick={hideSidebar} className="btn part-header-btn">
            {head}
          </button>
        </Link>
      ) : (
        <span className="part-header">{head}</span>
      )}
      <SidebarItemLinks hideSidebar={hideSidebar} items={items} />
    </li>
  );
};
