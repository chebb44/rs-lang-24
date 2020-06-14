import './PageHeaderView.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const PageHeaderView = ({ logoLink = '/', logOut }) => (
  <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
    <Link to={logoLink}>
      <span className="navbar-brand text-white">RS Lang</span>
    </Link>
    <button className="btn btn-secondary" onClick={logOut}>
      Log Out
    </button>
  </header>
);
