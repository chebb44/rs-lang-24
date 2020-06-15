import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItemLinks = ({ items }) => {
  return items ? (
    <ul className="">
      {items.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <li className="">{item.name}</li>
          </Link>
        );
      })}
    </ul>
  ) : null;
};
