import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarItemLinks.scss';

export const SidebarItemLinks = ({ items }) => {
  return items ? (
    <ul className="sidebar-sub-list-link">
      {items.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <button className="sub-links-btn btn">{item.name}</button>
          </Link>
        );
      })}
    </ul>
  ) : null;
};
