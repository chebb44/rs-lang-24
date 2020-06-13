import React from 'react';
import './PageSelector.scss';
import { START_PAGE } from './PAGES';
import { useSelector } from 'react-redux';
import { selectorPageSelector } from './pageSelectorReducer';

export const PageSelector = () => {
  const { page } = useSelector(selectorPageSelector);
  return (
    <div className="root-app-container">
      <RenderSwitch page={page} />
    </div>
  );
};

const RenderSwitch = (page) => {
  switch (page) {
    case START_PAGE:
      return <h1>Start Page</h1>;
    default:
      return <h1>Start Page</h1>;
  }
};
