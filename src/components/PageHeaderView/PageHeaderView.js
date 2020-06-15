import './PageHeaderView.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const PageHeaderView = ({
  logoLink = '/',
  logOut,
  burgerClickHandler,
  isSidebarShow,
}) => {
  const burgerStyles = classNames({
    'app-burger': true,
    'rotate-burger': isSidebarShow,
  });
  return (
    <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className={burgerStyles} onClick={burgerClickHandler}></div>
        <Link to={logoLink}>
          <span className="navbar-brand text-white">RS Lang</span>
        </Link>
      </div>
      <button className="btn btn-secondary" onClick={logOut}>
        Log Out
      </button>
    </header>
  );
};
