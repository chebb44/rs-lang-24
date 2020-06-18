import React from 'react';
import './Spinner.scss';
import { Spin } from './assets/Spin.js';

export const Spinner = () => {
  return (
    <div className="spinner">
      <Spin />
    </div>
  );
};
