import './SideBarItem.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItemLinks } from '../SidebarItemLinks/SidebarItemLinks';

export const SideBarItem = ({ item }) => {
  const { head, headLink, items } = item;
  return (
    <li className="">
      {headLink ? (
        <Link to={headLink}>
          <span className="part-header">{head}</span>
        </Link>
      ) : (
        <span className="part-header">{head}</span>
      )}
      <SidebarItemLinks items={items} />
    </li>
  );
};
