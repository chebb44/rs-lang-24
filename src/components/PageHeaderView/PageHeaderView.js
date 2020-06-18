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
    <header className="app-header d-flex justify-content-between align-items-center p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className={burgerStyles} onClick={burgerClickHandler}></div>
        <Link to={logoLink}>
          <h2 className="header-logo">RS Lang</h2>
        </Link>
      </div>
      <button className="btn button__log-out" onClick={logOut}>
        Log Out
      </button>
    </header>
  );
};
